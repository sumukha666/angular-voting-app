# angular-voting-app
Online Voting System is an application where users will be able to vote on posts (on multiple topics) created by the admin. The admin will not only be able to create posts on different topics but also view all the responses provided by different users.

Steps to Run the application:
  1)navigate to node-JS service and open nodemon.json
  2) enter MYSQL DB user name and password
  3) navigate to ./src/db/dbSetup.js here update DB User name and password
  4) run the command "npm run create:admin" it will create admin with username: admin@pca.com and password:Qwerty@123
  5) Kill the process and run the command "npm run dev", this will start the node js server.
  6) now navigate angular-service folder and execute the command "npm run start".
  7) open "http://localhost/login" to start using the application
