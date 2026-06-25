# AgresanAI Architecture

## System Overview

AgresanAI is a full-stack investment intelligence platform with:
- **Backend**: FastAPI + PostgreSQL + Redis
- **Frontend**: React.js + TypeScript + TailwindCSS
- **AI/ML**: OpenAI GPT-4 + Scikit-learn
- **Real-time Data**: BSE India API Integration
- **Task Queue**: Celery for background jobs

## Core Modules

### 1. Authentication & Authorization
- JWT-based authentication
- Password hashing with bcrypt
- User registration and login

### 2. Portfolio Management
- CRUD operations for portfolios
- Holdings tracking
- Performance monitoring

### 3. Risk Analytics
- Sharpe Ratio, Beta, Volatility calculations
- Value at Risk (VaR) modeling
- Max Drawdown analysis
- Correlation matrix computation

### 4. Real-time Data Pipeline
- Live stock price fetching from BSE
- Periodic data updates via Celery
- WebSocket support for real-time updates

### 5. AI Research Engine
- Stock analysis with OpenAI GPT-4
- Sentiment analysis on news
- Automated investment recommendations
- Research report generation

### 6. Scenario Testing
- Monte Carlo simulations
- Stress testing
- What-if analysis
- Portfolio optimization

## Project Structure

```
AgresanAI/
├── backend/
│   ├── main.py                 # FastAPI application
│   ├── config.py               # Configuration
│   ├── database.py             # Database setup
│   ├── tasks.py                # Celery tasks
│   ├── models/                 # SQLAlchemy models
│   ├── routes/                 # API endpoints
│   ├── services/               # Business logic
│   ├── schemas/                # Pydantic schemas
│   ├── requirements.txt         # Python dependencies
│   └── Dockerfile              # Backend Docker image
├── frontend/
│   ├── src/
│   │   ├── App.tsx             # Main React component
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Tailwind CSS
│   ├── index.html              # HTML template
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.ts          # Vite configuration
│   ├── Dockerfile              # Frontend Docker image
│   └── tsconfig.json           # TypeScript config
├── database/
│   ├── init.sql                # Database initialization
│   └── migrations/             # Schema migrations
├── docker-compose.yml          # Docker Compose setup
├── .env.example                # Environment template
├── .gitignore                  # Git ignore
└── README.md                   # Documentation

## API Endpoints

### Authentication
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/refresh

### Portfolio
- GET /api/portfolios
- POST /api/portfolios
- GET /api/portfolios/{id}
- PUT /api/portfolios/{id}
- DELETE /api/portfolios/{id}

### Stocks
- GET /api/stocks/{symbol}
- GET /api/stocks/{symbol}/live
- GET /api/stocks/{symbol}/history
- GET /api/stocks/{symbol}/fundamentals

### Analytics
- GET /api/analytics/risk/{portfolio_id}
- GET /api/analytics/performance/{portfolio_id}
- POST /api/analytics/scenario-test/{portfolio_id}
- GET /api/analytics/correlation/{portfolio_id}

### Research
- POST /api/research/analyze
- GET /api/research/recommendations
- POST /api/research/sentiment/{symbol}
- GET /api/research/research/{symbol}

## Getting Started

1. Clone repository
2. Copy .env.example to .env
3. Run `docker-compose up -d`
4. Access http://localhost:3000

## Database Schema

Users → Portfolios → Portfolio Holdings → Stocks → Stock Prices
              ↓
        Risk Metrics & Analytics

## Technologies Used

- **Backend**: FastAPI, SQLAlchemy, Celery
- **Frontend**: React, TypeScript, Tailwind CSS, Recharts
- **Database**: PostgreSQL, Redis
- **AI**: OpenAI GPT-4
- **Data**: BSE India API, Yahoo Finance
- **DevOps**: Docker, Docker Compose