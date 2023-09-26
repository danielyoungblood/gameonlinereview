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

//update single game review by id
router.post("/:id", (req, res) => {
  console.log("update game");
  const changes = req.body;
  const id = req.params.id;
  db("gameReviews")
    .where("id", "=", id)
    .update(changes)
    .then(() => {
      console.log("updated game review");
      return res.redirect("http://localhost:3000/"); //this actual sets the url in the address bar on the client browser to this
    })
    .catch((err) => {
      console.log(err);
    });
  //db is the name that refers to the postgres software,
  //postgres is the database software
  //gameReviews is the name of the database using  postgres software
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

//delete single game review by id
router.delete("/:id", (req, res) => {
  console.log("delete game review");
  const id = req.params.id;
  const gameIdToDelete = Number(id);
  console.log(gameIdToDelete);
  db("gameReviews")
    .where("id", "=", gameIdToDelete)
    .del()
    .then(() => {
      console.log("game review deleted");
      return res.json({ msg: "game review deleted" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ msg: "err occured" });
    });
});

//add one single game review by id
router.post("/", async (req, res) => {
  console.log("add one game review");
  const { gameName, gameUrl, gameRating } = req.body;
  console.log("req.body: " + JSON.stringify(req.body));
  const maxIdQuery = await db("gameReviews")
    .select("id")
    .orderByRaw("id DESC")
    .first();
    console.log(JSON.stringify(maxIdQuery));
  var maxId = maxIdQuery.id;
  db("gameReviews")
    .insert({
      name: gameName,
      url: gameUrl,
      rating: gameRating,
      id: parseInt(maxId) + 1,
    })
    .then(() => {
      console.log("gameRevies added");
      return res.redirect("http://localhost:3000/"); //this actual sets the url in the address bar on the client browser to this
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
