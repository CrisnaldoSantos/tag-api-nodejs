const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoNativeLanguages = sequelize.define("EdcensoNativeLanguages",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(100)
    }
},{tableName:"edcenso_native_languages",timestamps:false});
module.exports = EdcensoNativeLanguages;