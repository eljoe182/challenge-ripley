import { Router } from 'express';
import index from '../controllers/transactions.controller';

const router = Router();

router.get('/', index);

export default router;
