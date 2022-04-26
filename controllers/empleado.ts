import { Request, Response } from "express";
import pool from '../db/connetion'


export const getEmpleados = async (req: Request, res: Response) => {

    
    pool.query('SELECT * FROM `persona` as p, empleado as e WHERE e.id_persona = p.id and estado = 1', (error, resuls)=> {
        res.json(
            
            resuls )
    });

}
//TODO falta por nombre o id
export const getEmpleado = async (req: Request, res: Response) => {

    const {id} = req.params;

    try {
       pool.query('SELECT * FROM empleado WHERE id = ? ',id,(error, resuls)=> {
        res.json(resuls)
    });

    } catch (error) {
        console.log(error);
    }
   
}
export const postEmpleado = async (req: Request, res: Response) => {

       const  {cargo, ...perso} = req.body;
    try {
        await pool.query('INSERT INTO persona set ?', [perso], (error, resuls)=> {
            const idPer = resuls.insertId
            const {cargo} = req.body;
            pool.query(`INSERT INTO empleado ( cargo, id_persona) VALUES ('${cargo}', ${idPer})`);
            res.json(
               { msg: 'empleado creado'}
            )
        })        
    
    } catch (error) {
        res.json(error);
    }

}
export const putEmpleado = async (req: Request, res: Response) => {

    const {id} = req.params;
    const  {cargo, ...perso} = req.body;
    try {
        await pool.query('UPDATE persona set ? WHERE id = ?', [perso,id], (error, resuls)=> {
            const prueba = pool.query('UPDATE empleado set ? WHERE id_persona = ?',[{cargo},id]);
            res.json({
                msg: 'Empleado actualidado',               
            });
        })
   
    } catch (error) {
        res.json(error);
    }

}
export const deleteEmpleado = async (req: Request, res: Response) => {
    const {id} = req.params;
    const  {cargo, ...perso} = req.body;
    try {
        await pool.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls)=> {            
            res.json({
                msg: 'Empleado eliminado',               
            });
        })
   
    } catch (error) {
        res.json(error);
    }

}