const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const Hamburguer = require('../models/hamburger');

Hamburguer.collection.drop();

Hamburguer
  .create([{
    name: 'Grizzly Bear',
    restaurant: 'The Magic Roundabout',
    image: 'http://www.hot-dinners.com/images/stories/blog/2015/burger-bear-roundabout.jpg',
    tastingNotes: 'Messy burger with high quality meat and excellent smoked applewood bacon. Easy to finish and delicious in every bite',
    ingredients: 'Beef Patty, Smoked AppleWood Bacon, Cheddar all in a Bun'
  },{
    name: 'Bacon N Cheese (GF Option)',
    restaurant: 'Chuck Burgers',
    image: 'http://steampub.com/wp-content/uploads/2013/05/Boursin-Burger-Closed-1024x680.jpg',
    tastingNotes: 'High quality burger with all the ingredients you need for a perfect junk-meal.',
    ingredients: 'Bacon, Cheddar, Beef Patty, Homemade pickles, Smoked Bacon, Standar Bun'

  }])
  .then((hamburger) => console.log(`${hamburger.length} hamburguers created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
