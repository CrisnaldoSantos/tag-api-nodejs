const edcensoComplementaryActivityType = require('../model/EdcensoComplementaryActivityType');
const Status = require("http-status");
//cria um novo registro
exports.actionCreate = (request,response,next)=>{
    const name = request.body.name
    edcensoComplementaryActivityType.create({
        name:name
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
  
    edcensoComplementaryActivityType.findAll({ limit: limite, offset: pagina })
      .then(EdcensoComplementaryActivityType => {
        response.send(EdcensoComplementaryActivityType);
      })
      .catch(error => next(error));
  };
  
//Busca um único registro a partir de um id
exports.search = (request, response, next) => {
    const id = request.params.id;
  
    edcensoComplementaryActivityType.findByPk(id).then((EdcensoComplementaryActivityType) => 
      {
        if (EdcensoComplementaryActivityType) {
          response.send(EdcensoComplementaryActivityType);
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
      .then(EdcensoComplementaryActivityType => {
        if (EdcensoComplementaryActivityType) {
            edcensoComplementaryActivityType.update(
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
  
    edcensoComplementaryActivityType.findById(id)
      .then(EdcensoComplementaryActivityType => {
        if (EdcensoComplementaryActivityType) {
        edcensoComplementaryActivityType.destroy({
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
