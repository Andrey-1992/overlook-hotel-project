// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import User from './classes/user.js';
import Room from './classes/rooms.js';
import { fetchCalls } from './apiCalls.js';


let customersData;
console.log(customersData);
let bookingsData;
console.log(bookingsData);
let roomsData;
console.log(roomsData);
let currentUser;
console.log(currentUser);

// Event listeners
window.addEventListener('load', promiseFetchData);



// Functions

function promiseFetchData() {
  const customers = fetchCalls.callCustomersData()
  const bookings = fetchCalls.callBookingsData();
  const rooms = fetchCalls.callRoomsData();
  Promise.all([customers, bookings, rooms]).then(data => {
    assignData(data[0], data[1], data[2]);
  })
};

function assignData(customers, bookings, rooms) {
  customersData = customers;
  console.log(customersData);
  bookingsData = bookings;
  console.log(bookingsData);
  roomsData = rooms;
  console.log(roomsData);
  const currentUser = new User(customersData[0]);
  console.log(currentUser);
  // createUser(customersData)
};

function createUser(customer) {
  const currentUser = new User(customer);
  console.log(currentUser);
}
