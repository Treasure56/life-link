"use client"

import { useChangeSearchParams } from "@/hooks/useChangeSearchParams";

export default function LocationSelect() {
    const {params, pushParams} = useChangeSearchParams()
    return (
            <select onChange={(e)=>{
                pushParams({location:e.target.value})

            }} defaultValue={params.get("location")?? ""} className="border p-2 rounded-md outline-green-500">
                <option value="">All</option>
                <option value="New York, NY">New York, NY</option>
                <option value="Los Angeles, CA">Los Angeles, CA</option>
                <option value="Chicago, IL">Chicago, IL</option>
                <option value="Houston, TX">Houston, TX</option>
                <option value="Phoenix, AZ">Phoenix, AZ</option>
                <option value="Philadelphia, PA">Philadelphia, PA</option>
                <option value="San Antonio, TX">San Antonio, TX</option>
                <option value="San Diego, CA">San Diego, CA</option>
                <option value="Dallas, TX">Dallas, TX</option>
                <option value="San Jose, CA">San Jose, CA</option>
            </select>
    );
}