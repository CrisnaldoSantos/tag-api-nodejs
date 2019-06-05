const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const EdcensoNotaryOffice = sequelize.define("EdcensoNotaryOffice",{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING(300)
    },
    city:{
        allowNull:false,
        type:Sequelize.STRING(10)
    },
    uf:{
        allowNull:false,
        type:Sequelize.STRING(2)
    },
    cod:{
        allowNull:false,
        type:Sequelize.STRING(10),
        unique:true
    },
    serventia:{
        allowNull:false,
        type:Sequelize.STRING(10)
    }
},{tableName:"edcenso_notary_office",timestamps:false});
module.exports = EdcensoNotaryOffice;