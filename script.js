const cart = document.querySelector("#cart");
cartItems = [];

function refresh() {
  // This next line is gross. Make it nicer.
  cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  console.log("refreshing!")  
}

function saved(location) {
  if (cartItems.indexOf(location) != -1) {
    console.log("location=" + location + " is already present.");
    return;
  }
  console.log("adding location=" + location);
  cartItems.push(location);
  cartItems.sort();
  refresh();
}
refresh()

let Destinations = [

  // North American
  {name: 'San Francisco', imageLink: 'https://a.cdn-hotels.com/gdcs/production92/d1580/9a28fc70-9bea-11e8-a1b5-0242ac110053.jpg', description: 'This is the San Francisco description.'},
  {name: 'New York', imageLink: 'https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428_square.jpg', description: 'This is the New York description.'},
  {name: 'Toronto', imageLink: 'https://d3e1m60ptf1oym.cloudfront.net/1e044d4e-21f3-11e0-9880-ed51581d154a/JW_H3N4591_HR_V1_uxga.jpg', description: 'This is the Toronto description.'},
  {name: 'Chicago', imageLink: 'https://cdn.aarp.net/content/dam/aarp/travel/trips/2022/02/1140-chicago-bean.jpg', description: 'This is the Chicago description.'},

  // South American

  {name: 'Rio de Janeiro', imageLink: 'https://www.planetware.com/photos-large/BRA/brazil-rio-cristo-redentor.jpg', description: 'This is the Rio description.'},
  {name: 'Santiago', imageLink: '', description: ''},
  {name: 'Buenos Aires', imageLink: '', description: ''},
  {name: 'Machu Picchu', imageLink: '', description: ''},

  // European

  // Asian

  // African

  // Oceanian

]

function updateDestination(continent) {

  let continents = [
    {name: 'NA', title: '.naTitle', image: '.naImage', description: '.naDescription'},
    {name: 'SA', title: '.saTitle', image: '.saImage', description: '.saDescription'},
    {name: 'EU', title: '.euTitle', image: '.euImage', description: '.euDescription'},
    {name: 'AS', title: '.asTitle', image: '.asImage', description: '.asDescription'},
    {name: 'AF', title: '.afTitle', image: '.afImage', description: '.afDescription'},
    {name: 'OC', title: '.ocTitle', image: '.ocImage', description: '.ocDescription'}
  ]

  const index = continents.map(object => object.name).indexOf(continent)
  const x = index + (3 * (index + 1))

  random = Math.floor((Math.random() * (x)) + 0)
  
  const Title = document.querySelector(continents[index].title)
  const Image = document.querySelector(continents[index].image)
  const Description = document.querySelector(continents[index].description)
  
  Title.innerHTML = Destinations[random].name
  Description.innerHTML = Destinations[random].description
  Image.src = Destinations[random].imageLink
  
}



