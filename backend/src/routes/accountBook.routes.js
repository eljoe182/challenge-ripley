import { Router } from 'express';
import { index, create, store } from '../controllers/accountBook.controller';

const router = Router();

router.get('/', index);
router.get('/create', create);
router.post('/store', store);

export default router;
