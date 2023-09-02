CREATE DATABASE gotongruang;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    nama VARCHAR(255),
    lokasi VARCHAR(255),
    notelp VARCHAR(255),
    instagram VARCHAR(255),
    total_point INT
);

CREATE TABLE programs (
    id SERIAL PRIMARY KEY,
    posted_by SERIAL,
    title VARCHAR(255),
    deskripsi TEXT,
    lokasi VARCHAR(255),
    tanggal_program_mulai DATE,
    target_partisipan INT,
    FOREIGN KEY (posted_by) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE participants (
    userID SERIAL,
    progID SERIAL,
    status BOOLEAN,
    PRIMARY KEY (userID, progID),
    FOREIGN KEY (userID) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (progID) REFERENCES programs(id) ON UPDATE CASCADE ON DELETE CASCADE
);