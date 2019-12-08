const createResponse = (message, data) => ({
  message,
  data
});

const createBearerTokenResponse = (message, token) => {
  const tokenData = {
    type: 'Bearer',
    token
  };

  return {
    message,
    data: tokenData
  };
};

module.exports = { createResponse, createBearerTokenResponse };
