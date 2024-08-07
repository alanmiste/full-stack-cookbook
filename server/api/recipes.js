const express = require("express");
const router = express.Router();

// MIDDLEWARES
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const Mongoose = require("mongoose");

// MODELS
const Recipes = require("../models/recipesModel");

// ROUTES
router.get("/", async (req, res) => {
  console.log("Find route req.query", req.query);

  const data = await Recipes.find();
  res.send(data);
});

router.get("/find", async (req, res) => {
  const data = await Recipes.find(req.query);
  console.log("Data ...... ", data);
  res.send(data);
});

router.post("/add", async (req, res) => {
  console.log("add route: body is ", req.body);

  const newRecipe = new Recipes(req.body); // to create the body of the object that will be added to DB
  console.log("add route: body is ", newRecipe);

  const data = await newRecipe.save(); // to save the recipe in the DB

  res.send("hello from add route");
});

router.delete("/delete", async (req, res) => {
  console.log("delete: body is ", req.query);

  const deleteRecipe = await Recipes.findByIdAndDelete(req.query._id);

  console.log("Deleted Recipe is ", deleteRecipe);

  if (deleteRecipe) {
    res.send({ sucsess: true });
  } else {
    res.send({ sucsessfuls: "Error" });
  }
});

module.exports = router;
