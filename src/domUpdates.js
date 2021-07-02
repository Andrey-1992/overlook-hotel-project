let domUpdates = {
  displayGreetUser(user){
    userInfo.insertAdjacentHTML('afterbegin',
    `<h3 class="user-greeting" id="userGreeting">Welcome ${user.name}!</h3>
    <p class="total-spent" id="totalSpent">You have spent a total $ ${user.hotelTotalSpent} !</p>`)
  },
  displayHotelLogo(dateDayJs) {
    hotelInfo.insertAdjacentHTML('afterbegin',
    `<h1>Overlook Hotel</h1>
    <p>${dateDayJs}</p>`)
  },
  displayFutureBookings(currentUser, bookingsView) {
    bookingsView.innerHTML = '';
      if (currentUser.futureBookings.length) {
        return currentUser.futureBookings.forEach(futureBookings => {
          bookingsView.insertAdjacentHTML('afterbegin',
          `
          <div class="presentBookingInfo">
          <p>Your reservation is for:</p>
          <p>Date: ${futureBookings.date}</p>
          <p>Room# : ${futureBookings.roomNumber}</p>
          </div>`)
      })
    }
  },
  displayPastBookings(currentUser, bookingsView) {
    bookingsView.innerHTML = '';
      if (currentUser.pastBookings.length) {
        return currentUser.pastBookings.forEach(pastVisit => {
          bookingsView.insertAdjacentHTML('afterbegin',
          `
          <div class="presentBookingInfo">
          <p>Your reservation is for:</p>
          <p>Date: ${pastVisit.date}</p>
          <p>Room# : ${pastVisit.roomNumber}</p>
          </div>`)
      })
    }
  },
  displayPresentBookings(currentUser, bookingsView) {
  // console.log('testPresent', currentUser.presentBookings.length)
  bookingsView.innerHTML = '';
    if (currentUser.presentBookings.length) {
      return currentUser.presentBookings.forEach(presentBookings => {
        bookingsView.insertAdjacentHTML('afterbegin',
        `
        <div class="presentBookingInfo">
        <p>Your reservation is for:</p>
        <p>Date: ${presentBookings.date}</p>
        <p>Room# : ${presentBookings.roomNumber}</p>
        </div>`)
      })
    } else {
      return bookingsView.insertAdjacentHTML('afterbegin',
      `<p>You do not have any bookings for today !</p>`)
    }
  },
  displayBookingsByDate(hotel, showRoomsByDate, addBooking) {
    showRoomsByDate.innerHTML = '';
    return hotel.avaiableRooms.forEach(availableRoom => {
      let roomForm = document.createElement('form')
      // console.log(roomForm);
      roomForm.insertAdjacentHTML('afterbegin',
        `
        <section class="room-cards">
          <label class="room-info" for="roomInfo"></label>
            <p>Type: ${availableRoom.roomType}</p>
            <p>Bidet: ${availableRoom.bidet}</p>
            <p>Bed Size: ${availableRoom.bedSize}</p>
            <p>Cost per Night: ${availableRoom.costPerNight}</p>
            <p>Number of Beds# : ${availableRoom.numBeds}</p>
            <p class="room-num">Room# : ${availableRoom.number}</p>
            <br>
            <br>
            <br>
          <button type="submit" value="Book" id="makeBookingBtn">Book</button>
        </section>
      `)
      roomForm.addEventListener('submit', addBooking);
      showRoomsByDate.appendChild(roomForm);
    })
  }
}

export default  domUpdates;










// displayTotalSpent(user){
  //   userInfo.insertAdjacentHTML('afterend',
  //   `<p class="total-spent" id="totalSpent">You have spent a total $ ${user.hotelTotalSpent} !</p>`)
  // },
  // displayCurrentDate(date) {
    //   hotelInfo.insertAdjacentHTML('beforebegin',
    //   `<p>${date}</p>`)
    // },
    // displayPastBookings(currentUser, pastBookingsView) {
      //   pastBookingsView.innerHTML = '';
      //   return currentUser.pastBookings.forEach(pastVisit => {
        //     pastBookingsView.insertAdjacentHTML('afterbegin',
        //       `<p>Your past visit was on:</p>
        //       <p>-Date: ${pastVisit.date}, on room# ${pastVisit.roomNumber}</p>`)
        //   })
        // },
        // displayFutureBookings(currentUser, futureBookingsView) {
          //   // console.log('testFuture', currentUser.futureBookings.length)
          //   futureBookingsView.innerHTML = '';
          //     if (currentUser.futureBookings.length) {
            //       return currentUser.futureBookings.forEach(futureBookings => {
              //         futureBookingsView.insertAdjacentHTML('afterbegin',
              //         `<p>Your future visit will be on:</p>
              //         <p>-Date: ${futureBookings.date}, on room# ${futureBookings.roomNumber}</p>`)
              //       })
              //     } else {
                //       return futureBookingsView.insertAdjacentHTML('afterbegin',
                //       `<p>You do not have any future bookings !</p>`)
                //     }
                // },
