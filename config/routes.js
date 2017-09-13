const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const hamburgers = require('../controllers/hamburgers');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');


router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/hamburgers')
  .get(hamburgers.index)
  .post(secureRoute.secureRoute,hamburgers.create);

router.route('/hamburgers/admin')
  .get(secureRoute.secureAdmin,hamburgers.admin);

router.route('/hamburgers/new')
  .get(secureRoute.secureRoute, hamburgers.new);
router.route('/hamburgers/:id')
  .get(hamburgers.show)
  .put(secureRoute.secureRoute, hamburgers.update)
  .delete(secureRoute.secureRoute, hamburgers.delete);
router.route('/hamburgers/:id/edit')
  .get(secureRoute.secureRoute, hamburgers.edit);
router.route('/register')
  .get(registrations.new)
  .post(registrations.create);
router.route('/login')
  .get(sessions.new)
  .post(sessions.create);
router.get('/logout', sessions.delete);

module.exports = router;
