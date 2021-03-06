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

//Login view section
let loginFormContainer = document.getElementById('loginFormContainer');
let loginForm = document.getElementById('loginForm');
let userInput = document.getElementById('userInput');
let passwordInput = document.getElementById('passwordInput');
let usernameLabel = document.getElementById('usernameLabel');
let passwordLabel = document.getElementById('passwordLabel');
let warnings = document.getElementById('warnings');
// Booking view section
let bookingForm = document.getElementById('bookingForm');
let makeBookingBtn = document.getElementById('makeBookingBtn');
let submit = document.getElementById('submit');
// Main view section
let userView = document.getElementById('userView')
let userInfo = document.getElementById('userInfo');
let hotelInfo = document.getElementById('hotelInfo');
let bookingsView = document.getElementById('bookingsView');
let pastBookingsView = document.getElementById('pastBookingsView');
let presentBookingsView = document.getElementById('presentBookingsView');
let futureBookingsView = document.getElementById('futureBookingsView');
//Search view section
// let bookingsView = document.getElementById('bookingsView');
let searchView = document.getElementById('searchView');
let searchDate = document.getElementById('searchDate');
let showRoomsByDate = document.getElementById('showRoomsByDate');
let filterByRoomType = document.getElementById('filterByRoomType');
// Buttons sections
// let submitSearchBtn = document.getElementById('submitSearchBtn');
let homeViewBtn = document.getElementById('homeViewBtn');
let pastBookingsBtn = document.getElementById('pastBookingsBtn');
let futureBookingsBtn = document.getElementById('futureBookingsBtn');




// Gobal Variables
let customersData, bookingsData, roomsData, hotel, currentUser, dateJs;


// Event listeners
// window.addEventListener('load', promiseFetchData);
submitSearchBtn.addEventListener('click', showBookingsByDate);
loginForm.addEventListener('submit', loginValidation);
homeViewBtn.addEventListener('click', returnToHomeView);
pastBookingsBtn.addEventListener('click', goToPastView);
futureBookingsBtn.addEventListener('click', goToFutureView);


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

function loginValidation() {
  preventDefault();
  // console.log(userInput.value.length);
  if (!userInput.value.length || !passwordInput.value.length) {
    warnings.innerText += '';
    warnings.innerText += "Please fill out fields";
  } else if (passwordInput.value !== "overlook2021") {
    warnings.innerText += '';
    warnings.innerText += "Invalid Password!";
  } else if (!userInput.value.includes('customer')) {
    warnings.innerText += '';
    warnings.innerText += "Invalid Username!";
  } else {
    fetchLoginUser(userInput.value);
  }
}

function fetchLoginUser(userId) {
  // console.log(typeof userIdNum);
  const userIdNum = parseInt(userId.split('r')[1]);
  const currentUserId = fetchCalls.callCustomersIdData(userIdNum)
  .then(data => currentUser = new User(data));
  promiseFetchData();
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
  // console.log('assignDataApi', typeof customersData);
  // console.log('assignDataApi', bookingsData);
  // console.log('assignDataApi', roomsData);
  hotel = new Hotel(roomsData, bookingsData, customersData);

  updateUserData(currentUser, bookingsData, roomsData);
  loadUserInfo(currentUser);
  loadCurrentDate();
  loadUserBookings();
  hide(loginForm);
  show(userView);
  console.log(currentUser)
};

function updateUserData(currentUser, bookingsData, roomsData) {
  currentUser.findBookings(bookingsData);
  currentUser.calculateTotalMoneySpent(roomsData);
  // loadUserBookings();
}

function loadCurrentDate(currentUser) {
  let myCurrentDate = new Date()
  let dateDayJs = dayjs(myCurrentDate).format('dddd : MMM / DD / YYYY');
  // console.log("dateDayJs", dateDayJs);
  domUpdates.displayHotelLogo(dateDayJs);
  // domUpdates.displayCurrentDate(dateDayJs);
};

function loadUserInfo(currentUser) {
  domUpdates.displayGreetUser(currentUser);
  // domUpdates.displayTotalSpent(currentUser);
};

function loadUserBookings() {
  domUpdates.displayPresentBookings(currentUser, bookingsView);
  // domUpdates.displayPastBookings(currentUser, pastBookingsView);
  // domUpdates.displayFutureBookings(currentUser, futureBookingsView);
};

function showBookingsByDate() {
  preventDefault();
  hide(bookingsView);
  show(showRoomsByDate);
  show(homeViewBtn);

  let selectedDate = searchDate.value;
  dateJs = dayjs(selectedDate).format('YYYY/MM/DD');
  // console.log(dateJs);
  hotel.findAvailableRooms(dateJs);
  domUpdates.displayBookingsByDate(hotel, showRoomsByDate, addBooking)
};

function goToPastView() {
  preventDefault();
  hide(showRoomsByDate);
  show(bookingsView);

  domUpdates.displayPastBookings(currentUser, bookingsView);
};

function goToFutureView() {
  preventDefault();
  hide(showRoomsByDate);
  show(bookingsView);

  domUpdates.displayFutureBookings(currentUser, bookingsView);
};

function returnToHomeView() {
  preventDefault();
  hide(showRoomsByDate);
  show(bookingsView);
  promiseFetchData();
  // console.log('returnHomeUserView', currentUser);
};

function addBooking() {
  // console.log(currentUser.id);
  // console.log(dateJs);
  // console.log(typeof parseInt(event.target.querySelector('.room-num').innerHTML.split(' ')[2]));
  preventDefault();
  let makeBookingBtn = document.getElementById('makeBookingBtn');
  makeBookingBtn.innerText = "Successful Book"
  const test1 = event.target.querySelector('.room-num');
  const test2 = test1.innerHTML.split(' ')[2]
  const test3 = parseInt(test2);
  // console.log(test3);

  let addBooking = {
     userID: currentUser.id,
     date: dateJs,
     roomNumber: test3
    };
  console.log('postObject', addBooking)

  fetchCalls.postNewRoomBooking(addBooking);
};
