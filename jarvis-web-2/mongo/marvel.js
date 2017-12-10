let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
  constructor() {
    this.marvel = api.createClient({
      publicKey: '88d94ed2d3a4159d2dda9f675b56e9e3',
      privateKey: 'a3560506677dbdf3c14192a7e87840a248cc849b'
    })
    this.url = 'mongodb://localhost27017/MarvelAPI'
  }

  getData(callback) {
    this.marvel.characters.findAll()
      .then((heroes) => {
        heroes.data.forEach((hero) => {
          console.log(hero.name)
          console.log(hero.description)
          // Next Steps create Array of Objects that mongo can digest
        })   
      })
      .fail(console.err)
      .done
  }

  insertDocuments(docs) {
    MongoClient.connect(this.url, (err,db) => {
      if(!err) {
        // let collection = db.collection('heroes')
        console.log('we are connected to Mongo!')
          db.close()
      }
      else {
        console.log(err)
      }

    })

  }
}

module.exports = Marvel

