"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const empleado_1 = __importDefault(require("../routers/empleado"));
const proveedor_1 = __importDefault(require("../routers/proveedor"));
const almacenamiento_1 = __importDefault(require("../routers/almacenarmiento/almacenamiento"));
const estanteria_1 = __importDefault(require("../routers/almacenarmiento/estanteria"));
const ubicacion_1 = __importDefault(require("../routers/almacenarmiento/ubicacion"));
const materia_1 = __importDefault(require("../routers/materia"));
class Server {
    constructor() {
        this.apiPath = {
            empleado: '/api/empleado',
            proveedor: '/api/proveedor',
            almancenamiento: '/api/almacen/',
            estanteria: '/api/estanteria',
            ubicacion: '/api/ubicacion',
            materia: '/api/materiaprima',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8050';
        // this.dbConnection();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta publica
        this.app.use(express_1.default.static('../public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.use(this.apiPath.empleado, empleado_1.default);
        this.app.use(this.apiPath.proveedor, proveedor_1.default);
        this.app.use(this.apiPath.almancenamiento, almacenamiento_1.default);
        this.app.use(this.apiPath.estanteria, estanteria_1.default);
        this.app.use(this.apiPath.ubicacion, ubicacion_1.default);
        this.app.use(this.apiPath.materia, materia_1.default);
    }
}
exports.default = Server;
