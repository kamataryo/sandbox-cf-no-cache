// simply echo qs
const handler = async event => {
    return {
      statusCode: 200,
      headers: {
        'Cache-Control': event.path === "/no-cache" ? 'no-cache, max-age=0' : "max-age=120"
      },
      body: JSON.stringify({
        queryStringParameters: event.queryStringParameters
      })
    }
  }

module.exports.handler = handler
