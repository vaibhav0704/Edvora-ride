// filtered the rides on the basis of states and/or cities
export const filterStates = (data, state, city) => {
  if(state && city) {
    const filteredRide = data.filter((ride) => (ride.state === state && ride.city === city));
    return filteredRide;
  }
  else if (state) {
    const filteredRide = data.filter((ride) => ride.state === state)
    return filteredRide;
  } else {
    return data
  }
}

// filtered rides on the basis of type selected
export const filterRide = (data, rideFilter, state, city, currentTimestamp) => {
  switch (rideFilter) {
    case "Nearest":
      const rides = filterStates(data, state, city);
      return rides;
    case "Upcoming":
      const Uprides = filterStates(data, state, city);
      const UpridesFiltered = Uprides.filter((ride) => ride.timestamp > currentTimestamp);
      return UpridesFiltered;
    case "Past":
      const Pastrides = filterStates(data, state, city);
      const PastridesFiltered = Pastrides.filter((ride) => ride.timestamp < currentTimestamp);
      return PastridesFiltered;
    default:
      return data;
  }
};

// get the list of cities when the state is selected by the user
export const cityFilter = (data, state) => {
  const filteredRide = data.filter((ride) => ride.state === state);
  let cities = [];
  filteredRide.map(ride => cities.push(ride.city));
  const cleanRide = (rides) => rides.filter((v,i) => rides.indexOf(v) === i);
  cities = cleanRide(cities);
  return cities;
}

