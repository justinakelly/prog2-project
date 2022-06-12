const sequelize = require ('sequelize'); 
module.exports = function (sequelize, dataTypes) {
    const alias = "User";
    const cols = {
  id: {
     autoincrement: true,
     primaryKey: true,
     type: dataTypes.INTEGER } ,

    username: { type: dataTypes.STRING},
     profilepicture: { type: dataTypes.STRING},
     email: { type: dataTypes.STRING}, 
     password: { type: dataTypes.STRING},
     document: { type: dataTypes.INTEGER}, 
     birthdate: { type: dataTypes.DATE},
     verified: { type: dataTypes.STRING},
    }
    
    const configs = {
        tableName : 'users',
        timestamps : false
    }

    const User = sequelize.define (User , cols, configs);
    
    User.associate = function(models) {
        User.hasMany(models.Artworks, {// 1 usuario has many artworks
            as: 'artworks',// campo donde va a vivir el otro recurso
            foreignKey: 'user_id'
        })
    }
    
    return User;
}