const dummyData = [
  {
    id: 1,
    name: 'Car',
    passenger_limit: 4,
    luggage_limit: 2,
    cost_in_inr: 2000,
    pickup_location: 'City Center',
    drop_location: 'Airport',
  },
  {
    id: 2,
    name: 'Bus',
    passenger_limit: 30,
    luggage_limit: 10,
    cost_in_inr: 5000,
    pickup_location: 'Bus Station',
    drop_location: 'Hotel',
  },
  {
    id: 3,
    name: 'Bike',
    passenger_limit: 1,
    luggage_limit: 1,
    cost_in_inr: 500,
    pickup_location: 'Beach',
    drop_location: 'City Outskirts',
  },
  {
    id: 4,
    name: 'SUV',
    passenger_limit: 5,
    luggage_limit: 4,
    cost_in_inr: 2500,
    pickup_location: 'Residential Area',
    drop_location: 'National Park',
  },
  {
    id: 5,
    name: 'Mini Van',
    passenger_limit: 10,
    luggage_limit: 6,
    cost_in_inr: 3500,
    pickup_location: 'Shopping Mall',
    drop_location: 'Cruise Terminal',
  },
  {
    id: 6,
    name: 'Motorcycle',
    passenger_limit: 2,
    luggage_limit: 1,
    cost_in_inr: 1000,
    pickup_location: 'Suburb',
    drop_location: 'Hilltop',
  },
  {
    id: 7,
    name: 'Luxury Sedan',
    passenger_limit: 3,
    luggage_limit: 2,
    cost_in_inr: 3500,
    pickup_location: 'Airport',
    drop_location: 'Hotel',
  },
  {
    id: 8,
    name: 'Truck',
    passenger_limit: 2,
    luggage_limit: 2000,
    cost_in_inr: 8000,
    pickup_location: 'Warehouse',
    drop_location: 'Industrial Area',
  },
  {
    id: 9,
    name: 'RV',
    passenger_limit: 6,
    luggage_limit: 8,
    cost_in_inr: 6000,
    pickup_location: 'Camping Site',
    drop_location: 'Nature Park',
  },
  {
    id: 10,
    name: 'Rickshaw',
    passenger_limit: 3,
    luggage_limit: 1,
    cost_in_inr: 300,
    pickup_location: 'Market',
    drop_location: 'Residential Area',
  },
  {
    id: 11,
    name: 'Luxury Coach',
    passenger_limit: 20,
    luggage_limit: 15,
    cost_in_inr: 8000,
    pickup_location: 'Event Venue',
    drop_location: 'Resort',
  },
  {
    id: 12,
    name: 'Helicopter',
    passenger_limit: 4,
    luggage_limit: 2,
    cost_in_inr: 20000,
    pickup_location: 'Heliport',
    drop_location: 'Island',
  },
  {
    id: 13,
    name: 'Boat',
    passenger_limit: 8,
    luggage_limit: 5,
    cost_in_inr: 4000,
    pickup_location: 'Harbor',
    drop_location: 'Beach Resort',
  },
  {
    id: 14,
    name: 'Limousine',
    passenger_limit: 5,
    luggage_limit: 3,
    cost_in_inr: 10000,
    pickup_location: 'Airport',
    drop_location: 'Luxury Hotel',
  },
  {
    id: 15,
    name: 'Van',
    passenger_limit: 8,
    luggage_limit: 4,
    cost_in_inr: 3000,
    pickup_location: 'City Center',
    drop_location: 'Amusement Park',
  },
  {
    id: 16,
    name: 'Tuk Tuk',
    passenger_limit: 3,
    luggage_limit: 1,
    cost_in_inr: 400,
    pickup_location: 'Tourist Spot',
    drop_location: 'Historic Site',
  },
  {
    id: 17,
    name: 'Convertible',
    passenger_limit: 2,
    luggage_limit: 1,
    cost_in_inr: 5000,
    pickup_location: 'Resort',
    drop_location: 'Scenic Overlook',
  },
  {
    id: 18,
    name: 'Scooter',
    passenger_limit: 1,
    luggage_limit: 1,
    cost_in_inr: 300,
    pickup_location: 'Downtown',
    drop_location: 'Park',
  },
  {
    id: 19,
    name: 'Ambulance',
    passenger_limit: 2,
    luggage_limit: 2,
    cost_in_inr: 5000,
    pickup_location: 'Hospital',
    drop_location: 'Medical Center',
  },
  {
    id: 20,
    name: 'Segway',
    passenger_limit: 1,
    luggage_limit: 1,
    cost_in_inr: 800,
    pickup_location: 'Tourist Attraction',
    drop_location: 'Park Entrance',
  },
  {
    id: 21,
    name: 'Horse Carriage',
    passenger_limit: 4,
    luggage_limit: 1,
    cost_in_inr: 1000,
    pickup_location: 'Old Town',
    drop_location: 'City Square',
  },
  {
    id: 22,
    name: 'Catamaran',
    passenger_limit: 10,
    luggage_limit: 8,
    cost_in_inr: 7000,
    pickup_location: 'Marina',
    drop_location: 'Island Resort',
  },
  {
    id: 23,
    name: 'Motorhome',
    passenger_limit: 4,
    luggage_limit: 6,
    cost_in_inr: 5000,
    pickup_location: 'RV Park',
    drop_location: 'Mountain Campsite',
  },
  {
    id: 24,
    name: 'Jet Ski',
    passenger_limit: 2,
    luggage_limit: 1,
    cost_in_inr: 3000,
    pickup_location: 'Beach',
    drop_location: 'Island',
  },
  {
    id: 25,
    name: 'Horse',
    passenger_limit: 1,
    luggage_limit: 1,
    cost_in_inr: 200,
    pickup_location: 'Stable',
    drop_location: 'Scenic Trail',
  },
  {
    id: 26,
    name: 'Luxury Yacht',
    passenger_limit: 20,
    luggage_limit: 15,
    cost_in_inr: 15000,
    pickup_location: 'Yacht Club',
    drop_location: 'Exotic Island',
  },
  {
    id: 27,
    name: 'Golf Cart',
    passenger_limit: 2,
    luggage_limit: 1,
    cost_in_inr: 1000,
    pickup_location: 'Golf Course',
    drop_location: 'Country Club',
  },
  {
    id: 28,
    name: 'Camper Van',
    passenger_limit: 4,
    luggage_limit: 4,
    cost_in_inr: 4000,
    pickup_location: 'Camping Ground',
    drop_location: 'Lakeside',
  },
  {
    id: 29,
    name: 'Limousine Bus',
    passenger_limit: 15,
    luggage_limit: 10,
    cost_in_inr: 10000,
    pickup_location: 'Airport',
    drop_location: 'Concert Venue',
  },
  {
    id: 30,
    name: 'Hot Air Balloon',
    passenger_limit: 6,
    luggage_limit: 2,
    cost_in_inr: 6000,
    pickup_location: 'Field',
    drop_location: 'Sky Overlook',
  },
]

export default dummyData
