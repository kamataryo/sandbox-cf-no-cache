// simply echo qs
const handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        queryStringParameters: event.queryStringParameters
      })
    }
  }

module.exports.handler = handler
