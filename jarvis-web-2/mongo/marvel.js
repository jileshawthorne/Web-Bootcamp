let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
  constructor(){
    this.marvel = api.createClient({
      publicKey: '918f85fcee5fcbce1be9ee02a33d804e',
      privateKey: '661ebe24c9a5b75f41fc2f556af5cff6b4d7f24d'
    })
  this.url = 'mongodb://localhost:27017/Marvel'
  }
  getData(){
    this.marvel.characters.findAll()
    .then((heroes) => {
      heroes.data.forEach((hero) => {
        console.log(hero.name)
        console.log(hero.description)
        // Next Steps Create Array of Objects That Mongo can digest
        
      })
    })
    .fail(console.err)
    .done

  }
  insertDocuments(docs){
    MongoClient.connect(this.url, (err,db) => {
      if(!err){
       // let collection = db.collection('heroes')
     console.log('connected to mongo')
        db.close()

      }
      else{
        console.log(err)

      }

    })

  }

}

module.exports = Marvel 

