// productos: contendrá un array de objetos literales con los datos de los productos. Debe tener al menos 10 productos. 
//Debe ser coherente con la información pedida en el formulario de carga de productos. 
// Los datos deben ser coherentes con la información pedida en el formulario de carga de productos.

const artworksInfo = [
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
        name : '',
        description : '',
        date : '22-5',
    },
    {
        image : '../public/images/products/.jpeg',
        name : '',
        description : '',
        date : '22-5',
    }
]


function getAll () {
  return artworksInfo;
}

module.exports = {
    artworksInfo, 
    getAll
}


//guardamos la inof en una variable y la exportamos asi la podemos requerir desde otro archivo 
// Agregar producto:
// imagen: campo de tipo file.
// Nombre del producto: campo de tipo texto.
// descripción: campo de tipo texto.
// Fecha de carga: campo de tipo fecha.
