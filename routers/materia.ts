import {Router} from 'express';
import Materia from '../controllers/materia';

const router = Router();
const materia = new Materia()

router.get('/', materia.getMaterias);
router.get('/:id', materia.getMateria);
router.post('/', materia.postMateria);
router.put('/:id', materia.putMateria);
router.delete('/:id', materia.deleteMateria);

// console.log(prueba);
export default router;