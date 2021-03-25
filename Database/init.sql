BEGIN;
DROP TABLE IF EXISTS users,users_traits,posts,comments;
Create table users(
  id serial primary key,
  username varchar(255) not null,
  pass varchar(255) not null,
  email varchar(255) not null,
  gender varchar (10) ,
  age INTEGER,
  currentloc varchar (255) ,
  moveto varchar(255),
  university varchar (255),
  price INTEGER,
  roommatesnum INTEGER,
  studying varchar(255),
  pic varchar(255) 
  
);
 
 create table users_traits(
  id SERIAL PRIMARY KEY ,
  trait varchar(255) ,
  user_id INTEGER REFERENCES users(id)
 
 );
 

create table posts(
 id SERIAL PRIMARY KEY ,
    post  TEXT,
    user_id INTEGER REFERENCES users(id)
);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id)
);

    
-- create table chat(


-- )


INSERT INTO users (username, pass, email, gender,age,currentloc,moveto,university,price,roommatesnum,studying,pic) VALUES
  ('Haneen', '123123', 'haneen@gmail.com', 'female', 24 , 'Nazareth' , 'Tel-aviv', 'Tel-aviv', 1600 , 1,'Biomedical-engineering','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg');

INSERT INTO posts (post , user_id) VALUES ('Hello , My name is Haneen',1);
-- INSERT INTO comments (comment , user_id , post_id) VALUES ('Hello',1,1);
INSERT INTO users_traits (trait , user_id) VALUES ('happy',1);


COMMIT;

