var services = require("./emails.js");

module.exports = function isPublic(email){
	var service = email.split("@")[1];
	return (services.indexOf(service) == -1)? false : true;
}