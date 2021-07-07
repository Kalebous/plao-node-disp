module.exports = (application)=>{
    app.get('/', (req, res)=>{
        application.app.controllers.homeController.index(application, req, res);
      });
}