# SahtyTn Project Setup Guide

## Prerequisites

- Node.js (v18+ recommended)
- npm
- PowerShell (for Windows users)
- Docker & Docker Compose

## 1. Clone the Repository

```sh
git clone <https://github.com/iyedGrs/SahtyTn.git>
cd SahtyTn
```

## 2. Configure Environment Variables

- Copy `.env.example` to `.env` in `Back/`:
  ```sh
  cp Back/.env.example Back/.env
  ```
- Open `Back/.env` and fill in the required values:
  - `MONGO_URL`: Your MongoDB connection string
  - `JWT_SECRET`: A secure secret for JWT
  - `EMAIL_USER` & `EMAIL_PASS`: Email credentials for OTP
  - Service ports and URLs: Adjust if needed
  - External services: Add your Twilio and SendGrid credentials
  - `NODE_ENV`: Set to `development` or `production`

## 3. Install Backend Dependencies

### Option 1: Using PowerShell Script

From the `Back` folder, run:

```powershell
./dependencies.ps1
```

This will install dependencies for all backend services automatically.

### Option 2: Manual Installation

Go into each service folder under `Back/` and run:

```sh
npm install
```

## 4. Start Backend Services

- Go to `Back/api-gateway` and run:
  ```sh
  docker compose up -d
  ```
  This will start the NGINX API Gateway.
- Start each backend service (in separate terminals or using a process manager):
  ```sh
  npm run dev
  ```
  (Run this inside each service folder, e.g., `Back/user-service`, `Back/messaging-service`, etc.)
- Or you can start all of them by running the following command in the `Back` folder:
  ```sh
  npm run dev
  ```

## 5. Install Frontend Dependencies

Go to the `Front` folder:

```sh
cd Front
npm install
```

## 6. Start Frontend Service

From the `Front` folder, run:

```sh
npm run dev
```

## 7. Access the Application

- Frontend: Usually at `http://localhost:5173` (or as configured)
- API Gateway: At `http://localhost:8080`

## Notes

- Make sure all environment variables in `.env` are filled correctly for services to communicate.
- If you change ports or URLs, update them in `.env` and service configs.
- For production, use secure credentials and secrets.

---

For any issues, check each service's README or contact the maintainer.
