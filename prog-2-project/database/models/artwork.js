const sequelize = require ('sequelize'); 

module.exports = function (sequelize, dataTypes) {
    
    const cols = {
// id: {
//     autoincrement: true,
//     primaryKey: true,
//     type: dataTypes.INTEGER} (podriamos ponerle un id)

    name: { type: dataTypes.STRING},
    // image: { type: dataTypes.STRING},
    description: { type: dataTypes.STRING}, 
    // date: { type: dataTypes.DATE}
    }
    
    const configs = {
        tableName : 'artworks',
        timestamps : false
    }

    const artwork = sequelize.define ('artwork', cols, configs);

    return artwork;

}