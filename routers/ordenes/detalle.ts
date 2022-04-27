import {Router} from 'express';
import Ordenes from '../../controllers/ordenes';

const router = Router();
const orden = new Ordenes()

router.get('/', orden.getdetalles);
router.get('/:id', orden.getdetalle);
router.post('/', orden.postdetalle);
router.put('/:id', orden.putdetalle);
router.delete('/:id', orden.deletedetalle);

export default router;