import { Router } from 'express';
import { create, store } from '../controllers/transfer.controller';

const router = Router();

router.get('/create', create);
router.post('/store', store);

export default router;
