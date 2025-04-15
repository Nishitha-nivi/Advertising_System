import mongoose from 'mongoose';

const adSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  categories: [String],
  link: String,
});

export default mongoose.model('Ad', adSchema);
