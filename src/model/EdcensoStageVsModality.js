const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoStageVsModality = sequelize.define("EdcensoStageVsModality",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(100)
    },
    stage:{
        allowNull:false,
        type:Sequelize.INTEGER(11)
    }
},{tableName:"edcenso_stage_vs_modality",timestamps:false});
module.exports = EdcensoStageVsModality;