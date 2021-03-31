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
    ('Mohamed', '123123', 'mohamed@gmail.com', 'male', 43 , 'Jerusalem District' , 'HaSharon District', 'Ben-Gurion University', 2500 , 1,'Systems science','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Saadon', '123123', 'Saadon@gmail.com', 'male', 22 , 'HaSharon District' , 'Haifa District', 'Open University of Israel', 3000 , 1,'Law','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Shimaa', '123123', 'Shimaa@gmail.com', 'female', 17, 'HaSharon District' , 'Haifa District', 'Weizmann Institute of Science', 3200 , 1,'Natural sciences','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Jihad', '123123', 'Jihad@gmail.com', 'male', 31, 'Eilat District' , 'Haifa District', 'Weizmann Institute of Science', 4000 , 1,'Social Work','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Mario', '123123', 'Jihad@gmail.com', 'male', 22, 'Haifa District' , 'Eilat District', 'Weizmann Institute of Science', 4000 , 1,'Social Work','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('May123', '123123', 'May123@gmail.com', 'female', 22, 'Eilat District' , 'Eilat District', 'Tel Aviv University', 4000 , 1,'Mathematics','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('hello', '123123', 'hello@gmail.com', 'female', 33, 'Eilat District' , 'Eilat District', 'Bar-Ilan University', 4000 , 1,'Mathematics','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('belo', '123123', 'belo@gmail.com', 'female', 35, 'Ramat-HaGolan District' , 'Eilat District', 'Bar-Ilan University', 4000 ,0,'Mathematics','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('lala', '123123', 'lala@gmail.com', 'male', 22, 'Ramat-HaGolan District' , 'Eilat District', 'Ben-Gurion University', 4000 ,0,'Mathematics','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('men e7na', '123123', 'e7na@gmail.com', 'male', 44, 'Eilat District' , 'HaSharon District', 'Open University of Israel', 1000 ,0,'Social Work','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('e7na men', '123123', 'e7menna@gmail.com', 'female', 27, 'Hadera District' , 'Jerusalem District', 'University of Haifa', 1500 ,0,'Business','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('hlaaaa', '123123', 'hlaaaa@gmail.com', 'female', 30, 'Tel Aviv District' , 'Jerusalem District', 'Weizmann Institute of Science', 1000 ,1,'Business','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('kefko', '123123', 'kefko@gmail.com', 'female', 18, 'Tel Aviv District' , 'Jerusalem District', 'Tel Aviv University', 1200 ,1,'Business','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('jmaaa', '123123', 'jmaaa@gmail.com', 'female', 22, 'Tel Aviv District' , 'Jerusalem District', 'Tel Aviv University', 1500 ,1,'Business','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Jmeleh', '123123', 'Jmeleh@gmail.com', 'female', 33, 'Haifa District' , 'Jerusalem District', 'Tel Aviv University', 2000 ,1,'Law','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('7feza', '123123', '7feza@gmail.com', 'female', 25, 'Haifa District' , 'Tel Aviv District', 'Tel Aviv University', 2000 ,1,'Law','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Rasmyieh', '123123', 'Rasmyieh@gmail.com', 'female', 28, 'Hadera District' , 'Tel Aviv District', 'Tel Aviv University', 1800 ,0,'Law','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Mahmod', '123123', 'Mahmod@gmail.com', 'male', 28, 'Hadera District' , 'Tel Aviv District', 'Tel Aviv University', 1800 ,0,'Law','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Mhameed', '123123', 'Mhameed@gmail.com', 'male', 30, 'Haifa District' , 'Tel Aviv District', 'Tel Aviv University', 2500 ,0,'Social Work','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Marzoq', '123123', 'Marzoq@gmail.com', 'male', 45, 'Hadera District' , 'Beer-Sheva District', 'Tel Aviv University', 2500 ,0,'Systems science','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Fareed', '123123', 'Fareed@gmail.com', 'male', 44, 'Haifa District' , 'Beer-Sheva District', 'Tel Aviv University', 2500 ,1,'Mathematics','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('men ento', '123123', 'ento@gmail.com', 'female', 44, 'Beer-Sheva District' , 'Haifa District', 'Weizmann Institute of Science', 1000 ,0,'Medicine','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('ana', '123123', 'ana@gmail.com', 'female', 18, 'Beer-Sheva District' , 'Tel Aviv District', 'Tel Aviv University', 1200 ,1,'Natural sciences','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'),
    ('Nseet esme', '123123', 'esme@gmail.com', 'female', 30, 'Beer-Sheva District' , 'Tel Aviv District', 'Tel Aviv University', 3000 ,1,'Art','https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg');

























INSERT INTO users_traits (trait,user_id) VALUES (ARRAY['quit','smoke'],1),(ARRAY['quit'],2),
(ARRAY['quit'],3),(ARRAY['quit','smoke'],4),(ARRAY['quit','smoke'],5),(ARRAY['quit','smoke','cooks'],6),(ARRAY['cooks'],7),
(ARRAY['cooks'],8),(ARRAY['quit'],9),(ARRAY['Studying loudly'],10),(ARRAY['Studying loudly'],11),(ARRAY['quit','Studying loudly'],12),
(ARRAY['quit','Studying loudly'],13),(ARRAY['quit','Studying loudly','smoke'],14),(ARRAY['quit','Studying loudly','smoke'],15),
(ARRAY['quit','Studying loudly','smoke'],16),(ARRAY['quit','Studying loudly','smoke','Social person'],14),
(ARRAY['quit','Studying loudly','smoke','Social person'],15),(ARRAY['quit','Studying loudly','smoke','Social person'],16),
(ARRAY['Organized'],17),(ARRAY['Organized'],18),(ARRAY['Organized'],19),(ARRAY['quit','Organized'],20),
(ARRAY['quit','Organized'],21),(ARRAY['quit','Organized'],22),(ARRAY['quit','Studying loudly','Organized'],23),
(ARRAY['quit','Studying loudly','Organized'],24),(ARRAY['quit','Studying loudly','Organized'],25),(ARRAY['quit','Studying loudly','Organized'],26) ,
(ARRAY['quit','Studying loudly','Organized','Staying up late'],27) ,(ARRAY['quit','Studying loudly','Organized','smoke'],28),
(ARRAY['Have pets'],29) ,(ARRAY['Cooks'],30);

INSERT INTO posts (post , user_id) VALUES ('Hello , My name is Haneen',1);
-- INSERT INTO comments (comment , user_id , post_id) VALUES ('Hello',1,1);
 


COMMIT;

