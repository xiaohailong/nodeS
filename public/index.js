// import './bundle.css';
import 'reset-css';
import './css/index.styl';

import 'jsoneditor/dist/jsoneditor.min.css'

import me from './images/me.jpeg';

import Person from  "./js/test.es"
import "./js/tabSwitch"
import JSONEditor from 'jsoneditor';
// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
var container = document.getElementById("jsoneditor");
var options = {
    mode:'code'
};
var editor = new JSONEditor(container, options);

// set json
var json = {
    "Array": [1, 2, 3],
    "Boolean": true,
    "Null": null,
    "Number": 123,
    "Object": {"a": "b", "c": "d"},
    "String": "Hello World"
};
editor.set(json);

// get json
var json = editor.get();



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