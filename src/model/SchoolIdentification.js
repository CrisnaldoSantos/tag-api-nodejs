const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const schoolIdentificantion = sequelize.define("school_identification",{
    register_type:{
        allowNull:false,
        type:Sequelize.STRING
    },
    inep_id:{
        allowNull:false,
        primaryKey:true,
        type:Sequelize.STRING
    },
    manager_cpf:{
        allowNull:false,
        type:Sequelize.STRING
    },
    manager_name:{
        allowNull:false,
        type:Sequelize.STRING
    },
    manager_role:{
        allowNull:null,
        type:Sequelize.INTEGER
    },
    manager_email:{
        allowNull:null,
        type:Sequelize.STRING
    },
    situation:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    initial_date:{
        allowNull:false,
        type:Sequelize.STRING
    },
    final_date:{
        allowNull:false,
        type:Sequelize.STRING
    },
    name:{
        allowNull:false,
        type:Sequelize.STRING
    },
    latitude:{
        allowNull:false,
        type:Sequelize.STRING
    },
    longitude:{
        allowNull:false,
        type:Sequelize.STRING
    },
    cep:{
        allowNull:false,
        type:Sequelize.STRING
    },
    address:{
        allowNull:false,
        type:Sequelize.STRING
    },
    address_number:{
        allowNull:false,
        type:Sequelize.STRING
    },
    address_complement:{
        allowNull:false,
        type:Sequelize.STRING
    },
    address_neighborhood:{
        allowNull:false,
        type:Sequelize.STRING
    },
    edcenso_uf_fk:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    edcenso_city_fk:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    edcenso_district_fk:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    ddd:{
        allowNull:false,
        type:Sequelize.STRING
    },
    phone_number:{
        allowNull:false,
        type:Sequelize.STRING
    },
    public_phone_number:{
        allowNull:false,
        type:Sequelize.STRING
    },
    other_phone_number:{
        allowNull:false,
        type:Sequelize.STRING
    },
    fax_number:{
        allowNull:false,
        type:Sequelize.STRING
    },
    email:{
        allowNull:false,
        type:Sequelize.STRING
    },
    edcenso_regional_education_organ_fk:{
        allowNull:false,
        type:Sequelize.STRING
    },
    administrative_dependence:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    location:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    private_school_category:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    public_contract:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    private_school_business_or_individual:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    private_school_syndicate_or_association:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    private_school_ong_or_oscip:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    private_school_non_profit_institutions:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    private_school_s_system:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    private_school_maintainer_cnpj:{
        allowNull:false,
        type:Sequelize.STRING
    },
    private_school_cnpj:{
        allowNull:false,
        type:Sequelize.STRING
    },
    offer_or_linked_unity:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    inep_head_school:{
        allowNull:false,
        type:Sequelize.STRING
    },
    ies_code:{
        allowNull:false,
        type:Sequelize.STRING
    },
    regulation:{
        allowNull:false,
        type:Sequelize.INTEGER
    },
    logo_file_name:{
        allowNull:false,
        type:Sequelize.STRING
    },
    logo_file_type:{
        allowNull:false,
        type:Sequelize.STRING
    },
    logo_file_content:{
        allowNull:false,
        type:Sequelize.STRING
    },
    act_of_acknowledgement:{
        allowNull:false,
        type:Sequelize.STRING
    }
});
module.exports = schoolIdentificantion;