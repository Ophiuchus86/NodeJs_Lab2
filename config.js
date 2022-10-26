const convict = require('convict')

convict.addFormat(require('convict-format-with-validator').ipaddress);

const config = convict({
   env: {
      doc: 'The application environment.',
      format: ['production', 'development', 'test'],
      default: 'development',
      env: 'NODE_ENV'
   },
   ip: {
      doc: 'The IP address to bind.',
      format: 'ipaddress',
      default: '127.0.0.1',
      env: 'IP_ADDRESS',
   },
   port: {
      doc: 'The port to bind.', 
      format: 'port',
      default: 3000,
      env: 'PORT',
      arg: 'port'
   },
   proxy_port: {
    doc: 'The proxy port to bind.', 
    format: 'port',
    default: 3001,
    env: 'PROXY_PORT',
    arg: 'proxy_port'
 },
});

config.validate({ allowed: 'strict' }); // виконувати перевірку параметрів

module.exports = config;
