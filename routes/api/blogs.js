const router = require("express").Router();
const blogsController = require("../../controllers/blogsController");

router.route("/blogs")
    .get(blogsController.findAll)
    
router.route("/blogs/:id")
    .get(blogsController.findById)
    .delete(blogsController.remove)

module.exports = router;