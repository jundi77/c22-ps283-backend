const axios = require('axios')

/**
 * 
 * @param {import('@hapi/hapi'.Request)} req 
 * @param {import('@hapi/hapi').ResponseToolkit} h 
 */
module.exports = async (req, h) => {
  let response = await axios.get(process.env._ML_PROCESSING_URI);
  return response.data;
}