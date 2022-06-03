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
    config: {
      auth: 'ml-default'
    },
  },

  {
    method: 'POST',
    path: '/ml/predict',
    handler: controller.mlPredict,
    config: {
      auth: 'ml-default'
    },
  }
]