let api = require('marvel-api');

let  marvel = api.createClient({
  publicKey: '88d94ed2d3a4159d2dda9f675b56e9e3'
    , privateKey: 'a3560506677dbdf3c14192a7e87840a248cc849b'
})

marvel.characters.findByName('Nova')
  .then(console.log)
    .fail(console.error)
    .done();

marvel.characters.findByName('Hawkeye')
  .then(console.log)
      .fail(console.error)
      .done();
