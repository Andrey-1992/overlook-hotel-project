let domUpdates = {
  displayGreetUser(user){
    // const userName = document.getElementById('userGreeting');
    // userName.innerHTML = `Welcome ${user.name}!`;
    userInfo.insertAdjacentHTML('afterbegin',
    `<h3 class="user-greeting" id="userGreeting">Welcome ${user.name}!</h3>
    <p class="total-spent" id="totalSpent">You have spent a total of: ${user.hotelTotalSpent} !</p>`)
  },
  displayCurrentDate(date) {
    hotelInfo.insertAdjacentHTML('afterbegin',
    `<h1>Overlook Hotel</h1>
    <p>${date}</p>`)
  },
  displayPastBookings(currentUser, pastBookingsView) {
  // pastBookingsView.innerHTML = '';
  currentUser.pastBookings.forEach(pastVisit => {
    pastBookingsView.insertAdjacentHTML('afterbegin',
   `<p>You stay on room ${pastVisits.roomNumber} on ${pastVisits.date}</p>`)
    })
  },
  displayPresentBookings(currentUser, presentBookingsView) {
  // presentBookingsView.innerHTML = '';
  currentUser.presentBookings.forEach(pastVisit => {
    if (!currentUser.presentBookings) {
      presentBookingsView.insertAdjacentHTML('afterbegin',
     `<p>You do not have any bookings for today !</p>`)
    } else {
      presentBookingsView.insertAdjacentHTML('afterbegin',
     `<p>You stay on room ${pastVisits.roomNumber} on ${pastVisits.date}</p>`)
    }
    })
  },
  displayFutureBookings(currentUser, futureBookingsView) {
  // futureBookingsView.innerHTML = '';
  currentUser.futureBookings.forEach(pastVisit => {
    if (!currentUser.futureBookings) {
      futureBookingsView.insertAdjacentHTML('afterbegin',
     `<p>You do not have any bookings for the future !</p>`)
    } else {
      futureBookingsView.insertAdjacentHTML('afterbegin',
     `<p>You stay on room ${pastVisits.roomNumber} on ${pastVisits.date}</p>`)
    }
    })
  }
}

export default  domUpdates;




// displayTotalSpent(user){
  //   const userTotalSpent = document.getElementById('totalSpent');
  //   userTotalSpent.innerHTML = `You have spent a total of: $ ${user.hotelTotalSpent}`;
  // },
