import chai from 'chai';
const expect = chai.expect;

import Room from '../src/classes/rooms.js';
import roomsData from '../src/test-data/roomsData.js'
// console.log(roomsData);

describe('Room', () => {

  let roomBooking;

  beforeEach(() => {
    roomBooking = new Room(roomsData[0]);
  });

  it('should be a function', () => {

    expect(Room).to.be.a('function');
  });

  it('should create new instances of User', () => {
    expect(roomBooking).to.be.an.instanceof(Room);
  });

  it('should be have a room number', () => {

    expect(roomBooking.number).to.equal(1);
  });

  it('should indicate the type of the room', () => {
    expect(roomBooking.roomType).to.equal('residential suite');
  });

  it('should indicate if it has a bidet on it', () => {
    expect(roomBooking.bidet).to.be.equal(true);
  });

  it('should indicate the type of the room', () => {
    expect(roomBooking.bedSize).to.equal('queen');
  });

  it('should indicate the number of beds per room', () => {
    expect(roomBooking.numBeds).to.be.equal(1);
  });

  it('should indicate the cost per night per room', () => {
    expect(roomBooking.costPerNight).to.be.equal(358.4);
  });
});
