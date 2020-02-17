const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");


router.route("/").get(recipesController.findRecipeRandom);

module.exports=router;