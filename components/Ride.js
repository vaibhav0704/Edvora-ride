import Image from 'next/image'
import React from 'react'

function Ride({ img, id, origin, station, date, distance, city, state }) {
  return (
    <div className="w-full h-48 bg-black-850 rounded-lg flex justify-between items-start py-6 px-6 mb-8">
      <div className="w-3/4 flex flex-start items-center">
        <Image src={img}
          className="rounded"
          height="148"
          width="296"
        />
        <div className="ml-6">
          <p className="text-lg text-gray-400">Ride Id: {id}</p>
          <p className="text-lg text-gray-400">Origin Sation: {origin}</p>
          <p className="text-lg text-gray-400">station path: {JSON.stringify(station)}</p>
          <p className="text-lg text-gray-400">Date: {date}</p>
          <p className="text-lg text-gray-400">Distance: {distance}</p>
        </div>
      </div>
      <div className="mr-4 flex justify-center w-1/6 ">
        <div className="bg-black-950 items-start px-4 py-1 mr-4 rounded-xl">
          <p className="text-white text-xs">{city}</p>
        </div>
        <div className="bg-black-950 items-start px-4 py-1 mr-4 rounded-xl">
          <p className="text-white text-xs">{state}</p>
        </div>
      </div>
    </div>
  )
}

export default Ride