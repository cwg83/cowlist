const Cows = require('../models/cows.model.js').Cows;


// Create and Save a new Tutorial
exports.create = (req, res) => {
  return Cows.create({name: req.body.name, description: req.body.description})
  .then(() => {
    res.status(201);
    res.redirect('/');
  });
};

exports.findAll = (req, res) => {
  return Cows.findAll()
  .then((cows) => {
    res.status(200);
    res.send(cows);
  });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {
  return Cows.update({name: req.body.newName, description: req.body.newDescription}, {
    where: {id: req.params.id}
  })
  .then(() => {
    res.status(201);
    res.redirect('/');
  })
};

exports.delete = (req, res) => {
  return Cows.destroy({ where: { id: req.params.id } })
  .then(() => {
    res.status(200);
    res.send();
  });
};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};