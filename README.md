
Files description 
Node app:
questionsScript : This is the node script to scrape the data from stack-over-flow
app.js : This file is the index file of the node app
questionDataModel : This file is the modal
databaseConnection : This is used to connect the database

# Instructions

Database
* Install mongodb compass locally
* Start the mongodb connection

Node js
* Do npm install
* Start the server with the command "node app.js", Server will start.
* You can find database successfully connected in the console.
* Then open postman or any other api testing tool
* Hit the above api (Post method)
  API :  http://localhost:3500/api/questions
  1) This api will scrape data from stackover-flow and insert into your mongodb database
* Hit the same api (Get method)
  API : http://localhost:3500/api/questions
  1) This method will get all inserted data in the local mongodb database

React app
* Take a clone from repository called "stackoverflow-questions"
* Do npm install
* start the react server with the command "npm start"
* You can see the chart with the data 
      
