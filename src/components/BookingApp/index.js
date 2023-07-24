import {useState} from 'react'
import dummyData from './dummyData'
import './index.css'

const BookingApp = () => {
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')

  const [selectedDate, setSelectedDate] = useState('')
  const [vehicles, setVehicles] = useState([])

  const handleSearch = () => {
    const filteredVehicles = dummyData.filter(
      vehicle =>
        vehicle.pickup_location.toLowerCase() === pointA.toLowerCase() &&
        vehicle.drop_location.toLowerCase() === pointB.toLowerCase(),
    )

    setVehicles(filteredVehicles)
  }

  return (
    <div className="head-container">
      <h1 className="heading">Airport Transfer Booking App</h1>
      <div>
        <label htmlFor="pointA">From:</label>
        <input
          className="point-a"
          type="text"
          id="pointA"
          value={pointA}
          onChange={e => setPointA(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pointB">To:</label>
        <input
          className="point-b"
          type="text"
          id="pointB"
          value={pointB}
          onChange={e => setPointB(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="selectedDate">Date:</label>
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
      </div>
      <button type="submit" className="button" onClick={handleSearch}>
        Search
      </button>
      <div className="vehicle">
        <h2>Available Vehicles:</h2>
        <ul className="vehicle-list">
          {vehicles.map(vehicle => (
            <li key={vehicle.id}>
              <strong>Name:</strong> {vehicle.name}
              <br />
              <strong>Passenger Limit:</strong> {vehicle.passenger_limit}
              <br />
              <strong>Luggage Limit:</strong> {vehicle.luggage_limit}
              <br />
              <strong>Cost (INR):</strong> {vehicle.cost_in_inr}
              <br />
              <strong>Pickup Location:</strong> {vehicle.pickup_location}
              <br />
              <strong>Drop Location:</strong> {vehicle.drop_location}
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BookingApp
