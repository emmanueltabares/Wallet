import { Router } from 'express';
import walletRouter from './walletRoutes';
import authRouter from './authRoutes';

const router = Router();

router.use('/', authRouter);
router.use('/wallet', walletRouter);

export default router;