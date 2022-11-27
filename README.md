
# PactumJS Api Testing

PactumJS is used here for Api Testing

- [Pactum JS](https://pactumjs.github.io/)



## Project Configuration
Project has main file named package.json. This is the heart of any Node project. It records important metadata about a project.
It also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

package.json
```bash
{
  "name": "apitestingusingpactumjsmocha",
  "version": "1.0.0",
  "description": "",
  "main": "test.js",
  "scripts": {
    "test": "mocha --timeout 10000 testapiwithbuilderstyle.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "mocha": "^9.2.2",
    "pactum": "^3.1.4"
  }
}
```


## Installation

Install PactumJs with npm

```bash
# install pactum
    npm install -D pactum

# install a test runner
    npm install -D mocha

cd my-project
```
    
## Usage/Examples

```javascript

const { spec , request , settings} = require('pactum');

request.setBaseUrl('http://api.weatherstack.com');
request.setDefaultTimeout(5000);
settings.setLogLevel('INFO');

it('should get a response with status code 200', async () => {
  await spec()
    .withMethod('GET')
    .withPath('/current')  
    .withQueryParams({
      'access_key': '<Use Api key >',
      'query': 'New York'
  })
    .expectStatus(200)
    .expectJson('request.type', 'City')
    .expectJson('location.lat', '40.714');
});
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Authors

- [Sayantan Tarafdar](https://github.com/bunty20077)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Demo

Insert gif or link to demo


## Tech Stack

**Client:** PactumJS


