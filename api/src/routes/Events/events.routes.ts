import { Router } from 'express';
const router = Router();

import eventController from "../../controllers/event.controller";

router.get('/event', eventController.getAll);

export default router;