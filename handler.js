module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  };
};

module.exports.moi = async event => {
  const { name } = event.pathParameters;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${name}! how it your day?`,
      },
      null,
      2,
    ),
  };
};

module.exports.hola = async event => {
  const { name } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hola en español! ${name}` }, null, 2),
  };
};
