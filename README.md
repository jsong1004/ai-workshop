# AI Workshop Landing Page

A modern landing page for AI workshop registration with email notifications.

## Features

- React-based landing page with Vite
- Server-side email notifications using Nodemailer
- Gmail SMTP integration for reliable email delivery
- TypeScript support for both client and server
- Environment-based configuration

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gmail account (for email notifications)

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
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PORT=3001
VITE_API_URL=http://localhost:3001
```

### Setting up Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App Passwords
5. Select "Mail" and "Other (Custom name)"
6. Name it something like "AI Workshop App"
7. Copy the 16-character password that Google generates
8. Use this password as your `GMAIL_APP_PASSWORD` in `.env.local`

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

## Project Structure

```
ai-workshop-landing-page/
├── src/                    # Frontend source code
├── server/                 # Backend server code
│   ├── index.ts           # Server entry point
│   ├── emailService.ts    # Email service implementation
│   └── tsconfig.json      # Server TypeScript configuration
├── public/                # Static assets
├── .env.local            # Environment variables (create this)
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

## Technologies Used

- React
- TypeScript
- Vite
- Express
- Nodemailer
- Gmail SMTP

## License

MIT
