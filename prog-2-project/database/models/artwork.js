const sequelize = require ('sequelize'); 


module.exports = function (sequelize, dataTypes) {
    
    const alias = "Artwork";

    const cols = {
  id: {
     autoincrement: true,
     primaryKey: true,
     type: dataTypes.INTEGER } ,

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

Artwork.associate = function(models) {
     Artwork.belongsTo(models.User, {
         as: 'owner' ,
         foreignKey: 'user_id'
     } )
}

    return Artwork;

}