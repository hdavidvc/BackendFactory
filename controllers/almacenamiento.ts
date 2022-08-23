import { Request, Response } from "express";
import pool from '../db/connetion'


export default class Almacenamiento {
    public data:any  = [];
    public getAlmacenes = async (req: Request, res: Response) => {
        
        pool.query('SELECT * FROM almacen', (error, resuls)=> {

            resuls.forEach((element:any) => {
               const  {id, ...demas} = element;
               this.data.push(demas);
            });
            res.json(            
                resuls
                )
        });
        this.data = [];
    }
    //TODO falta por nombre o id
     getAlmacen = async (req: Request, res: Response) => {
    
        const {id} = req.params;
    
        try {
           pool.query('SELECT * FROM Almacen WHERE id = ? and estado = "Disponible" ',id,(error, resuls)=> {
            res.json(resuls)
        });
    
        } catch (error) {
            console.log(error);
        }
       
    }
     postAlmacen = async (req: Request, res: Response) => {
    
           const  almac = req.body;
        try {
            const query = await pool.query('INSERT INTO almacen set ?', [almac], (error, resuls)=> {
                res.json(
                   { msg: 'almacen registrado'}
                )
            })        
        
        } catch (error) {
            res.json(error);
        }
    
    }
     putAlmacen = async (req: Request, res: Response) => {
    
        const {id} = req.params;
        const perso = req.body;
        try {
            await pool.query('UPDATE almacen set ? WHERE id = ?', [perso,id], (error, resuls)=> {            
                res.json({
                    msg: 'Almacen actualidado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
     putAlmacen2 = async (req: Request, res: Response) => {
    
        const {id} = req.params;
        const perso = req.body;
        try {
            await pool.query('UPDATE almacen set estado = "ocupado" WHERE id = ?', [id], (error, resuls)=> {            
                res.json({
                    msg: 'Almacen actualidado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
     deleteAlmacen = async (req: Request, res: Response) => {
        const {id} = req.params;
        const  {cargo, ...perso} = req.body;
        try {
            await pool.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls)=> {            
                res.json({
                    msg: 'Almacen eliminado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
    
    
    //ESTANTERIAS
     public getEstanterias = async (req: Request, res: Response) => {
        console.log('res');
        
        pool.query('SELECT * FROM estanteria', (error, resuls)=> {
            res.json(            
                resuls )
        });
    
    }
    //TODO falta por nombre o id
     getEstanteria = async (req: Request, res: Response) => {
    
        const {id} = req.params;
    
        try {
           pool.query('SELECT * FROM estanteria WHERE id_almacen = ? ',id,(error, resuls)=> {
            res.json(resuls)
        });
    
        } catch (error) {
            console.log(error);
        }
       
    }
     postEstanteria = async (req: Request, res: Response) => {
    
           const  estan = req.body;
        try {
            await pool.query('INSERT INTO estanteria set ?', [estan], (error, resuls)=> {                
                res.json(
                   { msg: 'Estanteria creada'}
                )
            })        
        
        } catch (error) {
            res.json(error);
        }
    
    }
    putEstanteria = async (req: Request, res: Response) => {
    
        const {id} = req.params;
        const perso = req.body;
        try {
            await pool.query('UPDATE estanteria set ? WHERE id = ?', [perso,id], (error, resuls)=> {            
                res.json({
                    msg: 'Estanteria actualidado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
     deleteEstanteria = async (req: Request, res: Response) => {
        const {id} = req.params;
        const  {cargo, ...perso} = req.body;
        try {
            await pool.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls)=> {            
                res.json({
                    msg: 'Almacen eliminado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
    //UBICACION
     public getUbicaciones = async (req: Request, res: Response) => {
        console.log('res');
        
        pool.query('SELECT * FROM ubicacion', (error, resuls)=> {
            res.json(            
                resuls )
        });
    
    }
    //TODO falta por nombre
     getUbicacion = async (req: Request, res: Response) => {
    
        const {id} = req.params;
    
        try {
           pool.query('SELECT a.id, a.descripcion from almacen as a, materia_prima as ma, ubicacion as ubi where ma.id = ? and ubi.id_almacen = a.id and ma.id_ubicacion = ubi.id and a.estado="Disponible"',id,(error, resuls)=> {
            res.json(resuls)
        });
    
        } catch (error) {
            console.log(error);
        }
       
    }
     postUbicacion = async (req: Request, res: Response) => {
    
           const  ubi = req.body;
        try {
            await pool.query('INSERT INTO ubicacion set ?', [ubi], (error, resuls)=> {                
                res.json(
                   { msg: 'Ubicacion creada',
                     id: resuls.insertId
                    }
                )
            })        
        
        } catch (error) {
            res.json(error);
        }
    
    }
    putUbicacion = async (req: Request, res: Response) => {
    
        const {id} = req.params;
        const perso = req.body;
        try {
            await pool.query('UPDATE persona set ? WHERE id = ?', [perso,id], (error, resuls)=> {            
                res.json({
                    msg: 'Almacen actualidado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
     deleteUbicacion = async (req: Request, res: Response) => {
        const {id} = req.params;
        const  {cargo, ...perso} = req.body;
        try {
            await pool.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls)=> {            
                res.json({
                    msg: 'Almacen eliminado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
}


