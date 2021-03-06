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
  findBookings(bookingsData) {
     let customerBookings = bookingsData.filter(booking => booking.userID === this.id);
     let today = dayjs()
     // .format('YYYY/MM/DD');
     // console.log('currentDate', today)

     customerBookings.forEach(booking => {
       let bookingDate = dayjs(booking.date);
       // console.log('testDayJs', bookingDate);
       if(bookingDate.isBefore(today, 'day') && (!this.pastBookings.includes(booking))) {
         this.pastBookings.push(booking);
         // console.log('past', this.pastBookings)
       } else if (bookingDate.isAfter(today, 'day') && (!this.futureBookings.includes(booking))){
         this.futureBookings.push(booking);
         // console.log('ft', this.futureBookings)
       } else if (bookingDate.isSame(today, 'day') && (!this.presentBookings.includes(booking))) {
         this.presentBookings.push(booking);
         // console.log('present', this.presentBookings)
       }
     })
   };
  calculateTotalMoneySpent(roomsData) {
    let sumRoomsCost = 0;
    roomsData.forEach(roomCost => {
      this.pastBookings.filter(bookings => {
        if (bookings.roomNumber === roomCost.number) {
          sumRoomsCost += roomCost.costPerNight
        }
      });
    });
    return this.hotelTotalSpent += parseInt(sumRoomsCost);
  };
};

export default User;
