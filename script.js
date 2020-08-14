//Student Name:Nishanthan Vicknesewaran
//Student Number: 141770198

//const { doc } = require('prettier');

/* Add any JavaScript you need to this file. */

/*The car parts that are available for sale on the website*/
var products = [
  {
    name: 'High Flow Aluminum Charge Pipe Kit ',
    image:"url(images/intercooler.JPG)",
    category: 'engine',
    description: 'Increase intake air flow with aluminum charge pipes for your OEM intercooler',
    price: 599.99,
    qty: 0,
    featured: true
  },
  {
    name: 'Ignition Service Kit',
    image: './images/coils.JPG',
    category: 'engine',
    description:
      'Includes four OE red coil packs, OEM spark plugs and black coil pack wiring conduit ',
    price: 299.99,
    qty: 0,
    featured: false
  },
  {
    name: 'Premium Oil Service Kit',
    image: './images/oil.JPG',
    category: 'engine',
    description: 'Includes HENGST oil filter and Liqui-Moly High Tech 5w-40 oil',
    price: 69.99,
    qty: 0,
    featured: false
  },
  {
    name: 'Atmospheric Blow Off Valve Spacer – Polished ',
    image: './images/blowoff.JPG',
    category: 'engine',
    description: 'Direct bolt on without worry of a check-engine light',
    price: 149.99,
    qty: 0,
    featured: true
  },
  {
    name: 'APR Carbon Fiber Cold Air Intake System ',
    image: './images/intake.JPG',
    category: 'engine',
    description: 'Great performance and looks for your B8',
    price: 399.99,
    qty: 0,
    featured: false
  },
  {
    name: 'Heavy Duty Shocks & Struts Kit ',
    image: './images/shocks.JPG',
    category: 'suspension',
    description: 'Performance shocks for OE springs',
    price: 659.99,
    qty: 0,
    featured: false
  },
  {
    name: 'Super Sport Springs',
    image: './images/hrsprings.JPG',
    category: 'suspension',
    description: 'Aggressive looks and ultimate handling. Average lowering of 2.0"F 2.0"R',
    price: 299.99,
    qty: 0,
    featured: false
  },
  {
    name: 'Airtech Basic Air Suspension System',
    image: './images/airsuspension.JPG',
    category: 'suspension',
    description: 'Complete bare-bones direct bolt-in air suspension system',
    price: 2999.99,
    qty: 0,
    featured: true
  },
  {
    name: 'Complete Front Control Arm Kit ',
    image: './images/control arm.JPG',
    category: 'suspension',
    description: 'Includes all front control arms, ball joints, and hardware',
    price: 699.99,
    qty: 0,
    featured: true
  },
  {
    name: 'Performance Front & Rear Sway Bar Kit ',
    image: './images/swaybar.JPG',
    category: 'suspension',
    description:
      'Includes front adjustable (30mm) and rear (24mm) non-adjustable sway bars with required bushings',
    price: 499.99,
    qty: 0,
    featured: false
  }
];

/*This function is used to create the description for the object*/
function description(name) {
  var desc = document.querySelector('#description');
  var description = document.createElement('div');
  description.className = 'description';
  description.innerHTML = name;
  desc.appendChild(description);
}

/*This function creates the individual card for each car part */
function createCard(i) {
  var cardCreate = document.querySelector('#cardCreation');
  var card = document.createElement('div');
  card.className = 'card';
  var imgDiv = document.createElement('div');
  imgDiv.className = 'imgCreate';
  var img = document.createElement('img');
  imgDiv.appendChild(img);
  /*Create the header for the car part */
  var p = document.createElement('p');
  var h3 = document.createElement('h3');
  var button = document.createElement('BUTTON');
  button.className = 'add';
  button.innerHTML = 'Add to Cart';
  cardCreate.appendChild(card);
  img.src = products[i].image;
  /*Create the image for the car part*/
  img.className = 'product-image';
  card.appendChild(imgDiv);
  var name = document.createTextNode(products[i].name);
  h3.appendChild(name);
  card.appendChild(h3);
  p.className = 'price';
  /*Create the price for the car part*/
  var price = document.createTextNode('$' + products[i].price + ' CAD');
  p.appendChild(price);
  card.appendChild(p);
  var desc = document.createTextNode(products[i].description);
  card.appendChild(p);
  card.appendChild(desc);
  card.appendChild(button);
}

function emailValidation() {

  var valid = false;
  var email= document.getElementById("Email").value;
  
  const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (validEmail.test(email)) {
    valid = true;
  }
  return valid;
  }

  

window.onload = function() {
  var home = document.querySelector('#home');
  home.addEventListener('click', function() {
    document.querySelector('#home').href = 'index.html';
    document.querySelector('#home').href = '#';
    document.getElementById('description').innerHTML = '';
    description('Featured Parts');
    document.getElementById('cardCreation').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].featured === true) {
        createCard(i);
      }
    }
  });
  /* Setup the All Parts menu page */
  var all = document.querySelector('#all');
  all.addEventListener('click', function() {
    document.getElementById('description').innerHTML = '';
    description('Performance Parts');
    document.getElementById('cardCreation').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      createCard(i);
    }
  });
  /* Setup the Engine Parts menu page */
  var engine = document.querySelector('#engine');
  engine.addEventListener('click', function() {
    document.getElementById('description').innerHTML = '';
    description('Performance Engine Parts');
    document.getElementById('cardCreation').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === 'engine') {
        createCard(i);
      }
    }
  });
  /* Setup the Wheels Parts menu page */
  var wheels = document.querySelector('#wheels');
  wheels.addEventListener('click', function() {
    document.getElementById('description').innerHTML = '';
    description('Performance Wheels');
    document.getElementById('cardCreation').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === 'wheels') {
        createCard(i);
      }
    }
  });
  /* Setup the Exhaust Parts menu page */
  var exhaust = document.querySelector('#exhaust');
  exhaust.addEventListener('click', function() {
    document.getElementById('description').innerHTML = '';
    description('Performance Exhuasts');
    document.getElementById('cardCreation').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === 'exhaust') {
        createCard(i);
      }
    }
  });
  /* Setup the Suspension Parts menu page */
  var all = document.querySelector('#suspension');
  all.addEventListener('click', function() {
    document.getElementById('description').innerHTML = '';
    description('Performance Suspension Parts');
    document.getElementById('cardCreation').innerHTML = '';
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === 'suspension') {
        createCard(i);
      }
    }
  });

  /* Setup the Home Parts menu page */
  description('Featured');
  for (var i = 0; i < products.length; i++) {
    if (products[i].featured === true) {
      createCard(i);
    }
  }
  
  formcreation();

};


/* Add any JavaScript you need to this file. */
