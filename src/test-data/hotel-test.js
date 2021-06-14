import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel.js';
import customersData from '../src/test-data/customersData.js'
import bookingsData from '../src/test-data/bookingsData.js'
import roomsData from '../src/test-data/roomsData.js'

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(roomsData, bookingsData, customersData);
  })

  it.only('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it.only('should be an instance of Hotel', () => {

    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should hold a list of bookings, rooms and customers', () => {

    expect(hotel.rooms).to.deep.equal(roomData);
    expect(hotel.bookings).to.deep.equal(bookingData);
    expect(hotel.customers).to.deep.equal(customersData);
  });

  it('should properties to storage available rooms', () => {

    expect(hotel.avaiableRooms).to.deep.equal([]);
  });


  it('should get all avaiable rooms from a given date', () => {

    expect(hotel.findRoomsAvaiable('2020/01/27')).to.deep.equal([roomsData[0], roomData[4]]);
  });

  it('should be able to filter avaiable rooms by type', () => {

    hotel.findRoomsAvaiable('2020/01/27');

    expect(hotel.filterRoomsByType('queen')).to.deep.equal([roomData[0]]);
  });
});
