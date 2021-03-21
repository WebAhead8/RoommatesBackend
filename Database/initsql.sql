BEGIN;
DROP TABLE IF EXISTS users,posts;
Create table users(
  id serial primary key,
  username varchar(255) not null,
  pass varchar(16) not null,
  email varchar(255) not null,
  gender varchar (10) check ,
  age INTEGER,
  currentloc varchar (255) ,
  moveto varchar(255),
  university varchar (255),
  price INTEGER,
  roommatesnum INTEGER,
  studying varchar(255),
  pic varchar(255) 
  
)
 
 create table users_traits(
  id SERIAL PRIMARY KEY ,
  trait varchar(255) ,
  user_id INTEGER REFERENCES users(id)
 
 )




create table posts(
 id SERIAL PRIMARY KEY ,
    comment  varchar(255),
    user_id INTEGER REFERENCES users(id),
);
    
-- create table chat(


-- )



)

