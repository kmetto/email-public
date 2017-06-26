"use strict";

var expect = require("chai").expect;
var isPublic = require("../index");
var publicEmails = require("../emails");
var privateEmails = [
	"mail@codeswat.com",
	"mail@vrp.com",
	"mail@greencoachconsulting.com",
	"mail@myprivateemail.com"
];

describe("isPublic()", function(){
	it("Shoud return true to public emails", function(){
		for(var i = 0; i < publicEmails.length; i++){
			var email = "mail@"+publicEmails[i];
			expect(isPublic(email)).to.equal(true);
		}
	});

	it("Shoud return false to private emails", function(){
		for(var i = 0; i < privateEmails.length; i++){
			var email = privateEmails[i];
			expect(isPublic(email)).to.equal(false);
		}
	})
});