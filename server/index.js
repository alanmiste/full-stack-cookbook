const http = require("http");
require("dotenv").config();

// import a model
const recipeM = require("./models/recipesModel");

const requestListener = async function (req, res) {
  const items = await recipeM.find(); //to fetch all items in the DB, and this is one of MongoDB orders
  //.limit(2)

  console.log("items are: ", items);
  // console.log('Request is:',req)
  res.writeHead(200);
  //res.end('Hello world!')
  res.end(JSON.stringify(items));
};

const server = http.createServer(requestListener);

server.listen(process.env.PORT, () => console.log("Server is running..."));

const connectDB = require("./config/db"); //to import db
connectDB(); //to connect to mongoDB
