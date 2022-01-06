import express from 'express';
import { getPosts, createPost } from '../controllers/postControllers.js'

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost);
// router.get('/', getPosts);
// router.get('/', getPosts);

export default router;