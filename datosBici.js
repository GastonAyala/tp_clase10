const fs = require('fs');
const leerJSON = () =>{
    const bicisJSON = fs.readFileSync('./bicicletas.json', 'utf-8')
    const bicisJS = JSON.parse(bicisJSON)
    return bicisJS
}

module.exports = {
    leerJSON
}