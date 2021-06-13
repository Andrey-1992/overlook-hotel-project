// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import dayjs from 'dayjs';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import User from './classes/user.js';
import Room from './classes/rooms.js';
// import roomsData from './test-data/roomsData.js';
// import bookingsData from './test-data/bookingsData.js';
// import customersData from './test-data/customersData.js';
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
// window.addEventListener('load', test1);


// Gobal Variables
let customersData;
let bookingsData;
let roomsData;
// const currentUser = new User(customers);
let currentUser;
// console.log(customersData);
// console.log(bookingsData);
// console.log(roomsData);
console.log(currentUser);


// function test1() {
//   const customers = customersData
//   const bookings = bookingsData
//   const rooms = roomsData
//   const currentUser = new User(customersData[0]);
//   // initializedData(customers, bookings, rooms)
// }

// function initializedData(customers, bookings, rooms) {
// const currentUser = new User(customers);
//
// }





// Functions

function promiseFetchData() {
  const customers = fetchCalls.callCustomersData();
  const bookings = fetchCalls.callBookingsData();
  const rooms = fetchCalls.callRoomsData();
  Promise.all([customers, bookings, rooms])
  .then(data => {
    // const currentUser = new User(data[1]);
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
  let currentUser = new User(customersData);
  console.log(currentUser);

  loadDomUpdates(currentUser);
  test2();
  // domUpdates.displayGreetUser(currentUser);
  // let myCurrentDate = new Date()
  // console.log(myCurrentDate);
  // domUpdates.displayCurrentDate(myCurrentDate)
  // domUpdates.displayPastBookings(currentUser, pastBookingsView)
  // domUpdates.displayPresentBookings(currentUser, presentBookingsView)
  // domUpdates.displayFutureBookings(currentUser, futureBookingsView)
  // domUpdates.displayTotalSpent(currentUser);
  // createUser(customersData)
};

function test2() {
  console.log('test2', customersData);
  console.log('test2', bookingsData);
  console.log('test2', roomsData);
}

function loadDomUpdates(currentUser) {
  let myCurrentDate = new Date()
  let dateDayJs = dayjs(myCurrentDate).format('dddd - MMM / DD / YYYY');
  console.log(myCurrentDate);
  console.log(dateDayJs);
  domUpdates.displayGreetUser(currentUser);
  domUpdates.displayCurrentDate(dateDayJs)
  domUpdates.displayPastBookings(currentUser, pastBookingsView)
  domUpdates.displayPresentBookings(currentUser, presentBookingsView)
  domUpdates.displayFutureBookings(currentUser, futureBookingsView)
}

function createUser(customer) {
  const currentUser = new User(customer);
  console.log(currentUser);
}
