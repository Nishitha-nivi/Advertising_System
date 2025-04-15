import express from 'express';
import { recommendAds } from '../AI/recommendation.js';
import Ad from '../models/Ad.js';

const router = express.Router();

router.post('/recommend', async (req, res) => {
  const { preferences } = req.body;
  const ads = await recommendAds(preferences);
  res.json(ads);
});

export default router;
