create database if not exists realEstate;
use realEstate;
create table if not exists admin
(
    username varchar(100),
    password varchar(100)
);


create table if not exists user
(
    username varchar(100),
    password varchar(100)
)

