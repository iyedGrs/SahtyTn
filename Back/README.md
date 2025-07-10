# SahtyTn Backend - Microservices Architecture

This is a microservices-based backend for the SahtyTn healthcare platform. Each service has its own `node_modules` and can be developed, deployed, and scaled independently.

## 🏗️ Architecture Overview

```
SahtyTn/Back/
├── api-gateway/                  # API Gateway (Port 5000)
├── user-service/                 # User Authentication (Port 5001)
├── messaging-service/            # Messaging & Contact (Port 5002)
├── appointment-service/          # Appointment Management (Port 5003)
├── consultation-service/         # Consultation Management (Port 5004)
├── dashboard-service/            # Dashboard & Analytics (Port 5005)
├── medical-records-service/      # Medical Records (Port 5006)
├── notifications-service/        # Notifications (Port 5007)
├── payment-service/              # Payment Processing (Port 5008)
├── prescriptions-service/        # Prescriptions (Port 5009)
└── common-libs/                  # Shared Types & Utilities
```

## 🚀 Services Status

| Service                 | Status      | Port | Features                          |
| ----------------------- | ----------- | ---- | --------------------------------- |
| API Gateway             | ✅ Ready    | 5000 | Request routing, Load balancing   |
| User Service            | ✅ Ready    | 5001 | Authentication, Registration, OTP |
| Messaging Service       | ✅ Ready    | 5002 | Contact forms, Messaging          |
| Appointment Service     | 🔧 Template | 5003 | Appointment scheduling            |
| Consultation Service    | 🔧 Template | 5004 | Video consultations               |
| Dashboard Service       | 🔧 Template | 5005 | Analytics, Reports                |
| Medical Records Service | 🔧 Template | 5006 | Patient records                   |
| Notifications Service   | 🔧 Template | 5007 | Push notifications, Alerts        |
| Payment Service         | 🔧 Template | 5008 | Payment processing                |
| Prescriptions Service   | 🔧 Template | 5009 | Prescription management           |

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+
- MongoDB
- Git

### 1. Clone and Setup Environment

```bash
cd SahtyTn/Back
cp .env.example .env
# Edit .env with your MongoDB URL and other config
```

### 2. Install Dependencies for Each Service

```bash
# API Gateway
cd api-gateway && npm install && cd ..

# User Service
cd user-service && npm install && cd ..

# Messaging Service
cd messaging-service && npm install && cd ..

# Other services (when ready)
cd appointment-service && npm install && cd ..
cd consultation-service && npm install && cd ..
cd dashboard-service && npm install && cd ..
cd medical-records-service && npm install && cd ..
cd notifications-service && npm install && cd ..
cd payment-service && npm install && cd ..
cd prescriptions-service && npm install && cd ..
```

### 3. Build Services

```bash
# Build all services
npm run build:all

# Or build individual services
cd user-service && npm run build
cd messaging-service && npm run build
```

### 4. Start Services

#### Development Mode (with hot reload)

```bash
# Start all services in development
npm run dev:all

# Or start individual services
cd user-service && npm run dev
cd messaging-service && npm run dev
cd api-gateway && npm run dev
```

#### Production Mode

```bash
# Start all services in production
npm run start:all

# Or start individual services
cd user-service && npm start
cd messaging-service && npm start
cd api-gateway && npm start
```

## 📁 Service Structure

Each service follows this structure:

```
service-name/
├── package.json              # Service dependencies
├── tsconfig.json             # TypeScript config
├── src/
│   ├── index.ts              # Main entry point
│   ├── routes/               # API routes
│   ├── models/               # Database models
│   ├── controllers/          # Business logic
│   ├── middlewares/          # Custom middleware
│   └── types/                # Service-specific types
├── dist/                     # Compiled JavaScript
└── node_modules/             # Service dependencies
```

## 🔧 Environment Variables

Each service uses these environment variables:

```env
# Database
MONGO_URL=mongodb://localhost:27017/sahtydb

# JWT
JWT_SECRET=your-secret-key

# Email (for OTP)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Service URLs
API_GATEWAY_PORT=5000
USER_SERVICE_PORT=5001
MESSAGING_SERVICE_PORT=5002
APPOINTMENT_SERVICE_PORT=5003
CONSULTATION_SERVICE_PORT=5004
DASHBOARD_SERVICE_PORT=5005
MEDICAL_RECORDS_SERVICE_PORT=5006
NOTIFICATIONS_SERVICE_PORT=5007
PAYMENT_SERVICE_PORT=5008
PRESCRIPTIONS_SERVICE_PORT=5009
```

## 🔄 API Routes

### Through API Gateway (Port 5000)

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/otp/send-otp` - Send OTP
- `POST /api/otp/verify-otp` - Verify OTP
- `POST /api/contact` - Contact form submission

### Health Checks

- `GET /health` - Available on all services

## 🧪 Testing

```bash
# Test API Gateway
curl http://localhost:5000/health

# Test User Service
curl http://localhost:5001/health

# Test Messaging Service
curl http://localhost:5002/health
```

## 📊 Type System

The project uses a structured type system:

- **Common Types** (`/common-libs/types/`): Shared across all services
- **Service Types** (`/service-name/src/types/`): Service-specific types
- **Backward Compatibility** (`/types/`): Legacy support

## 🚀 Deployment

Each service can be deployed independently:

```bash
# Build for production
npm run build

# Start in production mode
npm start

# Or use PM2 for process management
pm2 start dist/index.js --name "user-service"
```

## 📝 Development Guidelines

1. **Independent Development**: Each service can be developed independently
2. **Type Safety**: Use TypeScript for all services
3. **Error Handling**: Implement proper error handling in all routes
4. **Health Checks**: All services must have `/health` endpoint
5. **Environment Variables**: Use dotenv for configuration
6. **Database**: Each service connects to the same MongoDB instance

## 🔜 Next Steps

1. **Implement Missing Services**: Complete the template services with actual business logic
2. **Add Authentication**: Implement JWT authentication middleware
3. **Add Validation**: Input validation for all endpoints
4. **Add Logging**: Centralized logging system
5. **Add Monitoring**: Health checks and metrics
6. **Add Tests**: Unit and integration tests
7. **Add Documentation**: API documentation with Swagger

## 🤝 Contributing

1. Each service should have its own feature branch
2. Follow the existing code structure
3. Add proper TypeScript types
4. Include error handling
5. Add health check endpoints
6. Update this README when adding new services

## 📞 Support

For issues or questions, please create an issue in the repository.
