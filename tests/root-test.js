var chai = require('chai');
var expect = chai.expect;
var axios = require('axios');

describe('microservice', function(){
  var server;
  var port = process.env.PORT || 3000;

  before(() => { server = require('../index')});
  after(() => { server.close(); });

  it('should return http code 200 OK on /', function() {
    return axios.get(`http://localhost:${port}/`).then((res) => {
      expect(res.status).to.equal(200);
    });
  });

  it('status should be ok on /', function() {
    return axios.get(`http://localhost:${port}/`).then((res) => {
      expect(res.data.status).to.equal("ok");
    });
  });

});
