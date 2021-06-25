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
let userInfo = document.getElementById('userInfo');
let hotelInfo = document.getElementById('hotelInfo');
let bookingsView = document.getElementById('bookingsView');
let pastBookingsView = document.getElementById('pastBookingsView');
let presentBookingsView = document.getElementById('presentBookingsView');
let futureBookingsView = document.getElementById('futureBookingsView');
let searchView = document.getElementById('searchView');
let showRooms= document.getElementById('showRooms');
let filterByRoomType = document.getElementById('filterByRoomType');



// Gobal Variables
let customersData;
console.log("GlobalVar", customersData)
let bookingsData;
console.log("GlobalVar", bookingsData)
let roomsData;
console.log("GlobalVar", roomsData)
let currentUser;
console.log("GlobalUserInstances", currentUser);
let hotel;
console.log("GlobalUserInstances", hotel);



// Event listeners
window.addEventListener('load', promiseFetchData);


// Functions

function promiseFetchData() {
  const customers = fetchCalls.callCustomersData();
  const bookings = fetchCalls.callBookingsData();
  const rooms = fetchCalls.callRoomsData();
  Promise.all([customers, bookings, rooms])
  .then(data => {
    initializedData(data[0].customers, data[1].bookings, data[2].rooms);
    // The data that our fetch API is sending us is an object, one "property" as a key and an "array" as his value, we need to use dot notation go into the nested data and select the property.
  })
  // .catch(err => console.error(err))
};

function initializedData(customers, bookings, rooms) {
  customersData = customers;
  bookingsData = bookings;
  roomsData = rooms;
  console.log('assignDataApi', typeof customersData);
  console.log('assignDataApi', bookingsData);
  console.log('assignDataApi', roomsData);

  let currentUser = new User(customersData[0]);
  currentUser.findBookings(bookingsData);
  currentUser.calculateTotalMoneySpent(roomsData);
  console.log("updateUserValues", currentUser);

  let hotel = new Hotel(roomsData, bookingsData, customersData);
  hotel.findAvailableRooms(inputDate) 
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
}
