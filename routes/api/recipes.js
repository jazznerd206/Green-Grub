const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

router.route("/:recipeName")
    .get(recipesController.findAll);

router.route("/")
    .post(recipesController.saveRecipe)

router.route("/myrecipes")
    .get(recipesController.getMyRecipes);

router.route("/:id")
    .get(recipesController.findById)
    .delete(recipesController.remove)
    .post(recipesController.saveRecipe)

module.exports = router;
