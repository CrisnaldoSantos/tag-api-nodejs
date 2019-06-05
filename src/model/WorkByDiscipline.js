const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoUf = sequelize.define("WorkByDiscipline",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
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
    discipline_fk:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{
            model:'edcenso_discipline',
            key:'id'
        }
    },
    school_days:{
        defaultValue:null,
        type:Sequelize.SMALLINT.length(6)
    }
},{tableName:"work_by_discipline",timestamps:false});
module.exports = WorkByDiscipline;