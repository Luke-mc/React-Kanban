const express = require ('express');
const PORT = process.env.PORT || 3001;
const db = require('../models');
const app = express();
const bp = require('body-parser');
const session = require('express-session');
const Card = db.Card;


app.use(bp.urlencoded());
app.use(bp.json());


app.use(express.static("public"));

app.get("/cards", (req,res) => {
   Card.findAll()
      .then(card => {
        res.json(card);
      });
});

app.post("/card", (req, res) => {
        Card.create({
          title: req.body.title,
          priority: req.body.priority,
          createdBy: req.body.createdBy,
          assignedTo: req.body.assignedTo,
          stage: req.body.stage,
        }).then((card) => {
            console.log('route',card.dataValues);
            res.json(card.dataValues);
         })
        .catch((err) => {
          console.log(err);
        });
    });

app.delete("/card/:id", (req,res) => {
  Card.destroy({
    where: {
      id: parseInt(req.params.id)
    }
  });
  res.end();
});

app.put("/movecard/:id", (req,res) => {
  Card.update(req.body,
  {
    where: {
      id: parseInt(req.params.id)
    }
  });
  res.end();
});


const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running ${PORT}`);
});

