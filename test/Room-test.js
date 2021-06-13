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
    console.log(roomBooking);
    expect(roomBooking).to.be.an.instanceof(Room);
  });

  it('should be have a room number', () => {

    expect(roomBooking.number).to.equal(1);
  });

  it('should indicate the type of the room', () => {
    expect(currentUser.roomType).to.equal('residential suite');
  });

  it('should indicate if it has a bidet on it', () => {
    expect(currentUser.bidet).to.be.boolean();
  });

  it('should indicate the type of the room', () => {
    expect(currentUser.bedSize).to.equal('queen');
  });

  it('should indicate the number of beds per room', () => {
    expect(currentUser.numBeds).to.be.number();
  });

  it('should indicate the cost per night per room', () => {
    expect(currentUser.costPerNight).to.be.equal(358.4);
  });
});
