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
    const post1 = postsService.savePost({title: generate(), content: generate()});
    const post2 = postsService.savePost({title: generate(), content: generate()});
    const post3 = postsService.savePost({title: generate(), content: generate()});
    //  when
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });
    const posts = response.data();
    //  then
})