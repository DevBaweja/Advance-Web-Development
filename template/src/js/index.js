import axios from 'axios';
import Temp from './models/temp';
import * as tempView from './views/tempView';

const state = {};

console.log('Application Loaded');
state.temp = new Temp();

tempView.setElement(state.temp.getStr());
/*
const getResult = () => {

    fetch('https://currency-exchange.p.rapidapi.com/listquotes', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
            'x-rapidapi-key': 'fb07adfc99mshd275c2d3c01652dp1fe88djsn2df1162a3381',
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

getResult();
*/

const getResult = async () => {
    const res = await 
    axios({
        "method":"GET",
        "url":"https://currency-exchange.p.rapidapi.com/listquotes",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"currency-exchange.p.rapidapi.com",
        "x-rapidapi-key":"fb07adfc99mshd275c2d3c01652dp1fe88djsn2df1162a3381"
        }
        })
    console.log(res);
}
getResult()