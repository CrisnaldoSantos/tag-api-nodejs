const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoNation = sequelize.define("EdcensoNation",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        unique:true
    },
    acronym:{
        allowNull:false,
        type:Sequelize.STRING(3)
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(50)
    }
},{tableName:"edcenso_nation",timestamps:false});
module.exports = EdcensoNation;