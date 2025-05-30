import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import emailRouter from './api/email.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '8080', 10);

console.log('Starting server with configuration:', {
  port,
  nodeEnv: process.env.NODE_ENV,
  distPath: path.join(__dirname, '../dist')
});

// Robust manual CORS middleware
const allowedOrigins = [
  'https://workshop.ai-biz.app',
  'https://ai-workshop-landing-myresume-457817.a.run.app',
  'http://localhost:3000'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (typeof origin === 'string' && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,Origin,Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

app.use(express.json());

// Serve static files from the dist directory
const distPath = path.join(__dirname, '../dist');
console.log('Serving static files from:', distPath);
app.use(express.static(distPath));

// API Routes
app.use('/api/email', emailRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../dist/index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath);
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});

// Handle server errors
server.on('error', (error: Error) => {
  console.error('Server error:', error);
  process.exit(1);
}); 