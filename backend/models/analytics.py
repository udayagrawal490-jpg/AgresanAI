from sqlalchemy import Column, String, Float, DateTime
from sqlalchemy.dialects.postgresql import UUID, JSONB
import uuid
from datetime import datetime

from database import Base

class RiskMetrics(Base):
    __tablename__ = "risk_metrics"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    portfolio_id = Column(UUID(as_uuid=True), nullable=False, index=True)
    sharpe_ratio = Column(Float, default=0)
    beta = Column(Float, default=0)
    volatility = Column(Float, default=0)
    value_at_risk = Column(Float, default=0)
    max_drawdown = Column(Float, default=0)
    correlation_matrix = Column(JSONB, default={})
    calculated_at = Column(DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f"<RiskMetrics {self.portfolio_id}>"

class PortfolioAnalytics(Base):
    __tablename__ = "portfolio_analytics"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    portfolio_id = Column(UUID(as_uuid=True), nullable=False, index=True)
    total_return = Column(Float, default=0)
    annualized_return = Column(Float, default=0)
    allocation_data = Column(JSONB, default={})
    performance_data = Column(JSONB, default={})
    analyzed_at = Column(DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f"<PortfolioAnalytics {self.portfolio_id}>"