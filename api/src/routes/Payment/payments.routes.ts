import { Router } from 'express';
const router = Router();

import paymentsController from "../../controllers/payments.controller";

router.post('/payment', paymentsController.getPayment);

export default router;