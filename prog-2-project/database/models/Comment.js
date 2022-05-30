const sequelize = require ('sequelize'); 


module.exports = function (sequelize, dataTypes) {
    
    const alias = "Comment";

    const cols = {
  id: {
     autoincrement: true,
     primaryKey: true,
     type: dataTypes.INTEGER } ,

    comment: { type: dataTypes.STRING}
    
 }
    
    const configs = {
        tableName : 'comments',
        timestamps : false
    }

    const Comment = sequelize.define (alias , cols, configs);

    Comment.associate = function(models) {
        Comment.belongsTo(models.User, {
            as: 'owner' ,
            foreignKey: 'user_id'
        } )
   }

    return Comment;

}