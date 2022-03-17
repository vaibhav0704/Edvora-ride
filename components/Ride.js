import Image from 'next/image'
import React from 'react'

function Ride({ img, id, origin, station, date, distance }) {
  return (
    <div className="w-full h-48 bg-black-950 rounded-lg flex justify-start items-center px-6 mb-8">
      <Image src={img}
        className="rounded"
        height="148"
        width="296"
      />
      <div className="ml-6">
        <p className="text-lg text-gray-400">Ride Id: {id}</p>
        <p className="text-lg text-gray-400">Origin Sation: {origin}</p>
        <p className="text-lg text-gray-400">station path: {station}</p>
        <p className="text-lg text-gray-400">Date: {date}</p>
        <p className="text-lg text-gray-400">Distance: {distance}</p>
      </div>
    </div>
  )
}

export default Ride