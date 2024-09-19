/* eslint-disable @next/next/no-img-element */
import { EAbulance } from '@/types/eabulance'
import { Truck } from 'lucide-react'


export default function AmbulanceCard({ name, vehicleType, img, location, price }: EAbulance) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={img}
          alt={`${name} - ${vehicleType}`}
          className="transition-transform duration-300 ease-in-out w-full aspect-square"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <Truck className="w-4 h-4 mr-2" />
          <span>{vehicleType}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
          <button className="bg-primary hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}