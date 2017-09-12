const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
const Hamburguer = require('../models/hamburger');

User.collection.drop();
Hamburguer.collection.drop();

User
  .create([{
    username: 'ADMIN',
    email: 'admin@admin.com',
    password: 'password',
    passwordConfirmation: 'password',
    admin: true
  }])
  .then((users) => {
    console.log(users);
    return Hamburguer
      .create([{
        name: 'Grizzly Bear',
        restaurant: 'The Magic Roundabout',
        image: 'http://www.hot-dinners.com/images/stories/blog/2015/burger-bear-roundabout.jpg',
        city: 'London',
        ingredients: 'Beef Patty, Smoked AppleWood Bacon, Cheddar all in a Bun'
      },{
        name: 'Bacon N Cheese (GF Option)',
        restaurant: 'Chuck Burgers',
        image: 'http://steampub.com/wp-content/uploads/2013/05/Boursin-Burger-Closed-1024x680.jpg',
        city: 'London',
        ingredients: 'Bacon, Cheddar, Beef Patty, Homemade pickles, Smoked Bacon, Standar Bun'

      },{
        name: '"Smokey Robinson" Bacon Burger',
        restaurant: 'Patty&Bun',
        image: 'https://preview.ibb.co/jCuJ9F/London_Patty_Bun.jpg',
        city: 'London',
        ingredients: 'Beef patty, bacon, cheese, tomato, lettuce, mounds of caramelised onions, ketchup, smokey P&B mayo in a brioche bun'

      },{
        name: 'Bacon Cheese Burger',
        restaurant: 'Five Guys',
        image: 'https://image.ibb.co/dw80Oa/Everywhere_Five_Guys.jpg',
        city: 'London, Madrid, Berlin, New York',
        ingredients: 'Beef Patty, Lettuce, Tomato, Bacon, Cheddar Cheese, Mayo, Ketchup...'
      },{
        name: 'Dirty bacon',
        restaurant: 'Dirty Burgers',
        image: 'https://preview.ibb.co/hoTpGv/London_Dirty_Burger.jpg',
        city: 'London',
        ingredients: 'Dirty Burger Beef Patty, mature cheddar cheese, bacon, lettuce, tomato, gherkin and their special mayo!'

      },{
        name: 'Double Cheese Bacon',
        restaurant: 'The Bleecker',
        image: 'https://preview.ibb.co/knPwwv/London_Bleecker.jpg',
        city: 'London',
        ingredients: 'double beef, double cheese, onion & sauce'

      },{
        name: 'The Doughnut Burger',
        restaurant: 'Reds True BBQ',
        image: 'https://preview.ibb.co/f5fiRv/London_Red_True_BBQ.jpg',
        city: 'London',
        ingredients: 'Two patties, melted cheese, smoked peppered bacon, crispy onions and Dirty sauce. All between two sweet glazed donuts. Served with frickles.'

      },{
        name: 'Harlem Classic',
        restaurant: 'Harlem Shake',
        image: 'https://preview.ibb.co/bFqKYa/harlem.jpg',
        city: 'New York',
        ingredients: 'Beef patty, american cheese, onions, pickles and their special sauce'

      },{
        name: 'Texas Smoked Brisket',
        restaurant: 'The Pit',
        image: 'https://image.ibb.co/kAhuia/Berlin_The_Devil.jpg',
        city: 'Berlin',
        ingredients: '18h smoked brisket with sea salt and black pepper on a bun'

      },{
        name: 'The Dane',
        restaurant: 'Hot Buns',
        image: 'https://preview.ibb.co/fbfEia/Copenhagen_Hot_Buns.jpg',
        city: 'Copenhagen',
        ingredients: 'Pork roast, pork rinds, red cabbage, pickles and mustard mayo'

      },{
        name: 'The Original Waffle Burger',
        restaurant: 'The Bird',
        image: 'https://breadcrumbs.london/wp-content/uploads/2016/03/The-Original-Waffle-Burger-min.jpg',
        city: 'London',
        ingredients: 'Two boneless free range thighs, pork bacon (optional), American cheese, house BBQ, mayo, hot sauce & Canadian maple syrup served between 2 freshly griddled waffles!'

      },{
        name: 'Pancuno',
        restaurant: 'Naguar',
        image: 'https://image.ibb.co/g2FfOa/Oviedo_Naguar.jpg',
        city: 'Oviedo',
        ingredients: 'Rump Breast Beef Patty, Bacon, Oscos Cheese, Lettuce, Tomato, Homemade Ketchup in a Bun'

      },{
        name: 'Bowies 150g',
        restaurant: 'Bowies',
        image: 'http://bowies.es/wp-content/uploads/2016/03/hamburguesa-bowies-150-gr.jpg',
        city: 'Oviedo',
        ingredients: '150g Beef Patty, Goat Cheese, Candied Peppers with a Reduction of Porto Wine in a Bun'
      },{
        name: 'Kevin Bacon',
        restaurant: 'Goiko Grill',
        image: 'https://image.ibb.co/gNEkpF/Madrid_Goiko_Grill.jpg',
        city: 'Madrid',
        ingredients: 'Beef Patty mixed with Chopped Bacon, Crunch Onion and Cheddar Cheese in a Bun'

      },{
        name: 'Brisket in a Bun',
        restaurant: 'Smokestak',
        image: 'https://image.ibb.co/caBWUF/London_Smokestak.jpg',
        city: 'London',
        ingredients: '24H Brisket and hot chillies in a Bun'

      },{
        name: 'BBQ Hamburger',
        restaurant: 'Origenes',
        image: 'https://1.bp.blogspot.com/-zVBPOEcVWNA/WEXeDpoMZXI/AAAAAAAABdI/ZUuqEm7TtsUpglj49I23CkYXnOn7EoWZgCEw/s1600/IMG_20161203_211453.jpg',
        city: 'Oviedo',
        ingredients: 'Bacon, Mozzarella, Beef Patty, Homemade pickles with homemade BBQ Sauce in a Bun'
      },{
        name: 'Cheeseburger 150g',
        restaurant: 'Rebel Room',
        image: 'https://sattundfroh.de/wp-content/uploads/2016/07/Rebel-Room-5.jpg',
        city: 'Berlin',
        ingredients: 'Beef Patty, Grilled Onions, Cheddar Cheese with ketchup, mustard in a Bun'

      },{
        name: 'Kobe Burger',
        restaurant: 'De Labra',
        image: 'http://fotos01.lne.es/2016/02/12/646x260/wagyu-1.jpg',
        city: 'Oviedo',
        ingredients: 'Waygu Patty, Black Truffle, Mozarella Cheese in a Seeds Bun'
      },{
        name: 'Pulled Pork BBQ',
        restaurant: 'The Good Burger',
        image: 'http://www.thegoodburger.com/assets/uploads/2017/03/614x521-Productos-Web-PULLED.jpg',
        city: 'Salamanca',
        ingredients: 'Pulled Pork, Onion Rings, TGB BBQ Sauce'

      }]);
  })
  .then((hamburger) => console.log(`${hamburger.length} hamburguers created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
