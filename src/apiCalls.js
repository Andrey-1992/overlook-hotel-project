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
  },

  callCustomersIdData(userIdNum) {
    return fetch(`http://localhost:3001/api/v1/customers/${userIdNum}`)
      .then(response => response.json())
      // .then(data => data)
      .catch(err => console.error(err))
  },

  postNewRoomBooking(body) {
    return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(confirmation => console.log(confirmation));
  }
};
