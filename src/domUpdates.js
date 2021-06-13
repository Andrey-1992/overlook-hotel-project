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
  // const result = nationalParks.reduce((accum, parkAct) => {
  //   parkAct.activities.forEach(act => {
  //     if (!accum.includes(act)) {
  //       accum.push(act);
  //       // console.log(parkAct);
  //     }
  //   });
  //   return accum;
  // }, []);
  // Probaly I need one more layer of iteration , due to I'm already iterating over the properties of that object, now one more layeer of iterating so i can foun the values that I'm trying to rearch.
  // parkAct.pastBookings
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
