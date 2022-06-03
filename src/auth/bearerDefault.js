module.exports = {
  allowQueryToken: true,
  validate: async (req, token, h) => {
    const isValid = token === process.env._API_KEY
    const credentials = { token }
    const artifacts = { permission: "all"  }

    return { isValid, credentials, artifacts }
  }
}