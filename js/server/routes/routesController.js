import express from 'express';
import index from './index';
import users from './users';
const router = express.Router();

router.get('/', index);
router.get('/users', users);

export default router;
