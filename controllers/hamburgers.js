const Hamburger = require('../models/hamburger');
const Restaurant = require('../models/restaurant');


function hamburgersIndex(req, res) {
  Hamburger
    .find(req.query.id)
    .populate('user restaurant')
    .sort({ name: 1 })
    .exec()
    .then(hamburgers => {
      return Restaurant
        .find()
        .exec()
        .then(restaurants => {
          res.render('hamburgers/index', { hamburgers, restaurants, selectedRestaurant: req.query.restaurant});
        });
    })
    .catch(err => res.render('error', { err }));
}

function hamburgersAdmin(req, res) {
  Hamburger
    .find()
    .populate('user restaurant')
    .sort()
    .exec()
    .then((hamburgers) => res.render('hamburgers/admin', { hamburgers }))
    .catch(err => res.render('error', { err }));
}

function hamburgersShow(req, res) {
  Hamburger
    .findById(req.params.id)
    .populate('user restaurant')
    .exec()
    .then(hamburger => res.render('hamburgers/show', { hamburger }))
    .catch(err => res.render('error', { err }));
}

function hamburgersCreate(req, res) {

  req.body.user = req.currentUser;

  Hamburger

    .create(req.body)
    .then(() => res.redirect('/hamburgers'))
    .catch(err => res.render('error', { err }));
}

function hamburgersNew(req, res) {


  Restaurant
    .find()
    .sort({ name: 1 })
    .exec()
    .then((restaurants) => res.render('hamburgers/new', { restaurants }))
    .catch(err => res.render('error', { err }));
}

function hamburgersEdit(req, res) {
  Hamburger
    .findById(req.params.id)
    .populate('restaurant')
    .exec()
    .then(hamburger => {
      return Restaurant
        .find()
        .sort({ name: 1 })
        .exec()
        .then((restaurants) => res.render('hamburgers/edit', { hamburger, restaurants }));
    })
    .catch(err => res.render('error', { err }));
}

function hamburgersUpdate(req, res) {
  Hamburger
    .findById(req.params.id)
    .exec()
    .then(hamburger => {

      hamburger = Object.assign(hamburger, req.body);
      return hamburger.save();
    })
    .then(hamburger => res.redirect(`/hamburgers/${hamburger.id}`))
    .catch(err => res.render('error', { err }));
}

function hamburgersDelete(req, res) {
  Hamburger
    .findById(req.params.id)
    .exec()
    .then(hamburger => hamburger.remove())
    .then(() => res.redirect('/hamburgers'))
    .catch(err => res.render('error', { err }));
}


module.exports = {
  index: hamburgersIndex,
  show: hamburgersShow,
  edit: hamburgersEdit,
  update: hamburgersUpdate,
  delete: hamburgersDelete,
  new: hamburgersNew,
  create: hamburgersCreate,
  admin: hamburgersAdmin
};
