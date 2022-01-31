const getData = require('./getData');

test('Comment from Julianne.OConner@kory.org', async () => {
   await getData().then( data => {
       expect(data.email).toEqual('Julianne.OConner@kory.org');
   })
})
