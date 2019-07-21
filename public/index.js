console.log('index111');
const axios = require('../node_modules/axios');
const test = {
    "name": 'testApi',
    "data": "success!dsadad"
}
axios.post('/buildApi', {
    data: test
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });