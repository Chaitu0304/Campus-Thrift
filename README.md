# Campus Thrift

Buy Smarter. Sell Faster. The premier marketplace for students.

## Architecture

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: Socket.io (for chat)

## Local Development Setup

### Prerequisites

- Node.js (v18+)
- MongoDB (Local instance or MongoDB Atlas URI)

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.sample` to `.env` and fill in your variables:
   ```bash
   cp .env.sample .env
   ```
4. Start the backend server (Development):
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file and configure API URLs (if different from default):
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel.
2. Select the `frontend` folder as the Root Directory.
3. Vercel will automatically detect Vite. Set the Build Command to `npm run build` and Output Directory to `dist`.
4. Add any Environment Variables required.
5. Deploy.

### Backend (Render / Railway)

1. Connect your GitHub repository to Render/Railway.
2. Select the `backend` folder as the Root Directory.
3. Build command: `npm install && npm install typescript -g && tsc`
4. Start command: `node dist/index.js`
5. Ensure you add all environment variables (`MONGO_URI`, `JWT_SECRET`, etc.).
6. Deploy.

### Database (MongoDB Atlas)

1. Create a cluster on MongoDB Atlas.
2. Whitelist `0.0.0.0/0` in Network Access so the deployed backend can connect.
3. Copy the Connection String and set it as `MONGO_URI` in the backend environment variables.
