from typing import List, Dict
from fastapi import FastAPI
from fastalchemy import SQLAlchemyMiddleware, db
from . import database
from . import models
from . import schemas

app = FastAPI()
app.add_middleware(SQLAlchemyMiddleware, db_module=database, models_module=models)

from .models import User
import json

@app.post('/users', response_model=schemas.User)
def create_user(user: schemas.UserCreate):
    user = User(id=user.id, email=user.email)
    db.add(user)
    return user

@app.get('/users')
def get_users():
    '''Return users.'''
    users = db.query(User).order_by(User.id).all()
    return users

@app.get('/colors')
def get_colors():
  with open('./data/colors.json') as fp:
    data: List[Dict] = json.load(fp)
    return data

@app.get('/colors/groups')
def get_color_groups():
  with open('./data/colors.json') as fp:
    data: List[Dict] = json.load(fp)
    groups = {it['group'] for it in data}
    return groups
