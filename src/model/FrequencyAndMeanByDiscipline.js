const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoProfessionalEducationCourse = sequelize.define("EdcensoProfessionalEducationCourse",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true
    },
    enrollment_fk:{
        type:Sequelize.INTEGER(11),
        references:{
            model:'student_enrollment',
            key:'id'
        },
        allowNull:false,
        unique:true
    },
    discipline_fk:{
        type:Sequelize.INTEGER(11),
        references:{
            model:'edcenso_discipline',
            key:'id'
        },
        allowNull:false,
        unique:true
    },
    annual_average:{
        type:Sequelize.FLOAT.UNSIGNED,
        defaultValue:null
    },
    final_average:{
        type:Sequelize.FLOAT.UNSIGNED,
        defaultValue:null
    },
    absences:{
        type:Sequelize.SMALLINT(6),
        defaultValue:null
    },
    frequency:{
        type:Sequelize.FLOAT.UNSIGNED,
        defaultValue:null
    }
},{tableName:"edcenso_professional_education_course",timestamps:false});
module.exports = EdcensoProfessionalEducationCourse;