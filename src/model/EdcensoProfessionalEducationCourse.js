const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoProfessionalEducationCourse = sequelize.define("EdcensoProfessionalEducationCourse",{
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
},{tableName:"edcenso_professional_education_course",timestamps:false});
module.exports = EdcensoProfessionalEducationCourse;