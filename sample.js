
const { spec , request , settings} = require('pactum');

request.setBaseUrl('https://reqres.in');
request.setDefaultTimeout(5000);
settings.setLogLevel('INFO');

it('should get a response with status code 200', async () => {
  await spec()
    .withMethod('GET')
    .withPath('/api/users/1')
    .expectJson('data.email','george.bluth@reqres.in')
    .expectStatus(200);
});