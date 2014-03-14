'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: [ (function() {
            if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
              return process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
					  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
					  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
					  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
					  process.env.OPENSHIFT_APP_NAME;
            } else {
              return 'mongodb://localhost/fullstack-dev';
            }
          }()) ] 
  }
};