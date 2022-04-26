import {Router} from 'express';
import { getEmpleados,
         getEmpleado,
         postEmpleado,
         putEmpleado,
         deleteEmpleado } from '../controllers/empleado';

const router = Router();


router.get('/', getEmpleados);
router.get('/:id', getEmpleado);
router.post('/', postEmpleado);
router.put('/:id', putEmpleado);
router.delete('/:id', deleteEmpleado);

export default router;