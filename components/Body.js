import React, { useEffect, useState } from 'react';
import { MenuAlt2Icon } from "@heroicons/react/solid";
import Ride from './Ride';
import { filterRide } from '../utils/rideFilter';

function Body ({ data, profileData, states, currentTimestamp }) {
  const [rides, setRides] = useState(data);
  const [rideFilter, setRideFilter] = useState('Nearest');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    const newRideList = filterRide(data, rideFilter, state, city, currentTimestamp);
    setRides(newRideList);
  }, [rideFilter, state, city]);

  return (
    <div className="min-h-screen w-full h-full bg-zinc-750 px-8 pb-8">
      {/* selector component */}
      <div className="w-full h-20 flex items-center justify-between">

        <div className="flex w-4/12 justify-between">
          <p 
            onClick={() => setRideFilter('Nearest')}
            className="text-lg text-white underline cursor-pointer"
          >Nearest rides</p>
          <p 
            onClick={() => setRideFilter('Upcoming')}
            className="text-lg text-white underline cursor-pointer"
          >Upcoming rides</p>
          <p
            onClick={() => setRideFilter('Past')}
            className="text-lg text-white underline cursor-pointer"
          >Past rides</p>
        </div>

        <div className="flex items-center justify-between w-22 cursor-pointer">
          <MenuAlt2Icon className="h-8 w-8 text-white" />
          <p className="text-lg text-white">Filter</p>
        </div>

      </div>

      {/* ride list */}
      {rides.map((ride) => (
        <Ride 
          key={ride.station_path}
          img={ride.map_url}
          id={ride.id}
          origin={ride.origin_station_code}
          station={ride.station_path}
          date={ride.date}
          distance={ride.distance}
        />
      ))

      }
    </div>

  )
}

export default Body 