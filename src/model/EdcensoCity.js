const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoCity = sequelize.define("EdcensoCity",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        unique:true
    },
    edcenso_uf_fk:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        references:{
            model:'edcenso_uf',
            key:'id'
        }
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(50)
    },
    cep_initial:{
        allowNull:false,
        type:Sequelize.STRING(9),
        defaultValue: null
    },
    cep_final:{
        allowNull:true,
        type:Sequelize.STRING(9),
        defaultValue: null
    },
    ddd1:{
        allowNull:true,
        type:Sequelize.SMALLINT(6),
        defaultValue: null
    },
    ddd2:{
        allowNull:true,
        type:Sequelize.SMALLINT(6),
        defaultValue: null
    }
},{tableName:"edcenso_city",timestamps:false});
module.exports = EdcensoCity;