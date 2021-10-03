import { Router } from "express";
import {Auth, } from '../middlewares/auth';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/list', Auth.private, ApiController.list);
router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

export default router;