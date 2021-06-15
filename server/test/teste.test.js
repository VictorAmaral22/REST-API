const axios = require('axios');
const postsService = require('../service/postsService');

//Biblioteca responsável pela função generate abaixo
const crypto = require('crypto');

//Faz uma string aleatória para ajudar no test
const generate = function (){
    return crypto.randomBytes(20).toString('hex');
}

test('Should get posts', async function () {
    //  given
    const post1 = await postsService.savePost({nome: generate(), descricao: generate()});
    const post2 = await postsService.savePost({nome: generate(), descricao: generate()});
    const post3 = await postsService.savePost({nome: generate(), descricao: generate()});
    //  when
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });
    const posts = response.data;
    //  then
    expect(posts).toHaveLenght(3);
})