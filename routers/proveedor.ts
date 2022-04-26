import {Router} from 'express';
import { getProveedores,
         getProveedor,
         postProveedor,
         putProveedor,
         deleteProveedor } from '../controllers/proveedor';

const router = Router();


router.get('/', getProveedores);
router.get('/:id', getProveedor);
router.post('/', postProveedor);
router.put('/:id', putProveedor);
router.delete('/:id', deleteProveedor);

export default router;