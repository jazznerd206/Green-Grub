const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/articles")
    .get(articlesController.findAll)
    
router.route("/articles/:id")
    .get(articlesController.findById)
    .delete(articlesController.remove)
    .post(articlesController.saveArticle)

module.exports = router;