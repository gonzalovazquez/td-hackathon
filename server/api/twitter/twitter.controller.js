/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/twitters              ->  index
 * POST    /api/twitters              ->  create
 * GET     /api/twitters/:id          ->  show
 * PUT     /api/twitters/:id          ->  update
 * DELETE  /api/twitters/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Twitter from './twitter.model';

var TwitterAPI = require('twitter');

var client = new TwitterAPI({
  consumer_key: 'gjwIrqBzHsCFlBA0JQAT12kxp',
  consumer_secret: 'dXqtTpajQMpBRb47mRcmodTjCAH1d3Fd3JrFW3B2mpm9yYacVH',
  access_token_key: '582822528-hGdZJMFnsgHr3TTZdVJU40JoYNXZtDeTvJ2i4xjs',
  access_token_secret: '3ujYfkKxukJLcZJsygO1FkorZXstgv8mjkxU2iAFEXINc'
});

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Twitters
export function index(req, res) {
  return Twitter.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Twitter from the DB
export function show(req, res) {
  return Twitter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Twitter in the DB
export function create(req, res) {
  return Twitter.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Twitter in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Twitter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Twitter from the DB
export function destroy(req, res) {
  return Twitter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Return the twitter hashtag information
export function search(req, res) {

  var oEmbedTweets = [], tweets = [];

  client.get('search/tweets', {q: '#' + req.params.value, count: 10},
      function (error, data, response) {

        tweets = data.statuses;
        //console.log(tweets);

        var i = 0, len = tweets.length;

        for(i; i < len; i++) {
          getOEmbed(tweets[i]);
        }
      }
  );

  function getOEmbed(tweet){

    // oEmbed request params
    var params = {
      "id": tweet.id_str,
      "maxwidth": 305,
      "hide_thread": true,
      "omit_script": true
    };

    // request data
    client.get('statuses/oembed', params, function (err, data, resp) {
      tweet.oEmbed = data;
      oEmbedTweets.push(tweet);

      // do we have oEmbed HTML for all Tweets?
      if (oEmbedTweets.length == tweets.length) {
        res.setHeader('Content-Type', 'application/json');
        res.send(oEmbedTweets);
      }
    });

  }

}
