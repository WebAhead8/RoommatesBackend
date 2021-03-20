BEGIN;
DROP TABLE IF EXISTS users;
Create table users(
  id serial primary key,
  username varchar(255) not null,
  pass varchar(16),
  email varchar(255),
  gender varchar (10),
  age INTEGER,
  currentloc varchar (255) ,
  moveto varchar(255),
  university varchar (255),
  price INTEGER,
  roommatesnum INTEGER,
  studying varchar(255),
  -- pic image 
)


-- Create table traits(
-- id serial primary key not null,
-- -- traits varchar(255),




-- )

create table posts(
 id SERIAL PRIMARY KEY ,
    comment TEXT,
    user_id INTEGER REFERENCES users(id),
);
    
-- ceate table chat(


-- )



)

