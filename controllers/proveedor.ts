import { Request, Response } from "express";
import pool from '../db/connetion'


export const getProveedores = async (req: Request, res: Response) => {

    
    pool.query('SELECT * FROM `persona` as p, Proveedor as e WHERE e.id_persona = p.id and estado = 1', (error, resuls)=> {
        res.json(            
            resuls )
    });

}
//TODO falta por nombre o id
export const getProveedor = async (req: Request, res: Response) => {

    const {id} = req.params;

    try {
       pool.query('SELECT * FROM `persona` as p, Proveedor as e WHERE e.id_persona = p.id and estado = 1 and e.id = ?',id,(error, resuls)=> {
        res.json(resuls)
    });

    } catch (error) {
        console.log(error);
    }
   
}
export const postProveedor = async (req: Request, res: Response) => {

       const  perso = req.body;
    try {
        await pool.query('INSERT INTO persona set ?', [perso], (error, resuls)=> {
            const idPer = resuls.insertId
            // console.log(idPer);
            pool.query(`INSERT INTO Proveedor ( id_persona) VALUES (${idPer})`);
            res.json(
               { msg: 'Proveedor creado'}
            )
        })        
    
    } catch (error) {
        res.json(error);
    }

}
export const putProveedor = async (req: Request, res: Response) => {

    const {id} = req.params;
    const perso = req.body;
    try {
        await pool.query('UPDATE persona set ? WHERE id = ?', [perso,id], (error, resuls)=> {            
            res.json({
                msg: 'Proveedor actualidado',               
            });
        })
   
    } catch (error) {
        res.json(error);
    }

}
export const deleteProveedor = async (req: Request, res: Response) => {
    const {id} = req.params;
    const  {cargo, ...perso} = req.body;
    try {
        await pool.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls)=> {            
            res.json({
                msg: 'Proveedor eliminado',               
            });
        })
   
    } catch (error) {
        res.json(error);
    }

}