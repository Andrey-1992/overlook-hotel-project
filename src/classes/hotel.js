class Hotel {
  constructor(roomsData, bookingsData, customersData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.customers = customersData;
    this.avaiableRooms = [];
  }
  findAvailableRooms(inputDate) {
      const bookedRoomNumbers = this.bookings.reduce((roomNumbers, booking) => {
        if (!booking.date.includes(inputDate)) {
          roomNumbers.push(booking.roomNumber);
        }
        return roomNumbers;
      }, []);
      // console.log('findBookings', bookedRoomNumbers);
      const openRooms = this.rooms.filter(room => bookedRoomNumbers.includes(room.number));
      // console.log('matchBooksWithRooms', openRooms);
      this.avaiableRooms = openRooms;
      // console.log("assignInAvailableRooms", this.avaiableRooms);
      return this.avaiableRooms
    }

  filterRoomsByType(roomtype) {
    if (roomtype === 'all rooms') {
      return this.avaiableRooms;
    }
    return this.avaiableRooms.filter(room => room.roomType === roomtype)
  }
}

export default Hotel;
