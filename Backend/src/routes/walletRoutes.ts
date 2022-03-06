import { Router} from 'express';
import walletController from '../controllers/wallet';
import expressAsyncHandler from 'express-async-handler';

const router = Router();

router.get('/', expressAsyncHandler(walletController.getWallet))
router.post('/', expressAsyncHandler(walletController.createWallet));
router.put('/', walletController.updateWallet)
router.delete('/', walletController.removeWallet)

export default router;
