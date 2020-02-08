const express = require("express");
const router = express.Router();

//post admin email to the db.
module.exports = db => {
  router.post("/", (req, res) => {
    // event.preventDefault();
    console.log("req.body.email:", req.body.email);

    const email = req.body.email;
    db.query(
      `INSERT INTO emails (email)
      VALUES ($1);`,
      [email]
    )
      //to do: redirect to a page
      .then(data => {
        res.json({ data });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};