import {Router} from 'express';
import Almacenamiento from '../../controllers/almacenamiento';

const router = Router();
const almacenar = new Almacenamiento()

router.get('/', almacenar.getEstanterias);
router.get('/:id', almacenar.getEstanteria);
router.post('/', almacenar.postEstanteria);
router.put('/:id', almacenar.putEstanteria);
router.delete('/:id', almacenar.deleteEstanteria);
// console.log(prueba);
export default router;