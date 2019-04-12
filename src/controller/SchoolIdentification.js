const schoolIdentification = require('../model/SchoolIdentification')

//cria um novo registro
exports.actionCreate = (request,response,next)=>{
    const register_type = request.body.register_type;
    const inep_id = request.body.inep_id;
    const manager_cpf = request.body.manager_cpf;
    const manager_name = request.body.manager_name;
    const manager_role = request.body.manager_role;
    const manager_email = request.body.manager_email;
    const situation = request.body.situation;
    const initial_date = request.body.initial_date;
    const final_date = request.body.final_date;
    const name = request.body.name;
    const latitude = request.body.latitude;
    const longitude = request.body.longitude;
    const cep = request.body.cep;
    const address = request.body.address;
    const address_number = request.body.address_number;
    const address_complement = request.body.address_complement;
    const address_neighborhood = request.body.address_neighborhood;
    const edcenso_uf_fk = request.body.edcenso_uf_fk;
    const edcenso_city_fk = request.body.edcenso_city_fk;
    const edcenso_district_fk = request.body.edcenso_district_fk;
    const ddd = request.body.ddd;
    const phone_number = request.body.phone_number;
    const public_phone_number = request.body.public_phone_number;
    const other_phone_number = request.body.other_phone_number;
    const fax_number = request.body.fax_number;
    const email = request.body.email;
    const edcenso_regional_education_organ_fk = request.body.edcenso_regional_education_organ_fk;
    const administrative_dependence = request.body.administrative_dependence;
    const location = request.body.location;
    const private_school_category = request.body.private_school_category;
    const public_contract = request.body.public_contract;
    const private_school_business_or_individual = request.body.private_school_business_or_individual;
    const private_school_syndicate_or_association = request.body.private_school_syndicate_or_association;
    const private_school_ong_or_oscip = request.body.private_school_ong_or_oscip;
    const private_school_non_profit_institutions = request.body.private_school_non_profit_institutions;
    const private_school_s_system = request.body.private_school_s_system;
    const private_school_maintainer_cnpj = request.body.private_school_maintainer_cnpj;
    const private_school_cnpj = request.body.private_school_cnpj;
    const offer_or_linked_unity = request.body.offer_or_linked_unity;
    const inep_head_school = request.body.inep_head_school;
    const ies_code = request.body.ies_code;
    const regulation = request.body.regulation;
    const logo_file_name = request.body.logo_file_name;
    const logo_file_type = request.body.logo_file_type;
    const logo_file_content = request.body.logo_file_content;
    const act_of_acknowledgement = request.body.act_of_acknowledgement;

    schoolIdentification.create({
        register_type:register_type, inep_id:inep_id, manager_cpf:manager_cpf, manager_name:manager_name, manager_role:manager_role,
        manager_email:manager_email, situation:situation, initial_date:initial_date, final_date:final_date, name:name, latitude:latitude,
        longitude:longitude, cep:cep, address:address, address_number:address_number, address_complement:address_complement,
        address_neighborhood:address_neighborhood, edcenso_uf_fk:edcenso_uf_fk, edcenso_city_fk:edcenso_city_fk, edcenso_district_fk:edcenso_district_fk,
        ddd:ddd, phone_number:phone_number, public_phone_number:public_phone_number, other_phone_number:other_phone_number, fax_number:fax_number,email:email,
        edcenso_regional_education_organ_fk:edcenso_regional_education_organ_fk,administrative_dependence:administrative_dependence,location:location,
        private_school_category:private_school_category,public_contract:public_contract,private_school_business_or_individual:private_school_business_or_individual,
        private_school_syndicate_or_association:private_school_syndicate_or_association,private_school_ong_or_oscip:private_school_ong_or_oscip,
        private_school_non_profit_institutions:private_school_non_profit_institutions,private_school_s_system:private_school_s_system,private_school_maintainer_cnpj:private_school_maintainer_cnpj,
        private_school_cnpj:private_school_cnpj,offer_or_linked_unity:offer_or_linked_unity,inep_head_school:inep_head_school,ies_code:ies_code,
        regulation:regulation,logo_file_name:logo_file_name,logo_file_type:logo_file_type,logo_file_content:logo_file_content,act_of_acknowledgement:act_of_acknowledgement
    }).then(()=>{
        response.status(201).send();
    }).catch(error=>next(error));

};

//Lista todos com parâmetro de paginação
exports.searchAll = (request, response, next) => {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);
  
    if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
      response.status(status.BAD_REQUEST).send();
    }
  
    const ITENS_POR_PAGINA = 10;
  
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;
  
    schoolIdentification.findAll({ limit: limite, offset: pagina })
      .then(SchoolIdentification => {
        response.send(SchoolIdentification);
      })
      .catch(error => next(error));
  };

