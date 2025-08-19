# Safari Music API Server

A high-performance music streaming API server built with Express.js and TypeScript, featuring vector-based search, caching, and comprehensive music metadata management.

## Features

- **Vector Search**: Semantic search using Qdrant and Google's text-embedding-004
- **Redis Caching**: Intelligent caching middleware for optimal performance
- **Database**: MongoDB with Prisma ORM for robust data management
- **Real-time**: Support for trending songs, personalized recommendations
- **Scalable**: Pagination support with cursor-based navigation

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MongoDB with Prisma ORM
- **Cache**: Redis
- **Search**: Qdrant Vector Database
- **AI**: Google Generative AI (Gemini)

## Quick Start

### Prerequisites

- Node.js 18+
- MongoDB
- Redis
- Qdrant instance

### Installation

```bash
# Clone and install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Build the project
npm run build

# Start the server
npm start
```

### Development

```bash
# Development mode with auto-rebuild
npm run dev
```

## Environment Variables

```env
DATABASE_URL=mongodb://localhost:27017/safari
REDIS_URL=localhost
REDIS_PASSWORD=your_redis_password
QDRANT_URL=http://localhost:6333
QDRANT_SECRET=your_qdrant_api_key
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
```

## Project Structure

```
src/
├── controllers/     # Request handlers
├── routes/          # API route definitions
├── middlewares/     # Custom middleware
└── lib/             # Utilities and configurations
```

## Scripts

- `npm run build` - Build TypeScript to JavaScript
- `npm run dev` - Development mode with hot reload
- `npm start` - Start production server
