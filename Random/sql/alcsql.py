from ast import In
from sqlalchemy import create_engine, MetaData,Table,Column,String,Integer

engine = create_engine("mysql+pymysql://chirag:Chirag$123@localhost/college.db",echo=True)

# meta = MetaData()

# #Creating the students table
# Students = Table(
#     'students', meta,
#     Column('id',Integer,primary_key=True),
#     Column('name',String(20)),
#     Column('last_name',String(20))
# )

# meta.create_all(engine)
