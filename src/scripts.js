// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import dayjs from 'dayjs';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


import User from './classes/user.js';
import Hotel from './classes/hotel.js';
import Room from './classes/rooms.js';
import { fetchCalls } from './apiCalls.js';
import domUpdates from './domUpdates';


// Dom selection
let loginView = document.getElementById('loginView');
let loginForm = document.getElementById('loginForm');
let loginUsername = document.getElementById('loginUsername');
let loginPassword = document.getElementById('loginPassword');
let loginBtn = document.getElementById('loginBtn');

let bookingForm = document.getElementById('bookingForm');
let makeBookingBtn = document.getElementById('makeBookingBtn');
let submit = document.getElementById('submit');

let userInfo = document.getElementById('userInfo');
let hotelInfo = document.getElementById('hotelInfo');
let bookingsView = document.getElementById('bookingsView');
let pastBookingsView = document.getElementById('pastBookingsView');
let presentBookingsView = document.getElementById('presentBookingsView');
let futureBookingsView = document.getElementById('futureBookingsView');
let searchView = document.getElementById('searchView');
let searchDate = document.getElementById('searchDate');
let showRoomsByDate = document.getElementById('showRoomsByDate');
let filterByRoomType = document.getElementById('filterByRoomType');
let submitSearchBtn = document.getElementById('submitSearchBtn');
let homeViewBtn = document.getElementById('homeViewBtn');



// Gobal Variables
let customersData, bookingsData, roomsData, hotel, currentUser;


// Event listeners
window.addEventListener('load', promiseFetchData);
submitSearchBtn.addEventListener('click', showBookingsByDate);
homeViewBtn.addEventListener('click', returnToHomeView);
// bookingForm.addEventListener('submit', selectBooking);


// Functions
function preventDefault() {
  event.preventDefault()
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function promiseFetchData() {
  const customers = fetchCalls.callCustomersData();
  const bookings = fetchCalls.callBookingsData();
  const rooms = fetchCalls.callRoomsData();
  Promise.all([customers, bookings, rooms])
  .then(data => {
    initializedData(data[0].customers, data[1].bookings, data[2].rooms);
    // The data that our fetch API is sending us is an object, one "property" as a key and an "array" as his value, we need to use dot notation go into the nested data and select the property.
  })
  .catch(err => console.error(err))
};

function initializedData(customers, bookings, rooms) {
  customersData = customers;
  bookingsData = bookings;
  roomsData = rooms;
  console.log('assignDataApi', typeof customersData);
  console.log('assignDataApi', bookingsData);
  console.log('assignDataApi', roomsData);

  currentUser = new User(customersData[0]);
  currentUser.findBookings(bookingsData);
  currentUser.calculateTotalMoneySpent(roomsData);
  console.log("updateUserValues", currentUser);

  hotel = new Hotel(roomsData, bookingsData, customersData);
  console.log('instatiateHotelClass', hotel);

  loadUserUpdates(currentUser);
};

function loadUserUpdates(currentUser) {
  let myCurrentDate = new Date()
  let dateDayJs = dayjs(myCurrentDate).format('dddd - MMM / DD / YYYY');
  console.log("dateDayJs", dateDayJs);

  domUpdates.displayGreetUser(currentUser);
  domUpdates.displayCurrentDate(dateDayJs);
  domUpdates.displayPastBookings(currentUser, pastBookingsView);
  domUpdates.displayPresentBookings(currentUser, presentBookingsView);
  domUpdates.displayFutureBookings(currentUser, futureBookingsView);
};

function showBookingsByDate() {
  preventDefault();
  hide(pastBookingsView);
  hide(presentBookingsView);
  hide(futureBookingsView);
  show(showRoomsByDate);
  show(homeViewBtn);
  console.log('prueba', customersData);
  console.log('prueba', currentUser);

  let selectedDate = searchDate.value;
  let dateJs = dayjs(selectedDate).format('YYYY/MM/DD');
  console.log(dateJs);

  let hotel = new Hotel(roomsData, bookingsData, customersData);
  hotel.findAvailableRooms(dateJs);
  // hotel.findAvailableRooms(dateJs.toString());
  console.log("test2", hotel);
  domUpdates.displayBookingsByDate(hotel, showRoomsByDate, selectBooking)
  // let bookingForm = document.getElementById('bookingForm');
  // bookingForm.addEventListener('submit', selectBooking);
};

function returnToHomeView() {
  preventDefault();
  show(pastBookingsView);
  show(presentBookingsView);
  show(futureBookingsView);
  hide(showRoomsByDate);
  hide(homeViewBtn);

  let currentUser = new User(customersData[0]);
  currentUser.findBookings(bookingsData);
  currentUser.calculateTotalMoneySpent(roomsData);
};

function selectBooking() {
  preventDefault();
  console.log("test")

  fetchCalls.postNewRoomBooking({});
}
