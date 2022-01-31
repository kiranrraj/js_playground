const axios = require('axios');

function getData(){
    return axios.get('https://jsonplaceholder.typicode.com/users/4')
    .then(res => res.data)
    .catch(err => `Error Message : ${err}`)
}

module.exports = getData