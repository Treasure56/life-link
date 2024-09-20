"use client"
import { useChangeSearchParams } from "@/hooks/useChangeSearchParams";

export default function PriceSelect() {
    const {params, pushParams} = useChangeSearchParams()

    return (
       <select onChange={(e) =>{
        const value =e.target.value.split("-")
        const [priceFrom, priceTo] =value.length == 2?value:["",""]
        pushParams({priceFrom, priceTo})
       }} className="border p-2 rounded-md outline-green-500" defaultValue={params.get("priceFrom")+"-" + params.get("priceTo")}>
        <option value="">All</option>
        <option value="0-100">$0 - $100</option>
        <option value="101-200">$101 - $200</option>
        <option value="201-300">$201 - $300</option>
        <option value="301-400">$301 - $400</option>
        <option value="401-500">$401 - $500</option>
        <option value="501-750">$501 - $750</option>
        <option value="751-1000">$751 - $1000</option>
       </select>
    );
}