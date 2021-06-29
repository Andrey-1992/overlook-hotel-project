let domUpdates = {
  displayGreetUser(user){
    userInfo.insertAdjacentHTML('afterbegin',
    `<h3 class="user-greeting" id="userGreeting">Welcome ${user.name}!</h3>
     <p class="total-spent" id="totalSpent">You have spent a total $ ${user.hotelTotalSpent} !</p>`)
  },
  displayCurrentDate(date) {
    hotelInfo.insertAdjacentHTML('afterbegin',
    `<h1>Overlook Hotel</h1>
     <p>${date}</p>`)
  },
  displayTotalSpent(user){
    const userTotalSpent = document.getElementById('totalSpent');
    userTotalSpent.innerHTML = `You have spent a total of: $ ${user.hotelTotalSpent}`;
  },
  displayPastBookings(currentUser, pastBookingsView) {
    pastBookingsView.innerHTML = '';
    return currentUser.pastBookings.forEach(pastVisit => {
      pastBookingsView.insertAdjacentHTML('afterbegin',
        `<p>Your past visit was on:</p>
        <p>-Date: ${pastVisit.date}, on room# ${pastVisit.roomNumber}</p>`)
    })
  },
  displayPresentBookings(currentUser, presentBookingsView) {
  // console.log('testPresent', currentUser.presentBookings.length)
  presentBookingsView.innerHTML = '';
    if (currentUser.presentBookings.length) {
      return currentUser.presentBookings.forEach(presentBookings => {
        presentBookingsView.insertAdjacentHTML('afterbegin',
        `<p>Your present visit is on:</p>
        <p>-Date: ${presentBookings.date}, on room# ${presentBookings.roomNumber}</p>`)
      })
    } else {
      return presentBookingsView.insertAdjacentHTML('afterbegin',
      `<p>You do not have any bookings for today !</p>`)
    }
  },
  displayFutureBookings(currentUser, futureBookingsView) {
    // console.log('testFuture', currentUser.futureBookings.length)
    futureBookingsView.innerHTML = '';
      if (currentUser.futureBookings.length) {
        return currentUser.futureBookings.forEach(futureBookings => {
          futureBookingsView.insertAdjacentHTML('afterbegin',
          `<p>Your future visit will be on:</p>
          <p>-Date: ${futureBookings.date}, on room# ${futureBookings.roomNumber}</p>`)
        })
      } else {
        return futureBookingsView.insertAdjacentHTML('afterbegin',
        `<p>You do not have any future bookings !</p>`)
      }
  },
  displayBookingsByDate(hotel, showRoomsByDate, addBooking) {
    showRoomsByDate.innerHTML = '';
    return hotel.avaiableRooms.forEach(availableRoom => {
      let roomForm = document.createElement('form')
      // console.log(roomForm);
      roomForm.insertAdjacentHTML('afterbegin',
        `
          <label class="room-info" for="roomInfo">Room's Info:</label>
            <p class="room-num">Room# : ${availableRoom.number}</p>
            <p>Type: ${availableRoom.roomType}</p>
            <p>Bidet: ${availableRoom.bidet}</p>
            <p>Bed Size: ${availableRoom.bedSize}</p>
            <p>Number of Beds# : ${availableRoom.numBeds}</p>
            <p>Cost per Night: ${availableRoom.costPerNight}</p>
          <button type="submit" value="Book" id="makeBookingBtn">Book</button>
      `)
      roomForm.addEventListener('submit', addBooking);
      showRoomsByDate.appendChild(roomForm);
    })
  }
}

export default  domUpdates;
