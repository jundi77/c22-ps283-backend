const controller = require('./controller');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: controller.helloWorld,
  },

  {
    method: 'GET',
    path: '/ml',
    handler: controller.mlHealth,
    options: {
      auth: 'ml-default'
    },
  },

  {
    method: 'POST',
    path: '/ml/predict',
    handler: controller.mlPredict,
    options: {
      auth: 'ml-default',
      payload: {
        output: 'data',
        maxBytes: 209715200,
        parse: false,
      },
    },
  },

  {
    method: 'GET',
    path: '/md/dummy',
    handler: controller.mdDummy,
  },
]