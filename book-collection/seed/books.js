const db = require('../db')
const Book = require('../models/books')
const Writer = require('../models/writers')

const bookSeed =[
    {
        name:"Mario Benedetti",
        book:[
            {title:"Who can throw the first Stone",
             "release-year": 1953,
             type: "novel",
             pages: 112
            },
            {title:"The truce",
             "release-year": 1960,
             type:"novel",
             pages:192
            },
            {title:"Thanks for the fire",
             "release-year": 1965,
             type: "novel",
             pages: 288
            },
            {title:"Spring with a broken corner",
             "release-year":1982,
             type:"novel",
             pages:193
            },
            {title:"Andamios",
             "release-year": 1996,
             type:"novel",
             pages:304
            }
            ]
    },
    {
        name:"Paulo Coelho",
        book:[
            {title:"The Alchemist",
             "release-year": 1988,
             type:"novel",
             pages: 163
            },
            {title:"By the River Piedra I Sat Down and Wept",
             "release-year":1994,
             type:"novel",
             pages:208
            },
            {title:"Veronika Decides to Die",
             "release-year":1998,
             type:"novel",
             pages:210
            },
            {title:"Eleven Minutes",
             "release-year":2003,
             type:"novel",
             pages:320
            },
            {title:"Aleph",
             "release-year":2010,
             type:"novel",
             pages:288
            }
            ]
    },
    {
        name:"Gabriel Garcia Marquez",
        book:[
            {title:"One Hundred Years of Solitude",
             "release-year":1967,
             type:"novel",
             pages:417
            },
            {title:"Love in the Time of Cholera ",
             "release-year":1985,
             type:"novel",
             pages:368
            },
            {title:"The General in His Labyrinth ",
             "release-year":1989,
             type:"novel",
             pages:304
            },
            {title:"Of Love and Other Demons ",
             "release-year": 1994,
             type:"novel",
             pages:160
            },
            {title:"Chronicle of a Death Foretold ",
             "release-year":1981,
             type:"novel",
             pages:128
            }
            ]
    },
    {
        name:"Isabel Allende",
        book:[
            {title:"The house of the spirits ",
             "release-year":1982,
             type:"novel",
             pages:496
            },
            {title:"A long peta of the sea",
             "release-year":2019,
             type:"novel",
             pages:337
            },
            {title:"City of the beasts",
             "release-year":2002,
             type:"novel",
             pages:439
            },
            {title:"Eva Luna",
             "release-year": 1987,
             type:"novel",
             pages:368
            },
            {title:"Japanese Lover",
             "release-year": 2015,
             type:"novel",
             pages:336
            }
            ]
    }
]

const addBook = async () => {
  
    await Promise.all(bookSeed.map(async bookToAdd => {
  
          // find artist document with matching name
          let writer = await Writer.findOne({name: bookToAdd.writer})
  
          // update object with artist ID
          bookToAdd.writer = writer._id
  
          // create record
          const book = await Book.create(bookToAdd)
          console.log(book)
  
          await writer.book.push(book._id)
          await writer.save()
          console.log(writer)
      }))
  
    db.close()
  
  }
  
  // invoke the async function
  addBook()

