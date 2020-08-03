const db = require('../db')
const Poem = require('../models/poems')
const Writer = require('../models/writers')

const poemSeed = [
    {
        name:"Pablo Neruda",
        book:[
            {title:"Poem XX",
             "release-year": 1924,
             type:"poem"
            },
            {title:"The heights of Macchu Picchu",
             "release-year":1950,
             type:"poem"
            },
            {title:"If you forget me",
             "release-year":1952,
             type:"poem"
            },
            {title:"Soonet XVII: I do not love you",
             "release-year":1959,
             type:"poem"
            },
            {title:"Walking around",
             "release-year":1935,
             type:"poem"
            }
            ]
    },
    {
        name:"Gabriela Mistral",
        book:[
            {title:"Desolation",
             "release-year":1922,
             type:"poem"
            },
            {title:"Little Feet",
             "release-year":1922,
             type:"poem"
            },
            {title:"Love unspoken",
             "release-year":1922,
             type:"poem"
            },
            {title:"Song of Death",
             "release-year":1914,
             type:"poem"
            },
            {title:"The song you loved",
             "release-year":1914,
             type:"poem"
            }
            ]
    }
]

const addPoem = async () => {
  
    await Promise.all(poemSeed.map(async bookToAdd => {
  
          // find artist document with matching name
          let writer = await Writer.findOne({name: bookToAdd.writer})
  
          // update object with artist ID
          bookToAdd.writer = writer._id
  
          // create record
          const book = await Poem.create(bookToAdd)
          console.log(book)
  
          await writer.book.push(book._id)
          await writer.save()
          console.log(writer)
      }))
  db.close()
  
  }
  
  // invoke the async function
  addPoem()