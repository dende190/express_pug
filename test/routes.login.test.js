const assert = require('assert');
const proxyquire = require('proxyquire');
const testServer = require('../utils/testServer');

describe('routes - login', function() {
  const route = proxyquire('../routes/login', {});
  const request = testServer(route);
  describe('/', function() {
    it('should respond with session id', function(done) {
      request.post('/login').end((error, res) => {
        assert.deepEqual(res.body, true);
      });

      done();
    });
  });
});
