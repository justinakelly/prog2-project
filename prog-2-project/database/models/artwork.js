const sequelize = require ('sequelize'); 

module.exports = function (sequelize, dataTypes) { // .define() y declarar dataTypes columnas 
                                                 //asignaciones modelo tabla

    const alias = "Artwork"; //identifica al modelo
    const cols = { //configuración columnas
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER 
            },
            name: { type: dataTypes.STRING},
            image: { type: dataTypes.STRING},
            description: { type: dataTypes.STRING}, 
            date: { type: dataTypes.DATE},
            user_id: {type: dataTypes.INTEGER},
            created_at: { type: dataTypes.DATE },
            updated_at: { type: dataTypes.DATE },
    }
    const configs = { // adicionales
        tableName : 'artworks', //  no coincide modelo en plural
        timestamps : false //desabilita columnas para timestamps en este modelo
    }

    const Artwork = sequelize.define (alias , cols, configs); // almaceno retorno de define()

    Artwork.associate = function(models){//callback que recibe como param objeto que contiene todos tus modelos
        Artwork.belongsTo( models.User, { 
            as: 'creator', // usuario que carga artwork, campo donde vive modelo asociado
            foreignKey: 'user_id'// columna que conecta al artwork con id de usuario
        })
        Artwork.hasMany( models.Comment, { // 1 artwork muchos coments
            as: 'comments', 
            foreignKey: 'artwork_id'
        });
    }
    return Artwork; 

}