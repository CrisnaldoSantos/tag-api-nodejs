const edcensoNativeLanguages = require('../model/EdcensoNativeLanguages');
const Status = require("http-status");
//cria um novo registro
exports.actionCreate = (request,response,next)=>{
    const name = request.body.name
    edcensoNativeLanguages.create({
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
  
    edcensoNativeLanguages.findAll({ limit: limite, offset: pagina })
      .then(EdcensoNativeLanguages => {
        response.send(EdcensoNativeLanguages);
      })
      .catch(error => next(error));
  };

  exports.buscarUm = (request, response, next) => {
    const id = request.params.id;
  
    edcensoNativeLanguages.findById(id)
      .then(EdcensoNativeLanguages => {
        if (EdcensoNativeLanguages) {
          response.status(status.OK).send(EdcensoNativeLanguages);
        } else {
          response.status(status.NOT_FOUND).send();
        }
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
