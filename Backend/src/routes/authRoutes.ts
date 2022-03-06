import { Router} from 'express';
import authController from '../controllers/auth';
import expressAsyncHandler from 'express-async-handler';

const router = Router();

router.post('/login', expressAsyncHandler(authController.login));
router.post('/signup', expressAsyncHandler(authController.signUp));

export default router;