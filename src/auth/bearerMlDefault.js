module.exports = {
  allowQueryToken: true,
  validate: async (req, token, h) => {
    const isValid = token === process.env._ML_API_KEY
    const credentials = { token }
    const artifacts = { permission: "ml"  }

    return { isValid, credentials, artifacts }
  }
}