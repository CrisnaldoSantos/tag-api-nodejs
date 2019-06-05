const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoRegionalEducationOrgan = sequelize.define("EdcensoRegionalEducationOrgan",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        unique:true
    },
    edcenso_city_fk:{
        type:Sequelize.INTEGER(11),
        references:{
            model:'edcenso_city',
            key:'id'
        },
        allowNull:false
    },
    code:{
        allowNull:false,
        type:Sequelize.STRING(5),
        unique:true
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(100)
    }
},{tableName:"edcenso_regional_education_organ",timestamps:false});
module.exports = EdcensoRegionalEducationOrgan;