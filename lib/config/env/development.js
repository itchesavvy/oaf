'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/fullstack-dev'
	// if OPENSHIFT env variables are present, use the available connection info:
	if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
	  uri: process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
	  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
	  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
	  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
	  process.env.OPENSHIFT_APP_NAME;
	}
  }
};