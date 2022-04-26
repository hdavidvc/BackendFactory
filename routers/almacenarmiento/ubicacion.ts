import {Router} from 'express';
import Almacenamiento from '../../controllers/almacenamiento';

const router = Router();
const almacenar = new Almacenamiento()

router.get('/', almacenar.getUbicaciones);
router.get('/:id', almacenar.getUbicacion);
router.post('/', almacenar.postUbicacion);
router.put('/:id', almacenar.putUbicacion);
router.delete('/:id', almacenar.deleteUbicacion);

export default router;