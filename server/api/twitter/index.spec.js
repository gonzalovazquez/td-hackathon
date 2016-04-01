'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var twitterCtrlStub = {
  index: 'twitterCtrl.index',
  show: 'twitterCtrl.show',
  create: 'twitterCtrl.create',
  update: 'twitterCtrl.update',
  destroy: 'twitterCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var twitterIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './twitter.controller': twitterCtrlStub
});

describe('Twitter API Router:', function() {

  it('should return an express router instance', function() {
    twitterIndex.should.equal(routerStub);
  });

  describe('GET /api/twitters', function() {

    it('should route to twitter.controller.index', function() {
      routerStub.get
        .withArgs('/', 'twitterCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/twitters/:id', function() {

    it('should route to twitter.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'twitterCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/twitters', function() {

    it('should route to twitter.controller.create', function() {
      routerStub.post
        .withArgs('/', 'twitterCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/twitters/:id', function() {

    it('should route to twitter.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'twitterCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/twitters/:id', function() {

    it('should route to twitter.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'twitterCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/twitters/:id', function() {

    it('should route to twitter.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'twitterCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
