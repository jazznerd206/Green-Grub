const router = require("express").Router();
const articlesRoutes = require("./articles");
const blogsRoutes = require("./blogs");
const recipesRoutes = require("./recipes");
const usersRoutes = require("./users");

// Book routes
router.use("/articles", articlesRoutes);
router.use("/blogs", blogsRoutes);
router.use("/recipes", recipesRoutes);
router.use("/users", usersRoutes);


module.exports = router;