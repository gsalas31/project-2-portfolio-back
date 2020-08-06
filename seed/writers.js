const db = require('../db')
const Writer = require('../models/writers.js')

//defining writters to be added on out db
const writerSeed=[
    {name: "Mario Benedetti", portrait: "https://res.cloudinary.com/g31ssa/image/upload/v1596405482/Picture3_fn7z5x.png",
    bio:{
        dob: "1920-2009" ,    
        description:"Uruguayan writer who was best known for his short stories. Benedetti was born to a prosperous family of Italian immigrants. His father was a viniculturist and a chemist. At age four the boy was taken to Montevideo, where he received a superior education at a private school. He was deeply affected by his early experience of the capital city. Benedetti began his literary career by publishing poetry, but he soon turned to the short story and the novel. In these he painted a realistic and critical portrait of the ascendant Uruguayan middle class, to which he belonged. His most accomplished stories appeared in the collection Montevideanos (1959; “Montevideans”). " 
        }
    },
    {name: "Paulo Coelho", portrait: "https://res.cloudinary.com/g31ssa/image/upload/v1596405483/Picture1_kqwcxx.png",
    bio:{
        dob: "1947-////" ,    
        description:"Paulo Coelho is a Brazilian author. When Coelho was 38 years old, he had a spiritual awakening in Spain and wrote about it in his first book, The Pilgrimage. It was his second book, The Alchemist, which made him famous. He’s sold 35 million copies and now writes about one book every two years. Coelho was born on August 24, 1947, in Rio de Janeiro, Brazil. Coelho attended Jesuit schools and was raised by devout Catholic parents. He determined early on that he wanted to be a writer but was discouraged by his parents, who saw no future in that profession in Brazil.After drifting among several professions, Coelho changed his life's course while on a visit to Spain in 1986 at the age of 39. Coelho walked more than 500 miles along the Road to Santiago de Compostela, a site of Catholic pilgrimage. The walk and the spiritual awakening he experienced en route inspired him to write The Pilgrimage. " 
        }
    },
    {name: "Gabriel Garcia Marquez", portrait: "https://res.cloudinary.com/g31ssa/image/upload/v1596405483/Picture2_nlwiep.png",
    bio:{
        dob: "1927-2014" ,    
        description:"Born in the sleepy provincial town of Aracataca, Colombia. Although he studied law, García Márquez became a journalist, the trade at which he earned his living before attaining literary fame. García Márquez was known for his capacity to create vast, minutely woven plots and brief, tightly knit narratives. As a correspondent in Paris during the 1950s, he expanded his education, reading a great deal of American literature, some of it in French translation. In the late 1950s and early ’60s, he worked in Bogotá, Colombia, and then in New York City for Prensa Latina. Later he moved to Mexico City, where he wrote the novel that brought him fame and wealth. From 1967 to 1975 he lived in Spain. Subsequently he kept a house in Mexico City and an apartment in Paris, but he also spent much time in Havana. After being diagnosed with cancer in 1999, García Márquez wrote the memoir Vivir para contarla, which focuses on his first 30 years. He returned to fiction with Memoria de mis putas tristes, a novel about a lonely man who finally discovers the meaning of love when he hires a virginal prostitute to celebrate his 90th birthday. " 
        }
    },
    {name: "Pablo Neruda", portrait: "https://res.cloudinary.com/g31ssa/image/upload/v1596405484/Picture4_g38kxz.png",
    bio:{
        dob: "1904-1973" ,    
        description:"Chilean poet, diplomat, and politician who was awarded the Nobel Prize for Literature in 1971. He was perhaps the most important Latin American poet of the 20th century. Neruda first published his poems in the local newspapers and later in magazines published in the Chilean capital, Santiago. In 1921 he moved to Santiago to continue his studies and become a French teacher. There he experienced loneliness and hunger and took up a bohemian lifestyle. His first book of poems, Crepusculario, was published in 1923. The poems, subtle and elegant, were in the tradition of Symbolist poetry, or rather its Hispanic version, Modernismo. His second book, Veinte poemas de amor y una canción desesperada (1924; Twenty Love Poems and a Song of Despair), was inspired by an unhappy love affair. It became an instant success and is still one of Neruda’s most popular books. At age 20, with two books published, Neruda had already become one of the best-known Chilean poets. He abandoned his French studies and began to devote himself entirely to poetry.  " 
        }
    },
    {name: "Gabriela Mistral", portrait: "https://res.cloudinary.com/g31ssa/image/upload/v1596405484/Picture5_fzlttu.png",
    bio:{
        dob: "1889-1957" ,    
        description:"Chilean poet, who in 1945 became the first Latin American to win the Nobel Prize for Literature.Of Spanish, Basque, and Indian descent, Mistral grew up in a village of northern Chile and became a schoolteacher at age 15, advancing later to the rank of college professor. Throughout her life she combined writing with a career as an educator, cultural minister, and diplomat; her diplomatic assignments included posts in Madrid, Lisbon, Genoa, and Nice. Her reputation as a poet was established in 1914 when she won a Chilean prize for three “Sonetos de la muerte” " 
        }
    },
    {name: "Isabel Allende", portrait: "https://res.cloudinary.com/g31ssa/image/upload/v1596405483/Picture6_lngccc.png",
    bio:{
        dob: "1942-////" ,    
        description:"Chilean American writer in the magic realist tradition who is considered one of the first successful woman novelists from Latin America. Allende was born in Peru to Chilean parents. She worked as a journalist in Chile until she was forced to flee to Venezuela after the assassination (1973) of her uncle, Chilean Pres. Salvador Allende. In 1981 she began writing a letter to her terminally ill grandfather that evolved into her first novel, La casa de los espíritus (1982; The House of the Spirits). It was followed by the novels De amor y de sombra (1984; Of Love and Shadows), Eva Luna (1987), and El plan infinito (1991; The Infinite Plan) and the collection of stories Cuentos de Eva Luna (1990; The Stories of Eva Luna). All are examples of magic realism, in which realistic fiction is overlaid with elements of fantasy and myth. Her concern in many of these works is the portrayal of South American politics, and her first four works reflect her own experiences and examine the role of women in Latin America. " 
        }
    }

]
Writer.find({}).remove()
Writer.insertMany(writerSeed,
    (error, response) => {
        if (error) {
            console.log(error);
        } else {
            console.log(response);
        }
        db.close()
    })