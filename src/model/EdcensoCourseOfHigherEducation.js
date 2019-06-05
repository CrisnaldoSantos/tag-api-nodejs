const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoCourseOfHigherEducation = sequelize.define("EdcensoCourseOfHigherEducation",{
    cod:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true
    },
    area:{
        allowNull:false,
        type:Sequelize.STRING
    },
    id:{
        allowNull:false,
        type:Sequelize.STRING
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING
    },
    degree:{
        allowNull:false,
        type:Sequelize.STRING
    }
},{tableName:"edcenso_course_of_higher_education",timestamps:false});
module.exports = EdcensoCourseOfHigherEducation;