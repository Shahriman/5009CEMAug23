//Update by Shahriman on 15 Sept 2023.

const axios = require('axios');
const apikey = '869744ce';
const title = 'Spiderman';

const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

axios.get(querystr).then( (response) =>{
console.log(response.data.Title);
console.log(response.data.Year);
console.log(response.data.Director);

}
);