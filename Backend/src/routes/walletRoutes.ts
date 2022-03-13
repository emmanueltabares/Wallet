import { Router} from 'express';
import walletController from '../controllers/wallet';
import expressAsyncHandler from 'express-async-handler';
import { isValidToken } from '../middlewares/token';

const router = Router();

router.get('/', isValidToken, expressAsyncHandler(walletController.getWallet))
router.put('/', walletController.updateWallet)
router.delete('/', walletController.removeWallet)

export default router;
