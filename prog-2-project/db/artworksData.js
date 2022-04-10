// productos: contendrá un array de objetos literales con los datos de los productos. Debe tener al menos 10 productos. 
//Debe ser coherente con la información pedida en el formulario de carga de productos. 
// Los datos deben ser coherentes con la información pedida en el formulario de carga de productos.

const artworksInfo = [
    {
        image : '',
        name : 'justina',
        description : 'hola',
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
// Agregar producto:
// imagen: campo de tipo file.
// Nombre del producto: campo de tipo texto.
// descripción: campo de tipo texto.
// Fecha de carga: campo de tipo fecha.
