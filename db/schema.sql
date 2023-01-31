-- // Used to gather images from https://dog.ceo/dog-api --

DROP DATABASE IF EXISTS dog_db;


CREATE DATABASE dog_db;


USE dog_db;


CREATE TABLE dogs (    
    id INT NOT NULL,
    commonName VARCHAR(30) NOT NULL,
    APIname VARCHAR(30) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(6) NOT NULL,
    breed VARCHAR(30) NOT NULL,
    size VARCHAR(7) NOT NULL,
       -- //small, med, large (by weight), --
-- Small dog: 22lbs or less. Medium dog: 23lbs-55lbs. Large dog: 56lbs and over. --
);


CREATE TABLE goodWith (
    id INT NOT NULL,
    good with,
    --    //other dogs, cats, kids --
);


CREATE TABLE dogPics (
    APIname VARCHAR(30) NOT NULL,
    commonName VARCHAR(30) NOT NULL,
    dogPic VARCHAR(100) NOT NULL
);


SELECT commonName
FROM dogPics 
INNER JOIN dogs ON join_condition;

SELECT commonName
FROM dogPics
INNER JOIN goodWith ON join_condition;