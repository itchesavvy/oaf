'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  /* port: process.env.PORT || 3000, */ 
  port: process.env.OPENSHIFT_INTERNAL_PORT || process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000,
  ipaddress: process.env.OPENSHIFT_INTERNAL_IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};