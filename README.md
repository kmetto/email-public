# email-public

## Getting Started

Use this package to detect is given email belongs to public email service. List contains 3000+ services. you can fell free to add unlisted services.

### Installing

```
npm install email-public
```

### Usage

```
var isPublicEmail = require('email-public')
var email = 'met9127@gmail.com'

if(isPublicEmail(email)){
	//do some things
}
```