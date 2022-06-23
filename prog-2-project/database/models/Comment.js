 const sequelize = require ('sequelize'); 


module.exports = function (sequelize, dataTypes) {
    const alias = "Comment";
    const cols = {
  id: {
     autoIncrement: true,
     primaryKey: true,
     type: dataTypes.INTEGER } ,

    comment: { type: dataTypes.STRING}, 
    user_id: {type: dataTypes.INTEGER},
    created_at: { type: dataTypes.DATE },
 }
    
    const configs = {
        tableName : 'comments',
        timestamps : false
    }

    const Comment = sequelize.define(alias, cols, configs);

    Comment.associate = function(models){
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