'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'responsive-image': [
      {
        sourceDir: 'assets/images/generate',
        destinationDir: 'assets/images/responsive',
        quality: 5,
        // justCopy: true,
        removeSourceDir: true,
        supportedWidths: [1000, 500, 100, 50],
        lqip: {
          type: 'inline',
          width: 25
        }
      },
      {
        sourceDir: 'assets/images/small',
        destinationDir: 'assets/images/smallresponsive',
        quality: 10,
        // justCopy: true,
        removeSourceDir: true,
        supportedWidths: [10, 25],
        lqip: {
          type: 'remote',
          width: 10
        }
      }
    ]
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
