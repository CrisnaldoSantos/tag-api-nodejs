const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoComplementaryActivityType = sequelize.define("EdcensoComplementaryActivityType",{
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
},{tableName:"edcenso_complementary_activity_type",timestamps:false});
module.exports = EdcensoComplementaryActivityType;