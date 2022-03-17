import React, { useEffect, useState } from 'react';
import { 
  ChevronLeftIcon, 
  MenuAlt2Icon, 
  ChevronRightIcon 
} from "@heroicons/react/solid";
import Ride from './Ride';
import { cityFilter, filterRide } from '../utils/rideFilter';

function Body ({ data, states, currentTimestamp }) {
  const [rides, setRides] = useState(data);
  const [rideFilter, setRideFilter] = useState('Nearest');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [open, setOpen] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);
  const [cityMenu, setCityMenu] = useState(false);

  useEffect(() => {
    const newRideList = filterRide(data, rideFilter, state, city, currentTimestamp);
    setRides(newRideList);
  }, [rideFilter, state, city]);

  const changeState = (newState) => {
    const cities = cityFilter(data, newState)
    setCityList(cities)
    setStateMenu(false);
    setCity('');
    setState(newState);
  };

  const changeCity = (city) => {
    setCityMenu(false);
    setCity(city);
  };

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

        <div 
          className="flex items-center justify-between w-22 cursor-pointer"
        >
          <MenuAlt2Icon 
            onClick={() => {
              setOpen(!open);
              setStateMenu(false);
              setCityMenu(false);
            }}
            className="h-8 w-8 text-white" 
          />
          <p
            onClick={() => {
              setOpen(!open);
              setStateMenu(false);
              setCityMenu(false);
            }} 
            className="text-lg text-white"
          >Filter</p>
          {open && (
            <div className="absolute flex-col top-36 w-48 p-4 -translate-x-2/4 bg-black-950 rounded-2xl overflow-hidden justify-center">
              <div className="w-full">
                <p className="text-white mb-2 ml-2 font-extralight">Filters</p>
                <hr className="text-white mb-4" />
                <div 
                  onClick={() => {
                    setOpen(!open);
                    setStateMenu(!stateMenu);
                  }}
                  className="h-8 flex items-center justify-around rounded-xl mb-4 bg-zinc-850" 
                >
                  <p className="text-white">State</p>
                  <ChevronRightIcon className="h-3/4 text-white" />
                </div>
                <div 
                  onClick={() => {
                    setOpen(!open);
                    setCityMenu(!cityMenu);
                  }}                  
                  className="h-8 flex items-center justify-around rounded-xl bg-zinc-850"
                >
                  <p className="text-white">Cities</p>
                  <ChevronRightIcon className="h-3/4 text-white" />
                </div>
              </div>
            </div>
          )}
          {stateMenu && (
            <div className="absolute flex-col top-36 w-70 p-4 h-1/2 -translate-x-3/4 bg-black-950 rounded-2xl overflow-scroll">
              <ChevronLeftIcon onClick={() => {
                setStateMenu(false);
                setOpen(true);
              }} 
              className="text-white h-8 mb-2"
              />
              <hr className="text-white mb-4"/>
              {states.map(state => (
                <div 
                  id={state}
                  key={state}
                  onClick={(e) => changeState(e.target.innerText)}
                  className="h-12 w-60 flex items-center justify-around rounded-xl mb-4 bg-zinc-850"
                >
                  <p className="text-white">{state}</p>
                </div>
              ))}
            </div>
          )}
          {cityMenu && (
            <div className="absolute flex-col top-36 w-70 p-4 h-1/2 -translate-x-3/4 bg-black-950 rounded-2xl overflow-scroll">
            <ChevronLeftIcon onClick={() => {
              setCityMenu(false);
              setOpen(true);
            }} 
            className="text-white h-8 mb-2"
            />
            <hr className="text-white mb-4"/>

            {cityList && cityList.map(city => (
              <div 
                id={city}
                key={city}
                onClick={(e) => changeCity(e.target.innerText)}
                className="h-12 w-60 flex items-center justify-around rounded-xl mb-4 bg-zinc-850"
              >
                <p className="text-white">{city}</p>
              </div>
            ))}
          </div>
          )}
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
          city={ride.city}
          state={ride.state}
        />
      ))
      }
    </div>
  )
};


export default Body 
