const sequelize = require ('sequelize'); 
module.exports = function (sequelize, dataTypes) {
    const alias = "User";
    const cols = {
  id: {
     autoIncrement: true,
     primaryKey: true,
     type: dataTypes.INTEGER } ,

    username: { type: dataTypes.STRING},
     profilepicture: { type: dataTypes.STRING},
    //  profilepicture:{type:dataTypes.BLOB},//aca hay q acomodar el tipo de dato q segun google es blob
     email: { type: dataTypes.STRING}, 
     password: { type: dataTypes.STRING},
     document: { type: dataTypes.INTEGER}, 
     birthdate: { type: dataTypes.DATE},
    }
    
    const configs = {
        tableName : 'users',
        timestamps : false
    }

    const User = sequelize.define (alias , cols, configs);
    
    User.associate = function(models) {
        User.hasMany(models.Artwork, {// 1 usuario has many artworks
            as: 'artworks',// campo donde va a vivir el otro recurso
            foreignKey: 'user_id'
        })
        User.hasMany(models.Comment, {
            as: 'comments', 
            foreignKey: 'user_id'
        })
        
    }
    
    return User;
}