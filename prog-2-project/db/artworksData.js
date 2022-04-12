// productos: contendrá un array de objetos literales con los datos de los productos. Debe tener al menos 10 productos. 
//Debe ser coherente con la información pedida en el formulario de carga de productos. 
// Los datos deben ser coherentes con la información pedida en el formulario de carga de productos.

const data = {
    artworks: [
    {
        image : '../public/images/products/garden-of-forking-paths.jpeg',
        name : 'GARDEN OF FORKING PATHS',
        description : '"This web of time - the strands of which approach one another, bifurcate, intersect or ignore each other through the centuries - embraces every possibility. We do not exist in most of them. In some, you exist and not I, while in others I do, and you do not" -— Jorge Luis Borges',
        date : '22-5',
    },
    {
        image : '../public/images/products/a-place-with-no-memory.jpeg',
        name : 'A PLACE WITH NO MEMORY',
        description : '"...That is where I want to live the rest of my life. A warm place with no memory.” ―- Stephen King',
        date : '22-5',
    },
    {
        image : '../public/images/products/acid-scan-3.png',
        name : 'ACID SCAN 3',
        description : '"ACID SCANS" is a series of portrait based on scans of my face and other body parts. There is around 10 to 25 scans in each artwork. In my paintings, I have always tried to abstract the portrait the most without loosing the essence of it. These are the digital version of my vision of a portrait.',
        date : '22-5',
    },
    {
        image : '../public/images/products/alter-egos.jpeg',
        name : 'ALTER EGOS',
        description : 'Who is the first self ? Who created who ? They all die together! Inspired from a movie that I am not supposed to talk about!',
        date : '22-5',
    },
    {
        image : '../public/images/products/tied-to-the-past.jpeg',
        name : 'TIED TO THE PAST',
        description : 'Past traumas are the metastasis of present behaviors. Finding their way through the stream of unconsciousness, taking control over our train of thought. Overwhelming. Like a heavy mass pinning you down through the darkness of a bygone age while witnessing the distant glimmer of an unreachable light from the future. « Tied To The Past » is an attempt to depict and exorcise the feeling of being chained to unhealed wounds. When acknowledging damages isn’t enough to reach the surface anymore. When the desire to heal can’t compete with recollections. Tearing past, present and future apart in an endless cycle.',
        date : '22-5',
    },
    {
        image : '../public/images/products/zen.jpeg',
        name : 'ZEN',
        description : '“The only Zen you’ll find on mountain tops is the Zen you bring up there with you.” -- Alan Watts',
        date : '22-5',
    },
    {
        image : '../public/images/products/.jpeg',
        name : 'THE PASSION',
        description : 'Passion is an impulse of the soul, strong and emotional.',
        date : '22-5',
    },
    {
        image : '../public/images/products/.jpeg',
        name : '',
        description : '',
        date : '22-5',
    },
    {
        image : '../public/images/products/.jpeg',
        name : '',
        description : '',
        date : '22-5',
    },
    {
        image : '../public/images/products/.jpeg',
        name : '',
        description : '',
        date : '22-5',
    },
    {
        image : '../public/images/products/.jpeg',
        name : '',
        description : '',
        date : '22-5',
    },
    {
        image : '../public/images/products/.jpeg',
        name : 'poner foto default',
        description : '',
        date : '22-5',
    }
],
user: {
    email : '',
    username : '',
    password : '',
    document : '',
    profilePicture : '',

},
commments: [
    {
        username: '@hola',
        commentary : '#abstract #colorful #digitalart #nft #surrealism #psychedelic #trippy',
        profilePicture : ''
    },
    {
        username: '@justinakelly',
        commentary : 'Amazing!',
        profilePicture : ''
    },
    {
        username: '@candelariatallavi',
        commentary : '#abstract #colorful #digitalart #nft #surrealism #psychedelic #trippy',
        profilePicture : ''
    },
    {
        username: '@justinabsegui',
        commentary : '#abstract #colorful #digitalart #nft #surrealism #psychedelic #trippy',
        profilePicture : ''
    },
    {
        username: '@user',
        commentary : '#abstract #colorful #digitalart #nft #surrealism #psychedelic #trippy',
        profilePicture : ''
    }
]
}


function getAll () {
  return data;
}

module.exports = data;



//guardamos la inof en una variable y la exportamos asi la podemos requerir desde otro archivo 
// Agregar producto:
// imagen: campo de tipo file.
// Nombre del producto: campo de tipo texto.
// descripción: campo de tipo texto.
// Fecha de carga: campo de tipo fecha.
