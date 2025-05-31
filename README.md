# AI Workshop Landing Page

A modern landing page for AI workshop registration with email notifications.

## Features

- React-based landing page with Vite
- Server-side email notifications using **SendGrid API**
- TypeScript support for both client and server
- Environment-based configuration
- Docker support for easy deployment

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- **SendGrid account and API key** (for email notifications)
- Docker (optional, for containerized deployment)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/jsong1004/ai-workshop.git
cd ai-workshop-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```env
SENDGRID_API_KEY=your-sendgrid-api-key
GMAIL_USER=your.verified.sender@email.com
PORT=3001
VITE_API_URL=http://localhost:3001
```

    - `SENDGRID_API_KEY`: Your SendGrid API key (get it from your SendGrid dashboard).
    - `GMAIL_USER`: The email address you want to send from (must be a verified sender in SendGrid).
    - `PORT`: The port your backend will run on.
    - `VITE_API_URL`: The URL your frontend will use to call the backend.

## Email Delivery

- **SendGrid** is used for sending emails. You must have a [SendGrid account](https://sendgrid.com/) and a verified sender email.
- The backend uses the `@sendgrid/mail` package to send both admin notification and user confirmation emails.

## Development

Run the development server and API server concurrently:
```bash
npm run dev:all
```

Or run them separately:
```bash
# Frontend development server
npm run dev

# Backend API server
npm run server
```

## Building for Production

```bash
npm run build
```

## Docker Deployment

1. Build the Docker image:
```bash
docker build -t ai-workshop-landing .
```

2. Run the container:
```bash
docker run -p 3001:3001 \
  -e SENDGRID_API_KEY=your-sendgrid-api-key \
  -e GMAIL_USER=your.verified.sender@email.com \
  -e PORT=3001 \
  -e VITE_API_URL=http://localhost:3001 \
  ai-workshop-landing
```

Or using Docker Compose (create a `docker-compose.yml` file):
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3001:3001"
    environment:
      - SENDGRID_API_KEY=your-sendgrid-api-key
      - GMAIL_USER=your.verified.sender@email.com
      - PORT=3001
      - VITE_API_URL=http://localhost:3001
    restart: unless-stopped 
```

Then run:
```bash
docker-compose up
```

## Project Structure

```
ai-workshop-landing-page/
├── src/                    # Frontend source code
├── server/                 # Backend server code
│   ├── index.ts           # Server entry point
│   ├── emailService.ts    # Email service implementation (uses SendGrid)
│   └── tsconfig.json      # Server TypeScript configuration
├── public/                # Static assets
├── .env.local            # Environment variables (create this)
├── package.json          # Project dependencies and scripts
├── Dockerfile            # Docker configuration
├── .dockerignore         # Docker ignore file
└── README.md            # Project documentation
```

## Technologies Used

- React
- TypeScript
- Vite
- Express
- **SendGrid API**
- Docker

## License

MIT
