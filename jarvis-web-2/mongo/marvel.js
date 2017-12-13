let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
  constructor() {
    this.marvel = api.createClient({
      publicKey: '3ffd0da969c4817bd34a1fb7219d0707',
      privateKey: '89bafbb9d7e4b778f536edd16e8a96ff74bb9508'
    })
    this.url = 'mongodb://localhost:27017/Marvel'
  }

  getData(callback) {
    let obj = {}
    let arr = []

    this.marvel.characters.findByName('storm').then((heroes) => {
        heroes['data'].forEach((hero,index) => {
          obj = {
            name: hero.name, 
            description:  hero.description,
            image:  `${hero.thumbnail.path}.${hero.thumbnail.extension}`
          }

          hero.urls.forEach((urlItem) => {
            if(urlItem.type === 'detail') {
              obj.link = urlItem.url
            }
          })

          arr.push(obj)
        })
        callback(arr)

      })
    .fail(console.error)
      .done
    this.marvel.characters.findByName('thanos').then((heroes) => {
        heroes['data'].forEach((hero,index) => {
          obj = {
            name: hero.name, 
            description:  hero.description,
            image:  `${hero.thumbnail.path}.${hero.thumbnail.extension}`
          }

          hero.urls.forEach((urlItem) => {
            if(urlItem.type === 'detail') {
              obj.link = urlItem.url
            }
          })

          arr.push(obj)
        })
        callback(arr)

      })
    .fail(console.error)
      .done

      return arr

  }

  insertDocuments(docs) {
    MongoClient.connect(this.url, (err,db) => {
      if(!err) {
        let collection = db.collection('savages')
          collection.insertMany(docs, (err,result) => {
            console.log(result)
          })
        db.close()
      }
      else {
        console.log(err)
      }

    })
  }

}

module.exports = Marvel
