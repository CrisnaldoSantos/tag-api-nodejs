const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoDiscipline = sequelize.define("EdcensoDiscipline",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        unique:true
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(200)
    }
},{tableName:"edcenso_discipline",timestamps:false});
module.exports = EdcensoDiscipline;