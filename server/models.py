from sqlalchemy import Column, Integer, Boolean, String
from .database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(String(20), primary_key=True, index=True)
    email = Column(String(100), unique=True, index=True)
    password = Column(String(100))
    is_active = Column(Boolean, default=True)
    pass

class Favorites(Base):
    __tablename__ = 'favorites'

    id = Column(Integer, primary_key=True, auto_increment=True)
    name = Column(String, index=True)