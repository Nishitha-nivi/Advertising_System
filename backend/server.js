import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import adRoutes from './backend/routes/adRoutes.js';
import authRoutes from './backend/routes/authRoutes.js';
import connectDB from './db.js'; 

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ads', adRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
