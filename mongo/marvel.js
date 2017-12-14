let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
  constructor() {
    this.marvel = api.createClient({
  publicKey: '88d94ed2d3a4159d2dda9f675b56e9e3',
  privateKey: 'a3560506677dbdf3c14192a7e87840a248cc849b'
    })
    this.url = 'mongodb://localhost:27017/Marvel'
  }

  getData(callback) {
    let obj = {}
    let arr = []

    this.marvel.characters.findByName('Captain America').then((heroes) => {
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

    this.marvel.characters.findByName('Iron Man').then((heroes) => {
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
  
    
    this.marvel.characters.findByName('Thanos').then((heroes) => {
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
   
   
    this.marvel.characters.findByName('Storm').then((heroes) => {
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
