class Room {
  constructor(roomsData) {
    this.number = roomsData.number;
    this.roomType = roomBooking.roomType;
    this.bidet = roomBooking.bidet;
    this.bedSize = roomBooking.bedSize;
    this.numBeds = roomBooking.numBeds;
    this.costPerNight = roomBooking.costPerNight;
  }
};

export default Room;
