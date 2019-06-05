const edcensoCity = require('../model/EdcensoCity');
const Status = require("http-status");
//cria um novo registro
exports.actionCreate = (request,response,next)=>{
    const edcenso_uf_fk = request.body.edcenso_uf_fk;
    const name = request.body.name;
    const cep_initial = request.body.cep_initial;
    const cep_final = request.body.cep_final;
    const ddd1 = request.body.ddd1;
    const ddd2 = request.body.ddd2;

    edcensoCity.create({
        edcenso_uf_fk:edcenso_uf_fk,
        name:name,
        cep_initial:cep_initial,
        cep_final:cep_final,
        ddd1:ddd1,
        ddd2:ddd2
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
  
    edcensoNativeLanguages.findAll({ limit: limite, offset: pagina })
      .then(EdcensoNativeLanguages => {
        response.send(EdcensoNativeLanguages);
      })
      .catch(error => next(error));
  };
  
//Busca um único registro a partir de um id
exports.search = (request, response, next) => {
    const id = request.params.id;
  
    edcensoNativeLanguages.findByPk(id).then((EdcensoNativeLanguages) => 
      {
        if (EdcensoNativeLanguages) {
          response.send(EdcensoNativeLanguages);
        } else {
          response.status(Status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };

  //Atualiza um registro com base no inep_id
  exports.update = (request, response, next) => {
    const id_enl = request.params.id_enl;
  
    edcensoNativeLanguages.findByPK(id_enl)
      .then(EdcensoNativeLanguages => {
        if (EdcensoNativeLanguages) {
            edcensoNativeLanguages.update(
            {
                name:name
            },
            { where: { id: id } }
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
    const id = request.params.id;
  
    edcensoNativeLanguages.findById(id)
      .then(EdcensoNativeLanguages => {
        if (EdcensoNativeLanguages) {
        edcensoNativeLanguages.destroy({
            where: { id: id }
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
