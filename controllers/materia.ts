import { Request, Response } from "express";
import pool from '../db/connetion'

export default class Materia {
    
     getMaterias = async (req: Request, res: Response) => {

    
        pool.query('SELECT * FROM `materia_prima`', (error, resuls)=> {
            res.json(
                resuls )
        });
    
    }
    //TODO falta por nombre o id
    
     getMateria = async (req: Request, res: Response) => {
    
        const {id} = req.params;
    
        try {
           pool.query('SELECT * FROM materia_prima WHERE id = ? ',id,(error, resuls)=> {
            res.json(resuls)
        });
    
        } catch (error) {
            console.log(error);
        }
       
    }
      postMateria = async (req: Request, res: Response) => {
    
           const materia = req.body;
        try {
            await pool.query('INSERT INTO materia_prima set ?', [materia], (error, resuls)=> {
    
                res.json(
                   { msg: 'Materia prima creada'}
                )
            })        
        
        } catch (error) {
            res.json(error);
        }
    
    }
    
     putMateria = async (req: Request, res: Response) => {
    
        const {id} = req.params;
        const  {cargo, ...perso} = req.body;
        try {
            await pool.query('UPDATE persona set ? WHERE id = ?', [perso,id], (error, resuls)=> {
                const prueba = pool.query('UPDATE Materia set ? WHERE id_persona = ?',[{cargo},id]);
                res.json({
                    msg: 'Materia actualidado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
    
     deleteMateria = async (req: Request, res: Response) => {
       const {id} = req.params;
        const  {cargo, ...perso} = req.body;
        try {
            await pool.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls)=> {            
                res.json({
                    msg: 'Materia eliminado',               
                });
            })
       
        } catch (error) {
            res.json(error);
        }
    
    }
}
