# ERROR 1006 (HY000) Can't create database (errno: 13) MySQL 5.6.12

first, check the MySQL Server Status, find the MySQL Data Directory, mine is /usr/local/mysql

in MAC terminal,

change to mysql dir, probably /usr/local/mysql and then type cd .. to go up one directory.

chown -R mysql:mysql ./mysql/

after that, it will be able to create schema/database

[2019/01/08] thanks for https://stackoverflow.com/users/1046738/jfly

