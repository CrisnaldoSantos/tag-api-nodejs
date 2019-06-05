const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoUf = sequelize.define("EdcensoUf",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        unique:true
    },
    acronym:{
        allowNull:false,
        type:Sequelize.STRING(2)
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(20)
    }
},{tableName:"edcenso_uf",timestamps:false});
module.exports = EdcensoUf;