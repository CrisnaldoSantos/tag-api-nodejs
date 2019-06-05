const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoDistrict = sequelize.define("EdcensoDistrict",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true
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
        type:Sequelize.SMALLINT(6),
        allowNull:false
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(50)
    }
},{tableName:"edcenso_district",timestamps:false});
module.exports = EdcensoDistrict;