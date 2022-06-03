const axios = require('axios')

/**
 * 
 * @param {import('@hapi/hapi'.Request)} req 
 * @param {import('@hapi/hapi').ResponseToolkit} h 
 */
module.exports = async (req, h) => {
  let response = await axios.post(process.env.ML_PROCESSING_URI, req.payload);
  return response.data;
}