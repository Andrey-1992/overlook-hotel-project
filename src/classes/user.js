import dayjs from 'dayjs';

class User {
  constructor(clientData) {
    this.id = clientData.id;
    this.name = clientData.name;
    this.pastBookings = [];
    this.presentBookings = [];
    this.futureBookings = [];
    this.hotelTotalSpent = 0;
  };
  // findPastBookings(bookingsData) {
  //   let findBookings = bookingsData.filter(booking => {
  //     if (booking.userID === this.id) {
  //       this.pastBookings.push(booking);
  //     }
  //   })
  //   return findBookings;
  // };
  // // Is using the data from "bookingsData" to iterate over thids array and find the price from this array
  // findPresentBookings(bookingsData) {
  //   let findBookings = bookingsData.filter(booking => {
  //     if (booking.userID === this.id) {
  //       // (booking.userID === this.id && booking.date === current Date)
  //       this.presentBookings.push(booking);
  //     }
  //   })
  //   return findBookings;
  // };
  // findFutureBookings(bookingsData) {
  //   let findBookings = bookingsData.filter(booking => {
  //     if (booking.userID === this.id) {
  //       // (booking.userID === this.id && booking.date === current Date)
  //       this.futureBookings.push(booking);
  //     }
  //   })
  //   return findBookings;
  // };


  findBookings(bookingsData) {
     let customerBookings = bookingsData.filter(booking => booking.userID === this.id);
     let today = dayjs();

     customerBookings.forEach(booking => {
       let bookingDate = dayjs(booking.date);
       if(bookingDate.isBefore(today, 'day')) {
         this.pastBookings.push(booking);
       } else if (bookingDate.isAfter(today, 'day')){
         this.futureBookings.push(booking);
       } else if (bookingDate.isSame(today, 'day')) {
         this.presentBookings.push(booking);
       }
     })
     //
     // this.addToTotalSpent(hotel);
     //
     // return { completedBookings: this.completedBookings, currentBookings: this.currentBookings, upcomingBookings: this.upcomingBookings };
   }


  // Is using the data from "roosData" to iterate over thids array and find the price from this array
  calculateTotalMoneySpent(roomsData) {
    let sumRoomsCost = 0;
    roomsData.forEach(roomCost => {
      this.pastBookings.filter(bookings => {
        if (bookings.roomNumber === roomCost.number) {
          sumRoomsCost += roomCost.costPerNight
        }
      });
    });
    return this.hotelTotalSpent = sumRoomsCost;
  };
};

export default User;