//Busca um único registro a partir de um inep_id
exports.search = (request, response, next) => {
    const inep_id = request.params.inep_id;
  
    schoolIdentification.findById(inep_id)
      .then(SchoolIdentification => {
        if (SchoolIdentification) {
          response.status(status.OK).send(spoiler);
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };

  //Atualiza um registro com base no inep_id
  exports.update = (request, response, next) => {
    const inep_id = request.params.inep_id;
  
    const register_type = request.body.register_type;
    const manager_cpf = request.body.manager_cpf;
    const manager_name = request.body.manager_name;
    const manager_role = request.body.manager_role;
    const manager_email = request.body.manager_email;
    const situation = request.body.situation;
    const initial_date = request.body.initial_date;
    const final_date = request.body.final_date;
    const name = request.body.name;
    const latitude = request.body.latitude;
    const longitude = request.body.longitude;
    const cep = request.body.cep;
    const address = request.body.address;
    const address_number = request.body.address_number;
    const address_complement = request.body.address_complement;
    const address_neighborhood = request.body.address_neighborhood;
    const edcenso_uf_fk = request.body.edcenso_uf_fk;
    const edcenso_city_fk = request.body.edcenso_city_fk;
    const edcenso_district_fk = request.body.edcenso_district_fk;
    const ddd = request.body.ddd;
    const phone_number = request.body.phone_number;
    const public_phone_number = request.body.public_phone_number;
    const other_phone_number = request.body.other_phone_number;
    const fax_number = request.body.fax_number;
    const email = request.body.email;
    const edcenso_regional_education_organ_fk = request.body.edcenso_regional_education_organ_fk;
    const administrative_dependence = request.body.administrative_dependence;
    const location = request.body.location;
    const private_school_category = request.body.private_school_category;
    const public_contract = request.body.public_contract;
    const private_school_business_or_individual = request.body.private_school_business_or_individual;
    const private_school_syndicate_or_association = request.body.private_school_syndicate_or_association;
    const private_school_ong_or_oscip = request.body.private_school_ong_or_oscip;
    const private_school_non_profit_institutions = request.body.private_school_non_profit_institutions;
    const private_school_s_system = request.body.private_school_s_system;
    const private_school_maintainer_cnpj = request.body.private_school_maintainer_cnpj;
    const private_school_cnpj = request.body.private_school_cnpj;
    const offer_or_linked_unity = request.body.offer_or_linked_unity;
    const inep_head_school = request.body.inep_head_school;
    const ies_code = request.body.ies_code;
    const regulation = request.body.regulation;
    const logo_file_name = request.body.logo_file_name;
    const logo_file_type = request.body.logo_file_type;
    const logo_file_content = request.body.logo_file_content;
    const act_of_acknowledgement = request.body.act_of_acknowledgement;
  
    schoolIdentification.findById(inep_id)
      .then(SchoolIdentification => {
        if (SchoolIdentification) {
            schoolIdentification.update(
            {
                register_type:register_type, manager_cpf:manager_cpf, manager_name:manager_name, manager_role:manager_role,
                manager_email:manager_email, situation:situation, initial_date:initial_date, final_date:final_date, name:name, latitude:latitude,
                longitude:longitude, cep:cep, address:address, address_number:address_number, address_complement:address_complement,
                address_neighborhood:address_neighborhood, edcenso_uf_fk:edcenso_uf_fk, edcenso_city_fk:edcenso_city_fk, edcenso_district_fk:edcenso_district_fk,
                ddd:ddd, phone_number:phone_number, public_phone_number:public_phone_number, other_phone_number:other_phone_number, fax_number:fax_number,email:email,
                edcenso_regional_education_organ_fk:edcenso_regional_education_organ_fk,administrative_dependence:administrative_dependence,location:location,
                private_school_category:private_school_category,public_contract:public_contract,private_school_business_or_individual:private_school_business_or_individual,
                private_school_syndicate_or_association:private_school_syndicate_or_association,private_school_ong_or_oscip:private_school_ong_or_oscip,
                private_school_non_profit_institutions:private_school_non_profit_institutions,private_school_s_system:private_school_s_system,private_school_maintainer_cnpj:private_school_maintainer_cnpj,
                private_school_cnpj:private_school_cnpj,offer_or_linked_unity:offer_or_linked_unity,inep_head_school:inep_head_school,ies_code:ies_code,
                regulation:regulation,logo_file_name:logo_file_name,logo_file_type:logo_file_type,logo_file_content:logo_file_content,act_of_acknowledgement:act_of_acknowledgement
            },
            { where: { inep_id: inep_id } }
          )
            .then(() => {
              response.status(status.OK).send();
            })
            .catch(error => next(error));
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };

//Exclui um registro com base no inep_id
  exports.delete = (request, response, next) => {
    const inep_id = request.params.inep_id;
  
    schoolIdentification.findById(id)
      .then(SchoolIdentification => {
        if (SchoolIdentification) {
        schoolIdentification.destroy({
            where: { inep_id: inep_id }
          })
            .then(() => {
              response.status(status.OK).send();
            })
            .catch(error => next(error));
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };