const sequelize = require ('sequelize'); 
module.exports = function (sequelize, dataTypes) { // .define() y declarar dataTypes columnas 
                                                  //asignaciones modelo tabla
    const alias = "User";//identifica al modelo
    const cols = { //configuración columnas
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER } ,

                username: { type: dataTypes.STRING},
                profilepicture:{type:dataTypes.STRING},
                email: { type: dataTypes.STRING}, 
                password: { type: dataTypes.STRING},
                document: { type: dataTypes.INTEGER}, 
                birthdate: { type: dataTypes.DATE},
                created_at: { type: dataTypes.DATE },
                updated_at: { type: dataTypes.DATE },
    }
    
    const configs = {
        tableName : 'users', //  no coincide modelo en plural
        timestamps : false //desabilita columnas para timestamps en este modelo
    }

    const User = sequelize.define (alias , cols, configs);// almaceno retorno de define()
    
    User.associate = function(models) {//callback que recibe como param objeto que contiene todos tus modelos
        User.hasMany(models.Artwork, {// 1 usuario many artworks
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