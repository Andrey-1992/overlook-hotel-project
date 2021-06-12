// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import User from './classes/user.js';
import Room from './classes/rooms.js';
import { fetchCalls } from './apiCalls.js';
import domUpdates from './domUpdates';

// Dom selection
let userInfo = document.getElementById('userInfo');
let hotelInfo = document.getElementById('hotelInfo');
let bookingsView = document.getElementById('bookingsView');
let searchView = document.getElementById('searchView');
let pastBookingsView = document.getElementById('pastBookings');
let presentBookingsView = document.getElementById('presentBookings');
let futureBookingsView = document.getElementById('futureBookings');








// Event listeners
window.addEventListener('load', promiseFetchData);






// Gobal Variables
let customersData;
let bookingsData;
let roomsData;
let currentUser;
console.log(customersData);
console.log(bookingsData);
console.log(roomsData);
console.log(currentUser);


// Functions

function promiseFetchData() {
  const customers = fetchCalls.callCustomersData();
  const bookings = fetchCalls.callBookingsData();
  const rooms = fetchCalls.callRoomsData();
  Promise.all([customers, bookings, rooms])
  .then(data => {
    initializedData(data[0], data[1], data[2]);
  })
  .catch(err => console.error(err))
};

function initializedData(customers, bookings, rooms) {
  customersData = customers;
  bookingsData = bookings;
  roomsData = rooms;
  console.log(customersData);
  console.log(bookingsData);
  console.log(roomsData);
  const currentUser = new User(customersData);
  console.log(currentUser);
  domUpdates.displayGreetUser(currentUser);
  let myCurrentDate = new Date()
  console.log(myCurrentDate);
  domUpdates.displayCurrentDate(myCurrentDate)
  domUpdates.displayPastBookings(currentUser, pastBookingsView)
  domUpdates.displayPresentBookings(currentUser, presentBookingsView)
  domUpdates.displayFutureBookings(currentUser, futureBookingsView)
  // domUpdates.displayTotalSpent(currentUser);
  // createUser(customersData)
};

function createUser(customer) {
  const currentUser = new User(customer);
  console.log(currentUser);
}
