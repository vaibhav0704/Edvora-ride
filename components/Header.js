import Image from 'next/image'
import React from 'react'

function Header({ profile }) {
  return (
    <div className="sticky w-full h-20 flex items-center bg-black-950 justify-between px-8">
      <h1 className="text-4xl text-white font-bold">Edvora</h1>
      <div className="flex justify-betwen items-center justify-around w-1/6">
        <p className="text-xl text-white font-bold">{profile.name}</p>
        <Image 
          src={profile.url}
          className="rounded-full" 
          height="50" 
          width="50" 
        />
      </div>
    </div>
  )
}

export default Header