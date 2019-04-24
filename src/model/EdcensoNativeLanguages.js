const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoNativeLanguages = sequelize.define("edcenso_native_languages",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING
    }
},{tableName:"edcenso_native_languages",timestamps:false});
module.exports = EdcensoNativeLanguages;