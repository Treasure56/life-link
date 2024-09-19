"use client"
import { useChangeSearchParams } from "@/hooks/useChangeSearchParams";
import { useState } from "react";

export default function Search() {
    const {params, pushParams} = useChangeSearchParams()
    const [searchQuery, setSearchQuery] = useState(params.get('query')??'')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Implement your search logic here
      pushParams({query:searchQuery})
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          </div>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-white font-medium rounded-r-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
          Search
        </button>
      </form>
    );
}