const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
const Hamburguer = require('../models/hamburger');
const Restaurant = require('../models/restaurant');

User.collection.drop();
Hamburguer.collection.drop();
Restaurant.collection.drop();

Restaurant
  .create([{
    name: 'Magic Roundabout',
    url: 'http://www.magicroundabout.co/',
    city: 'London',
    country: 'United Kingdom'
  },{
    name: 'Chuck Burgers',
    url: 'http://www.chuckburgerbar.com/#spitalfields',
    city: 'London',
    country: 'United Kingdom'

  },{
    name: 'Patty&Buns',
    url: 'http://www.pattyandbun.co.uk/',
    city: 'London',
    country: 'United Kingdom'
  },{
    name: 'Five Guys',
    url: 'https://www.fiveguys.com/',
    city: 'Miami',
    country: 'United States of America'

  },{
    name: 'Dirty burger',
    url: 'https://www.eatdirtyburgers.com/',
    city: 'London',
    country: 'United Kingdom'
  },{
    name: 'Bleeckers',
    url: 'https://www.bleeckerburger.co.uk/',
    city: 'London',
    country: 'United Kingdom'
  },{
    name: 'Reds true BBQ',
    url: 'https://truebarbecue.com/',
    city: 'London',
    country: 'United Kingdom'
  },{
    name: 'Harlem Shakes',
    url: 'https://www.harlemshakenyc.com/',
    city: 'New York',
    country: 'United States of America'
  },{
    name: 'The Pit',
    url: 'http://www.thepitberlin.com/',
    city: 'Berlin',
    country: 'Germany'
  },{
    name: 'Hot Buns',
    url: 'http://www.hotbuns.dk',
    city: 'Copenhagen',
    country: 'Denmark'
  },{
    name: 'The Bird',
    url: 'http://birdrestaurants.com/',
    city: 'London',
    country: 'United Kingdom'
  },{
    name: 'Naguar',
    url: 'http://naguar.es/',
    city: 'Oviedo',
    country: 'Spain'
  },{
    name: 'Goiko Grill',
    url: 'https://www.goikogrill.com/',
    city: 'Madrid',
    country: 'Spain'
  },{
    name: 'Smokestak',
    url: 'https://smokestak.co.uk/',
    city: 'London',
    country: 'United Kingdom'
  },{
    name: 'Origenes',
    url: 'http://www.origenesgourmet.com/',
    city: 'Oviedo',
    country: 'Spain'
  },{
    name: 'Rebel Room',
    url: 'http://www.rebelroomburger.de/',
    city: 'Berlin',
    country: 'Germany'
  },{
    name: 'De Labra',
    url: 'http://delabra.es/',
    city: 'Oviedo',
    country: 'Spain'
  },{
    name: 'The Good Burger',
    url: 'http://www.thegoodburger.com/',
    city: 'Oviedo',
    country: 'Spain'
  },{
    name: 'Bowies',
    url: 'http://bowies.es/',
    city: 'Oviedo',
    country: 'Spain'
  }])
  .then((restaurants) => {
    return User
      .create([{
        username: 'wordlwideburgerjoint#0',
        email: 'admin@admin.com',
        password: 'password',
        passwordConfirmation: 'password',
        admin: true
      }])
      .then((users) => {
        return Hamburguer
          .create([{
            name: 'Grizzly Bear',
            restaurant: restaurants[0],
            image: 'http://www.hot-dinners.com/images/stories/blog/2015/burger-bear-roundabout.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Beef Patty, Smoked AppleWood Bacon, Cheddar all in a Bun'
          },{
            name: 'Bacon N Cheese (GF Option)',
            restaurant: restaurants[1],
            image: 'http://steampub.com/wp-content/uploads/2013/05/Boursin-Burger-Closed-1024x680.jpg',
            approved: true,
            ingredients: 'Bacon, Cheddar, Beef Patty, Homemade pickles, Smoked Bacon, Standar Bun'

          },{
            name: '"Smokey Robinson" Bacon Burger',
            restaurant: restaurants[2],
            image: 'https://preview.ibb.co/jCuJ9F/London_Patty_Bun.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Beef patty, bacon, cheese, tomato, lettuce, mounds of caramelised onions, ketchup, smokey P&B mayo in a brioche bun'

          },{
            name: 'Bacon Cheese Burger',
            restaurant: restaurants[3],
            image: 'https://d17840adovynop.cloudfront.net/wp-content/uploads/2014/03/five-guys-secret-menu1.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Beef Patty, Lettuce, Tomato, Bacon, Cheddar Cheese, Mayo, Ketchup...'
          },{
            name: 'Dirty bacon',
            restaurant: restaurants[4],
            image: 'https://preview.ibb.co/hoTpGv/London_Dirty_Burger.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Dirty Burger Beef Patty, mature cheddar cheese, bacon, lettuce, tomato, gherkin and their special mayo!'

          },{
            name: 'Double Cheese Bacon',
            restaurant: restaurants[5],
            image: 'https://preview.ibb.co/knPwwv/London_Bleecker.jpg',
            approved: true,
            user: users[0],
            ingredients: 'double beef, double cheese, onion & sauce'

          },{
            name: 'The Doughnut Burger',
            restaurant: restaurants[6],
            image: 'https://preview.ibb.co/f5fiRv/London_Red_True_BBQ.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Two patties, melted cheese, smoked peppered bacon, crispy onions and Dirty sauce. All between two sweet glazed donuts. Served with frickles.'

          },{
            name: 'Harlem Classic',
            restaurant: restaurants[7],
            image: 'https://preview.ibb.co/bFqKYa/harlem.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Beef patty, american cheese, onions, pickles and their special sauce'

          },{
            name: 'Texas Smoked Brisket',
            restaurant: restaurants[8],
            image: 'https://image.ibb.co/kAhuia/Berlin_The_Devil.jpg',
            approved: true,
            user: users[0],
            ingredients: '18h smoked brisket with sea salt and black pepper on a bun'

          },{
            name: 'The Dane',
            restaurant: restaurants[9],
            image: 'https://preview.ibb.co/fbfEia/Copenhagen_Hot_Buns.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Pork roast, pork rinds, red cabbage, pickles and mustard mayo'

          },{
            name: 'The Original Waffle Burger',
            restaurant: restaurants[10],
            image: 'https://breadcrumbs.london/wp-content/uploads/2016/03/The-Original-Waffle-Burger-min.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Two boneless free range thighs, pork bacon (optional), American cheese, house BBQ, mayo, hot sauce & Canadian maple syrup served between 2 freshly griddled waffles!'

          },{
            name: 'Pancuno',
            restaurant: restaurants[11],
            image: 'https://image.ibb.co/g2FfOa/Oviedo_Naguar.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Rump Breast Beef Patty, Bacon, Oscos Cheese, Lettuce, Tomato, Homemade Ketchup in a Bun'

          },{
            name: 'Bowies 150g',
            restaurant: restaurants[18],
            image: 'http://bowies.es/wp-content/uploads/2016/03/hamburguesa-bowies-150-gr.jpg',
            approved: true,
            user: users[0],
            ingredients: '150g Beef Patty, Goat Cheese, Candied Peppers with a Reduction of Porto Wine in a Bun'
          },{
            name: 'Kevin Bacon',
            restaurant: restaurants[12],
            image: 'https://image.ibb.co/gNEkpF/Madrid_Goiko_Grill.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Beef Patty mixed with Chopped Bacon, Crunch Onion and Cheddar Cheese in a Bun'

          },{
            name: 'Brisket in a Bun',
            restaurant: restaurants[13],
            image: 'https://image.ibb.co/caBWUF/London_Smokestak.jpg',
            approved: true,
            user: users[0],
            ingredients: '24H Brisket and hot chillies in a Bun'

          },{
            name: 'BBQ Hamburger',
            restaurant: restaurants[14],
            image: 'https://1.bp.blogspot.com/-zVBPOEcVWNA/WEXeDpoMZXI/AAAAAAAABdI/ZUuqEm7TtsUpglj49I23CkYXnOn7EoWZgCEw/s1600/IMG_20161203_211453.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Bacon, Mozzarella, Beef Patty, Homemade pickles with homemade BBQ Sauce in a Bun'
          },{
            name: 'Cheeseburger 150g',
            restaurant: restaurants[15],
            image: 'https://sattundfroh.de/wp-content/uploads/2016/07/Rebel-Room-5.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Beef Patty, Grilled Onions, Cheddar Cheese with ketchup, mustard in a Bun'

          },{
            name: 'Kobe Burger',
            restaurant: restaurants[16],
            image: 'http://fotos01.lne.es/2016/02/12/646x260/wagyu-1.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Waygu Patty, Black Truffle, Mozarella Cheese in a Seeds Bun'
          },{
            name: 'Pulled Pork BBQ',
            restaurant: restaurants[17],
            image: 'http://www.thegoodburger.com/assets/uploads/2017/03/614x521-Productos-Web-PULLED.jpg',
            approved: true,
            user: users[0],
            ingredients: 'Pulled Pork, Onion Rings, TGB BBQ Sauce'
          }]);
      });

  })
  .then((hamburger) => console.log(`${hamburger.length} hamburguers created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
