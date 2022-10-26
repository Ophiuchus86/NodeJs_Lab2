const axios = require('axios');

async function fetch(ip, port){
    return await axios.get(`http://${ip}:${port}`)
    .then(res => res)
    .catch(error => console.log(error));
}

module.exports = fetch;
