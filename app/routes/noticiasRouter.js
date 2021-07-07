module.exports = (application) => {

  application.get('/noticias', (req, res) => {
    application.app.controllers.noticiasController.noticias(application, req, res);
  });
  application.get('/noticia', (req, res) => {
    application.app.controllers.noticiasController.noticia(application, req, res);
  });

  application.get('/formulario-inclusao-noticia', (req, res) => {
    application.app.controllers.noticiasController.formulario_inclusao_noticia(application, req, res);
  });

  application.get('/noticias/salvar', (req, res) => {
    application.app.controllers.noticiasController.noticias_salvar(application, req, res);
  });

}





