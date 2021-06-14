class Hotel {
  constructor(roomsData, bookingsData, customersData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.customers = customersData;
    this.avaiableRooms = [];
  }

  findRoomsAvaiable(date) {
      const bookedRoomNumbers = this.bookings.reduce((roomNumbers, booking) => {
        if (booking.date === date) {
          roomNumbers.push(booking.roomNumber);
        }
        // console.log(roomNumbers)
        return roomNumbers;
      }, []);
      const openRooms = this.rooms.filter(room => bookedRoomNumbers.includes(room.number));
      this.avaiableRooms = openRooms;
      return this.avaiableRooms
    }

  filterRoomsByType(roomtype) {
    // if (roomtype === 'all rooms') {
    //   return this.avaiableRooms;
    // }
    return this.avaiableRooms.filter(room => room.roomType === roomtype)
  }
}

export default Hotel;
