const router = require("express").Router();

// returns all game reviews
router.get("/", (req, res) => {
  res.send("returns all game reviews");
});

router.get("/:id", (req, res) => {
  res.send("returns one game reviewg");
});
