const db = require("../model/index.js");

const router = require("express").Router();

// returns all game reviews
router.get("/", async (req, res) => {
  console.log("get all games");
  db.select("*")
    .from("gameReviews")
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ Error: "error occurred" });
    });
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
  const { gameName, gameUrl, gameRating, gameId } = req.body;
  db("gameReviews")
    .insert({
      name: gameName,
      url: gameUrl,
      rating: gameRating,
      id: gameId,
    })
    .then(() => {
      console.log("gameRevies added");
      return res.json({ msg: "gameReviews added" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
