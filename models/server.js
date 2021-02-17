const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.PathMaster = '/api'
        this.PathRouteUser = this.PathMaster + '/users';

        //Middleware
        this.middleware();

        //Rutas de mi apliacación
        this.routes();
    }

    middleware() {

        //Uso de cors
        this.app.use(cors());

        //Lectura y parseo del json
        this.app.use(express.json());

        //Carpeta publica
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.PathRouteUser, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`El servidor esta corriendo en el puerto ${this.port}`);
        })
    }

}

module.exports = Server;