const { Router } = require("express");//we need the express router to plug into applications
const Controller = require("../controller/controller"); //exports our controller to get our functions
const router  = Router(); ///creates a new router

router.get("/load", Controller.home_get);
router.post("/create", Controller.home_post);
router.get("/:id", Controller.person_get);
router.delete("/:id", Controller.person_delete);
router.post("/:id", Controller.person_update);


module.exports = router;