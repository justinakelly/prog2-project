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
    artwork_id: {type: dataTypes.INTEGER}
 }
    
    const configs = {
        tableName : 'comments',
        timestamps : false
    }

    const Comment = sequelize.define('Comment', cols, configs);

    Comment.associate = function(models){
        Comment.belongsTo( models.Artwork, { 
            as: 'comments', 
            foreignKey: 'artwork_id'
        })
        Comment.belongsTo( models.User, { 
            as: 'creator', 
            foreignKey: 'user_id'});
    }
    // Comment.associate = function(models) {
    //     Comment.belongsTo(models.User, {
    //         as: 'owner',
    //         foreignKey: 'user_id'
    //     });
    //     Comment.belongsTo(models.Artwork, {
    //         as: 'artworks',
    //         foreignKey: 'artwork_id'
    //     })
    // }
    return Comment;

}