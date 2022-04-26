import express from 'express';
import cors from 'cors';
import db  from '../db/connetion'
import EmpleadoRoutes from '../routers/empleado';
import ProveedorRoutes from '../routers/proveedor';
import AlmacenamientoRoutes from '../routers/almacenarmiento/almacenamiento';
import EstanteriaRoutes from '../routers/almacenarmiento/estanteria';
import UbicacionRoutes from '../routers/almacenarmiento/ubicacion';
import MateriaRoutes from '../routers/materia';

class Server {
    private app;
    private port: string;
    private apiPath = {
        empleado: '/api/empleado',
        proveedor: '/api/proveedor',
        almancenamiento: '/api/almacen/',
        estanteria: '/api/estanteria',
        ubicacion: '/api/ubicacion',
        materia: '/api/materiaprima',
    }

    constructor() {
        
        this.app = express();
        this.port = process.env.PORT || '8050';
        // this.dbConnection();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        // Lectura del body
        this.app.use(express.json());

        // Carpeta publica
        this.app.use(express.static('../public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }

    routes() {
        this.app.use(this.apiPath.empleado, EmpleadoRoutes);
        this.app.use(this.apiPath.proveedor, ProveedorRoutes);
        this.app.use(this.apiPath.almancenamiento, AlmacenamientoRoutes);
        this.app.use(this.apiPath.estanteria, EstanteriaRoutes);
        this.app.use(this.apiPath.ubicacion, UbicacionRoutes);
        this.app.use(this.apiPath.materia, MateriaRoutes);
    }

    // async dbConnection() {
    //         // tslint:disable-next-line: no-empty
    //         try {
    //             await db.authenticate();
    //             console.log("Estamos conectados");
    
    //         } catch (error) {
    
    //             console.log(error);
    //         }
    //     }




}
export default Server;