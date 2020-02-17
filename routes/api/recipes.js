const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

router.route("/:recipeName").get(recipesController.findAll);


router.route("/recipesDone").get(recipesController.findRecipesDone);

router.route("/recipesTodo").get(recipesController.findRecipesTodo);

router.route("/markRecipeDone").put(recipesController.markRecipeDone);

router.route("/markRecipeTodo").put(recipesController.markRecipeTodo);

module.exports = router;
