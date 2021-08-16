const express = require('express');
const servidor = express();

servidor.get('/', (req, res, next) => {
    res.send({
        "mensagem": "Bem-vindo ao servidor NodeJS"
    })
})

servidor.listen(3000, () => {
    console.log('servidor funcionando');
});