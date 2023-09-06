const router = require("express").Router();

// returns all game reviews
router.get("/", (req, res) => {
  console.log("get all games")
 res.json({ message: "return all game reviews" });
});

//return a single game review by id
router.get("/:id", (req, res) => {
  console.log("return game");
  res.json({ message: "return one game review" });
});

//update single game review by id
router.put("/:id", (req, res) => {
  console.log("update game");
  res.json({ message: "update one game review" });
});

//delete single game review by id
router.delete("/:id", (req, res) => {
  console.log("delete game review");
  res.json({ message: "delete one game review" });
});

//add one single game review by id
router.post("/", (req, res) => {
  console.log("add one game review");
  res.json({ message: "post one game review" });
});

module.exports = router;