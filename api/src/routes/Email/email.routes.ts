import { Router } from 'express';
const router = Router();

import emailController from "../../controllers/email.controller";

router.post('/email', emailController.sendEmail);

export default router;