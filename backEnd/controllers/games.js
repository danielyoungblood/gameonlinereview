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
  //variable name is id,
  //equal sign means we are having the variable whose name is id having
  //the value of what is in the req.params.id variable
  const id = req.params.id;
  console.log("id: " + id);
  db.select("*")
    .from("gameReviews")
    .where("id", "=", id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update single game review by id
router.put("/:id", (req, res) => {
  console.log("update game");
  db("gameReviews")
    .where("id", "=", id)
    .update({ movie_name: "Goldeneye" })
    .then(() => {
      console.log("update gameReviews");
      return res.json({ msg: "Update gameReviews" });
    })
    .catch((err) => {
      console.log(err);
    });
  //db is the name that refers to the postgres software,
  //postgres is the database software
  //gameReviews is the name of the database using  postgres software

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
