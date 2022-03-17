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

