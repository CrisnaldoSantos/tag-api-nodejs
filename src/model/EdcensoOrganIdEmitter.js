const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoOrganIdEmitter = sequelize.define("EdcensoOrganIdEmitter",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        unique:true
    },
    name:{
        type:Sequelize.STRING(100),
        defaultValue:null
    }
},{tableName:"edcenso_organ_id_emitter",timestamps:false});
module.exports = EdcensoOrganIdEmitter;