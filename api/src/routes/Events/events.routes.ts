import { Router } from 'express';
const router = Router();

import eventController from "../../controllers/event.controller";

router.get('/event', eventController.getAll);
//router.get('/event/availability', eventController.availabilityEvent);
router.post('/event/create', eventController.create);
router.post('/event/deshabilitar', eventController.deshabilitar);

export default router;