class Hotel {
  constructor(roomsData, bookingsData, customersData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.customers = customersData;
    this.avaiableRooms = [];
  }
  findAvailableRooms(inputDate) {
    // 1. This method could be used in the scipt.js to take the "input.value" as an argument and compare with the roomsData.
      const bookedRoomNumbers = this.bookings.reduce((roomNumbers, booking) => {
        if (booking.date === inputDate) {
          roomNumbers.push(booking.roomNumber);
        }
        return roomNumbers;
      }, []);
      console.log('findBookings', bookedRoomNumbers);
      // Now that we found the available bokings dates and storage that information into an array called "bookedRoomNumbers, we need to find the rooms that match with that booking date, in order to be able to display them.
      // 2. With  "openRooms" variable we are iterating over the roomsData to find and match the rooms that we storage in ou previous array wchioch is holding the availables  booking dates for the user's request.
      const openRooms = this.rooms.filter(room => bookedRoomNumbers.includes(room.number));
      console.log('matchBooksWithRooms', openRooms);
      // 3. now that we already match our bookings dates and find the rooms data to disolay on the DOM, we will reassing the property of this.avaiableRooms with this information, which will not contain dates, it will contain the rooms availables from those dates.
      this.avaiableRooms = openRooms;
      console.log("assignInAvailableRooms", avaiableRooms);
      // 4. We just will return all this proces and have this property ready to be display on the DOM.
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
