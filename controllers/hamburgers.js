const Hamburger = require('../models/hamburger');


function hamburgersIndex(req, res) {
  Hamburger
    .find(req.query) // { city: 'London' }
    .sort({ name: 1 })
    .exec()
    .then((hamburgers) => res.render('hamburgers/index', { hamburgers }))
    .catch(err => res.render('error', { err }));
}

function hamburgersAdmin(req, res) {
  Hamburger
    .find() // { city: 'London' }
    .sort()
    .exec()
    .then((hamburgers) => res.render('hamburgers/admin', { hamburgers }))
    .catch(err => res.render('error', { err }));
}

function hamburgersShow(req, res) {
  Hamburger
    .findById(req.params.id)
    // .populate('user')
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
  res.render('hamburgers/new');
}

function hamburgersEdit(req, res) {
  Hamburger
    .findById(req.params.id)
    .exec()
    .then(hamburger => res.render('hamburgers/edit', { hamburger }))
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
