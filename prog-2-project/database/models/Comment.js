 const sequelize = require ('sequelize'); 


module.exports = function (sequelize, dataTypes) { // .define() y declarar dataTypes columnas 
                                                 //asignaciones modelo tabla
    const alias = "Comment";//identifica al modelo
    const cols = {//configuración columnas
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER } ,

            comment: { type: dataTypes.STRING}, 
            user_id: {type: dataTypes.INTEGER},
            created_at: { type: dataTypes.DATE },
    }
    const configs = { // adicionales
        tableName : 'comments', // nombre tabla no coincide con el del modelo
        timestamps : false //desabilita columnas para timestamps en este modelo
    }

    const Comment = sequelize.define(alias, cols, configs); // almaceno retorno de define()

    Comment.associate = function(models){//callback que recibe como param objeto que contiene todos tus modelos
        Comment.belongsTo( models.User, { 
            as: 'commenter', 
            foreignKey: 'user_id'
        })
        Comment.belongsTo( models.Artwork, { 
            as: 'artwork', 
            foreignKey: 'artwork_id'
        })
       
    }
    return Comment;

}