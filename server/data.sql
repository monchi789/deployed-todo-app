CREATE DATABASE todoapp;

CREATE TABLE todos(
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(255),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

-- Insert Values
INSERT INTO todos(id, user_email, title, progress, date) VALUES('0', 'cristian@test.com', 'First todo', 10, ';Thu Dec 29 2022 13:25:45 GTM+0400 (Gulf Standard Time)');