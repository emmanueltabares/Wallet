import { Router } from 'express';
import appRouter from './walletRoutes';

const router = Router();

router.use('/wallet', appRouter);

export default router;