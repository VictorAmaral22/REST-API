const { default: axios } = require('axios');
const axion = require('axios');
const { TestWatcher } = require('jest');

TestWatcher('Should get posts', async function () {
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });
    const posts = response.data();
    expect(posts).toHaveLenght(5);
})