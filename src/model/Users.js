const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Users = sequelize.define("Users",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(150)
    },
    username:{
        allowNull:false,
        type:Sequelize.STRING(32)
    },
    password:{
        allowNull:false,
        type:Sequelize.STRING(45)
    },
    active:{
        allowNull:false,
        defaultValue:1,
        type:Sequelize.SMALLINT.length(1) 
    }
},{tableName:"users",timestamps:false});
module.exports = Users;