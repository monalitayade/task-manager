import express from 'express';
import { createProject } from '../controllers/projectController.js';
import { middleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create-project',middleware, createProject);

export default router;