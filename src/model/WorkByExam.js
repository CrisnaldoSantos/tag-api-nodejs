const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const WorkByExam = sequelize.define("WorkByExam",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER.length(11),
        allowNull:false,
        autoIncrement:true
    },
    classroom_fk:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
            model:'classroom',
            key:'id'
        }
    },
    exam:{
        allowNull:false,
        type:Sequelize.TINYINT.length(20)
    },
    school_days:{
        type:Sequelize.SMALLINT.length(6),
        defaultValue: null
    },
    workload:{
        type:Sequelize.SMALLINT.length(6),
        defaultValue: null
    }
},{tableName:"work_by_exam",timestamps:false});
module.exports = WorkByExam;