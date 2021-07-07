module.exports.noticias = (application, req, res)=>{
    const connection = application.config.dbConnection;
    const usuariosDao = new application.app.models.NoticiasDAO(connection);
    usuariosDao.getUsuarios((error, result)=> {
        res.render("usuarios/usuarios", { usuarios: result })
    });   
} 

module.exports.getUserNoticias = (application, req, res)=>{
    const connection = application.config.dbConnection;
    const usuariosDao = new application.app.models.usuariosDAO(connection);
    const objUsuario = req.query;

    usuariosDao.getUserNoticias ( objUsuario,(error, result)=> {
        res.render("usuarios/usuario-noticias", { noticias: result });
    });
}

module.exports.form_login = (application, req, res)=>{
    res.render("usuarios/form-login");
}

module.exports.home = (application, req, res)=>{
    res.render("usuarios/home");
}