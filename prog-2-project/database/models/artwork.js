const sequelize = require ('sequelize'); 

module.exports = function (sequelize, dataTypes) {
    
    const alias = "Artwork";
    const cols = {
     id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER 
    } ,
     name: { type: dataTypes.STRING},
     image: { type: dataTypes.STRING},
     description: { type: dataTypes.STRING}, 
     date: { type: dataTypes.DATE}
    }
    
    const configs = {
        tableName : 'artworks',
        timestamps : false
    }

    const Artwork = sequelize.define (alias , cols, configs);

    Artwork.associate = function(models) { //callback que recibe como param models
        Artwork.belongsTo(models.User, { // ol donde explico relacion
         as: 'owner', // usuario que carga artwork, campo donde vive modelo asociado
         foreignKey: 'user_id'// columna que conecta al artwork con id de usuario
     })
        Artwork.hasMany(models.Comment,{
         as: 'comments', 
         foreignKey: 'artwork_id'
    })
}
    return Artwork;

}