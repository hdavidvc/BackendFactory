import { Request, Response } from "express";
import pool from '../db/connetion'

export default class Orden {
    
     getdetalles = async (req: Request, res: Response) => {

    
        pool.query('SELECT * FROM `detalle_orden_compra`', (error, resuls)=> {
            res.json(
                resuls )
        });
    
    }
    //TODO falta por nombre o id
    
     getdetalle = async (req: Request, res: Response) => {
    
        const {id} = req.params;
    
        try {
           pool.query('SELECT m.id, m.descripcion, deta.cantidad from materia_prima as m, detalle_orden_compra as deta, orden_compra as orden where deta.id_materia = m.id and deta.id_orden = orden.id and orden.id = ? ',id,(error, resuls)=> {
            res.json(resuls)
        });
    
        } catch (error) {
            console.log(error);
        }
       
    }
      postdetalle = async (req: Request, res: Response) => {
    
           const Dorden = req.body;
        try {
            await pool.query('INSERT INTO detalle_orden_compra set ?', [Dorden], (error, resuls)=> {
    
                res.json(
                   { resuls}
                )
            })        
        
        } catch (error) {
            res.json(error);
        }
    
    }
    
     putdetalle = async (req: Request, res: Response) => {
    
        const {id} = req.params;
        const  {cargo, ...perso} = req.body;
        try {
            await pool.query('UPDATE persona set ? WHERE id = ?', [perso,id], (error, resuls)=> {
                const prueba = pool.query('UPDATE orden set ? WHERE id_persona = ?',[{cargo},id]);
                res.json({
                    msg: 'orden actualidado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
    
     deletedetalle = async (req: Request, res: Response) => {
       const {id} = req.params;
        const  {cargo, ...perso} = req.body;
        try {
            await pool.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls)=> {            
                res.json({
                    msg: 'orden eliminado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }

    //ORDENES
     getordenes = async (req: Request, res: Response) => {

    
        pool.query('SELECT * FROM `orden_compra` ', (error, resuls)=> {
            resuls.forEach((element:any,i:number) => {
                // resuls[i].fecha = resuls[i].fecha.toLocaleDateString("es-ES")                
            });
            res.json(
                resuls
                 )
        });
    
    }
     getordenesP = async (req: Request, res: Response) => {

    
        pool.query('SELECT * FROM `orden_compra` where estado = "Pendiente" ', (error, resuls)=> {
            resuls.forEach((element:any,i:number) => {
                resuls[i].fecha = resuls[i].fecha.toLocaleDateString("es-ES")                
            });
            res.json(
                resuls
                 )
        });
    
    }
     getordenesR = async (req: Request, res: Response) => {

    
        pool.query('SELECT * FROM `orden_compra` where estado = "Recibida" ', (error, resuls)=> {
            resuls.forEach((element:any,i:number) => {
                resuls[i].fecha = resuls[i].fecha.toLocaleDateString("es-ES")                
            });
            res.json(
                resuls
                 )
        });
    
    }
    //TODO falta por nombre o id
    
     getorden = async (req: Request, res: Response) => {
    
        const {id} = req.params;
    
        try {
           pool.query('SELECT * FROM orden_compra WHERE id = ? and estado = "Pendiente" ',id,(error, resuls)=> {
            res.json(resuls)
        });
    
        } catch (error) {
            console.log(error);
        }
       
    }
    postorden = async (req: Request, res: Response) => {
    
           const orden = req.body;
        try {
            await pool.query('INSERT INTO orden_compra set ?', [orden], (error, resuls)=> {
    
                res.json(
                   {  id: resuls.insertId}
                )
            })        
        
        } catch (error) {
            res.json(error);
        }
    
    }
    
     putorden = async (req: Request, res: Response) => {
    
        // const {id} = req.params;
        const {id,estado} = req.body;
        try {
            await pool.query('UPDATE orden_compra set estado = ? WHERE id = ?', [estado,id], (error, resuls)=> {
                res.json({
                    msg: 'orden actualidada',
                    resuls               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
    
     deleteorden = async (req: Request, res: Response) => {
       const {id} = req.params;
        const  {cargo, ...perso} = req.body;
        try {
            await pool.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls)=> {            
                res.json({
                    msg: 'orden eliminado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
}
