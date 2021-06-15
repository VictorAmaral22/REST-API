const database = require('../infra/database');

exports.getPosts = function () {
    return database.query('select * from local.post');
}

exports.savePost = function (post) {
    return database.one('insert into local.post (nome, descricao) values ($1, $2) returning *', [post.nome, post.descricao]);
}