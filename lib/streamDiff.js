var pump = require('pump-chain');
  return pump(inputStream, through({
  }, write, end));