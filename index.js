const services = require('./emails.js');

module.exports = function isPublic(email) {
  const service = email.split('@')[1];
  return services.indexOf(service) >= 0;
};
