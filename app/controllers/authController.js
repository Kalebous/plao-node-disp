module.exports.login= (application, req, res)=>{
    const objUsuario = req.body;
    console.log(req.sessionID);
    const connection = application.config.dbConnection;
    const usuariosDao = new applicationa.app.models.UsuariosDAO(connection);
    usuariosDao.login(objUsuario,(error, result)=> {
        if(result.length > 0){
            //gravar as informações na sessão
            res.redirect('/usuario/home');
        }else{
            res.send("Usuário ou Senha inválido!")
        }
        
    });
}