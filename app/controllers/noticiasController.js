module.exports.noticias = (application, req, res)=>{
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDAO(connection);
    noticiasDao.getNoticias((error, result)=> {
        res.render("noticias/noticias", { noticias: result })
    });   
}

module.exports.noticias = (application, req, res)=>{
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDAO(connection);
    const id_noticia = req.query;

    noticiasDAO.getNoticias(id_noticia,(error, result)=> {
        res.render("noticias/noticia", { noticia: result });
    });   
}

module.exports.formulario_inclusao_noticia = (application, req, res)=>{
    res.render("noticias/form_add_noticia", {validacao: {}, noticia: {}})
}

module.exports.noticia_salvar = (application, req, res)=>{
    var noticia = req.body;
    req.assert('titulo', 'Título da notícia é obrigatório').notEmpty();
    req.assert('resumo', 'resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 a 100 caractéres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('data_noticia', 'Formato da data está inadequado').isDate
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();
    const erros = req.validationErrors();

    if (erros) {
        res.render("noticias/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }
    const connection = application.config.dbConnection;
    const noticiasDAO = new application.app.models.NoticiasDAO(connection);
    noticiasDAO.salvarNoticia(noticia, (error, result) => {
        res.redirect('/noticias');
    });
}