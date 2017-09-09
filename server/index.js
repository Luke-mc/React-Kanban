const express = require ('express');
const PORT = process.env.PORT || 3000;
const db = require('../models');
const app = express();
const bp = require('body-parser');
//const methodOverride = require("method-override");
const session = require('express-session');
const Card = db.Card;


app.use(bp.urlencoded());

app.use(express.static("public"));

app.get("/cards", (req,res) => {
  console.log('route');
   Card.findAll()
      .then(card => {
        res.json(card);
      });
})

app.post("/card", (req, res) => {
        console.log('BODY',req.body);
        Card.create({
          title: req.body.title,
          priority: req.body.priority,
          createdBy: req.body.createdBy,
          assignedTo: req.body.assignedTo,
          stage: req.body.stage,
        }).then(() => {
          Card.findAll()
          .then(card => {
            res.json(card);
          });
         })
        .catch((err) => {
          console.log(err);
        });
    });


const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running ${PORT}`);
});

