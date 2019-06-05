const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const UsersSchool = sequelize.define("UsersSchool",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true
    },
    school_fk:{
        allowNull:false,
        type:Sequelize.STRING(8),
        references:{
            model:'school_identification',
            key:'inep_id'
        }
    },
    user_fk:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
            model:'users',
            key:'id'
        }
    }
},{tableName:"users_school",timestamps:false});
module.exports = UsersSchool;