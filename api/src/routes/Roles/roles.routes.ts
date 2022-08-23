import { Router } from 'express';
const router = Router();

import rolesController from "../../controllers/roles.controller";

router.get('/roles', rolesController.getAll);
router.post('/roles/assign', rolesController.assignRole);

export default router;