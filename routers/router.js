const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/auth", (req, res) => {
  if (!req.query.email) {
    res.status(400).send("No email specified");
    return;
  }

  const email = req.query.email;
  res.render("login", { email });
});

router.get("/auth/login", controller.login);
router.post("/auth/login", controller.loginPost);

router.get("/auth/login/2", controller.login2);
router.post("/auth/login/2", controller.loginPost2);

router.get("/auth/success", controller.success);

router.get("*", controller.page404Redirect);

module.exports = router;
