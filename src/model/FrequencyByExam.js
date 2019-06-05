const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const FrequencyByExam = sequelize.define("FrequencyByExam",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true
    },
    enrollment_fk:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
            model:'student_enrollment',
            key:'id'
        }
    },
    exam:{
        allowNull:false,
        type:Sequelize.TINYINT.length(1)
    },
    absences:{
        type:Sequelize.SMALLINT.length(6),
        defaultValue:null
    }
},{tableName:"frequency_by_exam",timestamps:false});
module.exports = FrequencyByExam;