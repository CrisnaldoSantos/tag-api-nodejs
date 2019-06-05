const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const InstructorDisciplines = sequelize.define("InstructorDisciplines",{
    id:{
        primaryKey:true,
        type:Sequelize,
        allowNull:false,
        autoIncrement:true
    },
    stage_vs_modality_fk:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
            model:'edcenso_stage_vs_modality',
            key:'id'
        }
    },
    discipline_fk:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
            model:'edcenso_discipline',
            key:'id'
        }
    },
    instructor_fk:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
            model:'instructor_identification',
            key:'id'
        }
    }
},{tableName:"instructor_disciplines",timestamps:false});
module.exports = InstructorDisciplines;