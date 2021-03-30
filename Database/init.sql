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
  trait TEXT[] ,
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
  ('Haneen', '123123', 'haneen@gmail.com', 'female', 24 , 'Haifa District' , 'Tel Aviv District', 'Tel Aviv University', 1600 , 1,'Mathematics','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Khaled', '232323', 'khaled@gmail.com', 'male', 29 , 'Haifa District' , 'Tel Aviv District', 'Tel Aviv University', 2000 , 0,'Systems science','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
      ('May', '123123', 'may@gmail.com', 'female', 20, 'Tel Aviv District' , 'Haifa District', 'University of Haifa', 3000 , 1,' Law','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Sobhi', '123123', 'sobhi@gmail.com', 'male', 35 , 'HaSharon District' , 'Tel Aviv District', 'Bar-Ilan University', 2000 , 0,'Systems science','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
     ('Snaa', '123123', 'snaa@gmail.com', 'female', 40 , 'Haifa District' , 'Jerusalem District', 'Tel Aviv University', 1000, 1,'Mathematics','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Saeed', '123123', 'saeed@gmail.com', 'male', 35 , 'Hadera District' , 'Beer-Sheva District', 'Open University of Israel', 2000 , 0,'Systems science','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
      ('Hanaa', '123123', 'hanaa@gmail.com', 'female', 18, 'Tel Aviv District' , 'Haifa District', 'University of Haifa', 4000 , 1,' Natural sciences','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Mohamed', '123123', 'mohamed@gmail.com', 'male', 43 , 'Jerusalem District' , 'HaSharon District', 'Ben-Gurion University', 2500 , 1,'Systems science','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg');



INSERT INTO users_traits (trait,user_id) VALUES (ARRAY['quit','smoke'],1);




COMMIT;

