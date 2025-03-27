import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors());app.use(cors({ origin: 'http://localhost:5000', credentials: true }));


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get("/", (req, res) => {
  res.json({ message: "Hello world from backend" });
});

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// MONGO_URI=mongodb+srv://aayushisharma1:Navgurukul123@cluster0.jfztl.mongodb.net/java
// JWT_SECRET=qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm
// PORT = 5000 