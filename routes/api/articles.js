const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.saveArticle)

router.route("/myarticles")
    .get(articlesController.getMyArticles);

router.route("/:id")
    .get(articlesController.findById)
    .delete(articlesController.remove)
    .post(articlesController.saveArticle)

module.exports = router;