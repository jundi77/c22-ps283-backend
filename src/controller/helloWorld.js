/**
 * 
 * @param {import('@hapi/hapi'.Request)} req 
 * @param {import('@hapi/hapi').ResponseToolkit} h 
 */
module.exports = (req, h) => {
  return JSON.stringify(process.env)
  // return 'Hello world';
}