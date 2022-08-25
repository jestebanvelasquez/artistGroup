import { Router } from 'express';
const router = Router();

import categoriesController from "../../controllers/categories.controller";

router.get('/categories', categoriesController.getAll);
router.post('/categories/create', categoriesController.create);
router.post('/categories/assignEvent', categoriesController.assignEvent);

export default router;