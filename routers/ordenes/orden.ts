import {Router} from 'express';
import Ordenes from '../../controllers/ordenes';

const router = Router();
const orden = new Ordenes()

router.get('/', orden.getordenes);
router.get('/pendientes/', orden.getordenesP);
router.get('/recibidas', orden.getordenesR);
router.get('/:id', orden.getorden);
router.post('/', orden.postorden);
router.put('/:id', orden.putorden);
router.delete('/:id', orden.deleteorden);

export default router;