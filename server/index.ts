import express from 'express';
import cors from 'cors';
import emailRouter from './api/email.js';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/email', emailRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 