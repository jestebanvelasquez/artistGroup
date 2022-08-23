
import { Router } from 'express';
const router = Router();

import eventController from "../../controllers/event.controller";
// import extractJWT from "../../middleware/extractJWT"

router.get('/event', eventController.getAll);
router.post('/event/:id', eventController.create);
// router.post('/users/register', eventController.register);
// router.get('/users/validateToken', extractJWT, eventController.validateToken);
// router.get('/users/role', extractJWT, eventController.getRoleByToken);
// router.put('/users/logout', extractJWT, eventController.logout);

export default router;