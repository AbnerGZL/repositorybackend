require('dotenv').config();
const http = require('http');

function requestController() {
    console.log('Bienvenidos al curso');
}

const server = http.createServer(requestController);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});