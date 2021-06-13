import chai from 'chai';
const expect = chai.expect;

import User from '../src/classes/user.js';
import customersData from '../src/test-data/customersData.js'
import bookingsData from '../src/test-data/bookingsData.js'
import roomsData from '../src/test-data/roomsData.js'
// console.log(bookingsData);
describe('User', () => {

  let currentUser;

  beforeEach(() => {
    currentUser = new User(customersData[0]);
  });

  it.only('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it.only('should create new instances of User', () => {
    expect(currentUser).to.be.an.instanceof(User);
  });

  it.only('should be stored with an id number', () => {

    expect(currentUser.id).to.equal(1);
  });

  it.only('should store the name of the user', () => {

    expect(currentUser.name).to.equal('Leatha Ullrich');
  });

  it.only('should properties to storage past and upcoming bookings', () => {

    expect(currentUser.pastBookings).to.be.deep.equal([]);
    expect(currentUser.presentBookings).to.be.deep.equal([]);
    expect(currentUser.futureBookings).to.be.deep.equal([]);
  });

  it.only('should create and storage the user bookings history ', () => {

    currentUser.findPastBookings(bookingsData);

    expect(currentUser.pastBookings).to.be.deep.equal([{
      "id": "5fwrgu4i7k55hl77c",
      "userID": 1,
      "date": "2020/01/27",
      "roomNumber": 9,
      "roomServiceCharges": []
    },
    {
      "id": "5fwrgu4i7k55hl77i",
      "userID": 1,
      "date": "2020/01/22",
      "roomNumber": 6,
      "roomServiceCharges": []
    },
    {
      "id": "5fwrgu4i7k55hl77j",
      "userID": 1,
      "date": "2020/02/27",
      "roomNumber": 3,
      "roomServiceCharges": []
    }]);
  });

  it.only('should storage the number of the money spent in the hotel', () => {

    expect(currentUser.hotelTotalSpent).to.be.equal(0);
  });

  it.only('should storage a sum of the total spent money in the hotel', () => {

    currentUser.calculateTotalMoneySpent(roomsData);

    expect(currentUser.hotelTotalSpent).to.be.equal(0);

    currentUser.findPastBookings(bookingsData);
    currentUser.calculateTotalMoneySpent(roomsData);

    expect(currentUser.hotelTotalSpent).to.be.equal(1088.55);
  });
});
