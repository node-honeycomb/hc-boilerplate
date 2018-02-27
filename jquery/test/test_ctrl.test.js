'use strict';
const assert = require('power-assert');
const request = require('supertest');
const app = require('./env');

describe('test_ctrl.js', () => {
  before(() => {
    app.run(() => {}, {port: 0});
  });

  describe('# welcome page', () => {
    it(`get ${app.config.prefix} should response data`, (done) => {
      request(app.express)
        .get(app.config.prefix)
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .end(done);
    });
  });

  after(() => {
    process.exit();
  });
});
