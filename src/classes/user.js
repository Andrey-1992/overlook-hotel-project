class User {
  constructor(clientData) {
    this.id = clientData.id;
    this.name = clientData.name;
    this.pastBookings = [];
    this.presentBookings = [];
    this.futureBookings = [];
    this.hotelTotalSpent = 0;
  };
  findPastBookings(bookingsData) {
    let findBookings = bookingsData.filter(booking => {
      if (booking.userID === this.id) {
        this.pastBookings.push(booking);
      }
    })
    return findBookings;
  };
  findUpcomingBookings(bookingsData) {
    let findBookings = bookingsData.filter(booking => {
      if (booking.userID === this.id) {
        this.presentBookings.push(booking);
      }
    })
    return findBookings;
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
    return this.hotelTotalSpent = sumRoomsCost;
  };
};

export default User;
