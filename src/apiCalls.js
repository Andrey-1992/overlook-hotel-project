export const fetchCalls = {

  callCustomersData() {
    return fetch('http://localhost:3001/api/v1/customers')
      .then(response => response.json())
      // .then(data => data)
      .catch(err => console.error(err))
  },

  callBookingsData() {
    return fetch('http://localhost:3001/api/v1/bookings')
      .then(response => response.json())
      // .then(data => data)
      .catch(err => console.error(err))
  },

  callRoomsData() {
    return fetch('http://localhost:3001/api/v1/rooms')
      .then(response => response.json())
      // .then(data => data)
      .catch(err => console.error(err))
  }
};
