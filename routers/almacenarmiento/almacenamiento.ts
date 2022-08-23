import {Router} from 'express';
import Almacenamiento from '../../controllers/almacenamiento';

const router = Router();
const almacenar = new Almacenamiento()

router.get('/', almacenar.getAlmacenes);
router.get('/:id', almacenar.getAlmacen);
router.post('/', almacenar.postAlmacen);
router.put('/:id', almacenar.putAlmacen);
router.put('/estado/:id', almacenar.putAlmacen2);
router.delete('/:id', almacenar.deleteAlmacen);

// console.log(prueba);
export default router;