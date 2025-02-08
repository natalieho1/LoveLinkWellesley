from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    user_id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    q1 = Column(Integer)  # Repeat for q2 to q15
    q2 = Column(Integer)
    q3 = Column(Integer)
    q4 = Column(Integer)
    q5 = Column(Integer)
    q6 = Column(Integer)
    q7 = Column(Integer)
    q8 = Column(Integer)
  
   