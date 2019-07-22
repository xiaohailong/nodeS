// import './bundle.css';

import './css/index.styl';

import me from './images/me.jpeg';

import Person from  "./js/test.es"
// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
let p = new Person('hai');
console.log(p.name);

console.log('index111webpack dist wqewdsq');

console.log(me);

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

if (module.hot) {
    console.log('hot12d2ww22sdsd21')
}