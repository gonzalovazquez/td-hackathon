'use strict';

var app = require('../..');
import request from 'supertest';

var newTwitter;

describe('Twitter API:', function() {

  describe('GET /api/twitters', function() {
    var twitters;

    beforeEach(function(done) {
      request(app)
        .get('/api/twitters')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          twitters = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      twitters.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/twitters', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/twitters')
        .send({
          name: 'New Twitter',
          info: 'This is the brand new twitter!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTwitter = res.body;
          done();
        });
    });

    it('should respond with the newly created twitter', function() {
      newTwitter.name.should.equal('New Twitter');
      newTwitter.info.should.equal('This is the brand new twitter!!!');
    });

  });

  describe('GET /api/twitters/:id', function() {
    var twitter;

    beforeEach(function(done) {
      request(app)
        .get('/api/twitters/' + newTwitter._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          twitter = res.body;
          done();
        });
    });

    afterEach(function() {
      twitter = {};
    });

    it('should respond with the requested twitter', function() {
      twitter.name.should.equal('New Twitter');
      twitter.info.should.equal('This is the brand new twitter!!!');
    });

  });

  describe('PUT /api/twitters/:id', function() {
    var updatedTwitter;

    beforeEach(function(done) {
      request(app)
        .put('/api/twitters/' + newTwitter._id)
        .send({
          name: 'Updated Twitter',
          info: 'This is the updated twitter!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTwitter = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTwitter = {};
    });

    it('should respond with the updated twitter', function() {
      updatedTwitter.name.should.equal('Updated Twitter');
      updatedTwitter.info.should.equal('This is the updated twitter!!!');
    });

  });

  describe('DELETE /api/twitters/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/twitters/' + newTwitter._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when twitter does not exist', function(done) {
      request(app)
        .delete('/api/twitters/' + newTwitter._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
