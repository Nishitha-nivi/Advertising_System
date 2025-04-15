import Ad from '../models/Ad.js';

export const recommendAds = async (preferences) => {
  return await Ad.find({ categories: { $in: preferences } }).limit(5);
};
