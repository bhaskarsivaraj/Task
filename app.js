import express from 'express';
import databaseConnection from './databaseConnection.js';
import Questions from './questionDataModel.js';
import scrapeStackOverflow from './questionsScript.js';
import cors from "cors"



const app = express();

let PORT = process.env.PORT || 3500;

databaseConnection();

app.use(cors());

app.get("/api/questions", async (request, response) => {

  try {

    let allQuestions = await Questions.find();
    console.log(allQuestions, "sdfsdf")

    response.status(200).send(allQuestions);

  } catch (error) {

    console.error(error);

    response.status(500).json({
      message: "Unable to fetch data",
      error: error
    })

  }

})

app.post("/api/questions", async (request, response) => {

  try {
    let questions = await scrapeStackOverflow();

    const insertedData = Questions.insertMany(questions);

    response.status(200).json({
      message: "Successfully Inserted Questions",
      data: insertedData
    });
  } catch (error) {
    response.status(500).json({
      message: "Data not inserted"
    })
    console.error("Error while inserting", + error);
  }
})


app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})