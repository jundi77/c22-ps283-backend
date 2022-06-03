const axios = require('axios')

/**
 * 
 * @param {import('@hapi/hapi'.Request)} req 
 * @param {import('@hapi/hapi').ResponseToolkit} h 
 */
module.exports = async (req, h) => {
  try {
    var response = await axios.post(process.env._ML_PROCESSING_URI + '/predict', req.payload, {
      headers: {
        'content-type': req.headers['content-type']
      }
    });
  } catch (error) {
    return h.response(error.response? error.response.data : error.toString());
  }
  return h.response(response.data);
}