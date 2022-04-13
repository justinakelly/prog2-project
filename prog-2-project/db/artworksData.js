// productos: contendrá un array de objetos literales con los datos de los productos. Debe tener al menos 10 productos. 
//Debe ser coherente con la información pedida en el formulario de carga de productos. 
// Los datos deben ser coherentes con la información pedida en el formulario de carga de productos.

const data = {
    artworks: [
    {
        image : '/images/products/garden-of-forking-paths.jpeg',
        name : 'GARDEN OF FORKING PATHS',
        description : '"This web of time - the strands of which approach one another, bifurcate, intersect or ignore each other through the centuries - embraces every possibility. We do not exist in most of them. In some, you exist and not I, while in others I do, and you do not" -— Jorge Luis Borges',
        date : '22-5',
    },
    {
        image : '/images/products/a-place-with-no-memory.jpeg',
        name : 'A PLACE WITH NO MEMORY',
        description : '"...That is where I want to live the rest of my life. A warm place with no memory.” ―- Stephen King',
        date : '22-5',
    },
    {
        image : '/images/products/acid-scan-3.png',
        name : 'ACID SCAN 3',
        description : '"ACID SCANS" is a series of portrait based on scans of my face and other body parts. There is around 10 to 25 scans in each artwork. In my paintings, I have always tried to abstract the portrait the most without loosing the essence of it. These are the digital version of my vision of a portrait.',
        date : '22-5',
    },
    {
        image : '/images/products/alter-egos.jpeg',
        name : 'ALTER EGOS',
        description : 'Who is the first self ? Who created who ? They all die together! Inspired from a movie that I am not supposed to talk about!',
        date : '22-5',
    },
    {
        image : '/images/products/tied-to-the-past.jpeg',
        name : 'TIED TO THE PAST',
        description : 'Past traumas are the metastasis of present behaviors. Finding their way through the stream of unconsciousness, taking control over our train of thought. Overwhelming. Like a heavy mass pinning you down through the darkness of a bygone age while witnessing the distant glimmer of an unreachable light from the future. « Tied To The Past » is an attempt to depict and exorcise the feeling of being chained to unhealed wounds. When acknowledging damages isn’t enough to reach the surface anymore. When the desire to heal can’t compete with recollections. Tearing past, present and future apart in an endless cycle.',
        date : '22-5',
    },
    {
        image : '/images/products/zen.jpeg',
        name : 'ZEN',
        description : '“The only Zen you’ll find on mountain tops is the Zen you bring up there with you.” -- Alan Watts',
        date : '22-5',
    },
    {
        image : '/images/products/the-passion.jpeg',
        name : 'THE PASSION',
        description : 'Passion is an impulse of the soul, strong and emotional.',
        date : '22-5',
    },
    {
        image : '/images/products/explosion-of-colors.jpeg',
        name : 'EXPLOSION OF COLORS',
        description : '"Explosion of Colors" is Johan Lolos genesis piece and is part of his genesis NFT series Hálendið which means Highlands in Icelandic. Hálendið is a photography series of 5 pieces that are a tribute to the painting-like landscapes of the Icelandic Highlands. Ever since Johan first visited this part of the world he has been amazed by the huge diversity of colors that can be found in the Highlands. The unparalleled contrasts and shapes of the Hálendið make this region of Iceland so unique in the whole world, to the point it becomes almost surreal to any visitor. This particular piece is an aerial image of Landmannalaugar, shot from a Cessna aircraft. The unique colors found in that place are completely natural, a result of local geothermal activity. The very first time Johan went to Landmannalaugar, he just could not believe his eyes. Was it real? Was it a dream? Why did those mountains look like paintings? His obsession with the Icelandic Highlands never stopped, to the point that they became his favorite landscapes to photograph. "Explosion of Colors" is Johan Lolos second most popular image of all time. It was first featured in his debut book Peaks of Europe (2018), and has been sold to multiple clients and magazines ever since.',
        date : '22-5',
    },
    {
        image : '/images/products/night-rider-001.jpeg',
        name : 'NIGHT RIDER 001',
        description : 'Rage, rage against the dying of the light.',
        date : '22-5',
    },
    {
        image : '/images/products/pool.jpeg',
        name : 'POOL',
        description : 'This image is what I consider to be my first Fractalism piece, and to date it is still my favorite. The reason why, is that this piece has a secret I have never revealed till now. This image was made when I was attempting to clean my bathtub one day. I sprinkled AJAX all over the tub and went to turn the tap on expecting the water to come from the faucet. But the nozzle was set to the shower and as I got ready to start scrubbing I got an unexpected sprinkle as I leaned over the tub. Feeling the rush of cold water hit me I immediately turned the faucet off. As the droplets of water settled on the tub surface this beautiful fractal pattern emerged from the AJAX pooling towards the center of gravity. I grabbed the camera and later opened th image in photoshop and changed the colors to highten the sense of contrast and drama. After playing around with the image for a while this is what emerged, and I think it is beautiful.',
        date : '22-5',
    },
    {
        image : '/images/products/saturn(s)-return.jpeg',
        name : 'SATURN(s) RETURN',
        description : 'We do not need to sit in the same spaces to find the same feelings. In 2022, I choose to pull my energy from only the source and my gut. I abide by the moon and its daughters, nothing more.',
        date : '22-5',
    },
    {
        image : '/images/products/miraculum.jpeg',
        name : 'MIRACULUM',
        description : 'Everyone encounters these magical moments in life that just happen out of nowhere. A moment of awe where time freezes and we only exist in that moment. You cant predict them, you cant chase them. But you can enjoy them as they happen.',
        date : '22-5',
    },
    {
        image : '/images/products/default-image.png',
        name : 'R4G3QU1T',
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
comments: [
    {
        username: '@hola',
        commentary : '#abstract #colorful #digitalart #nft #surrealism #psychedelic #trippy',
        profilePicture : '/images/users/default-user.jpeg'
    },
    {
        username: '@justinakelly',
        commentary : 'Amazing!',
        profilePicture : '/images/users/default-user.jpeg'
    },
    {
        username: '@candelariatallavi',
        commentary : 'Where can I buy this?',
        profilePicture : '/images/users/default-user.jpeg'
    },
    {
        username: '@justinabsegui',
        commentary : 'This is crazy (insert emoji aplausos)',
        profilePicture : '/images/users/default-user.jpeg'
    },
    {
        username: '@user',
        commentary : '#abstract #colorful #digitalart #nft #surrealism #psychedelic #trippy',
        profilePicture : '/images/users/default-user.jpeg'
    }
]
}

module.exports = data;



//guardamos la inof en una variable y la exportamos asi la podemos requerir desde otro archivo 
// Agregar producto:
// imagen: campo de tipo file.
// Nombre del producto: campo de tipo texto.
// descripción: campo de tipo texto.
// Fecha de carga: campo de tipo fecha.
