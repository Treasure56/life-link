"use server"

import { AMBULANCES } from "@/types/eabulance";

type AmbulanceFilter = {
    query?: string;
    location?: string;
    priceFrom?: number;
    priceTo?: number;
}

export default async function fetchAmbulances(filters: AmbulanceFilter) {
    return AMBULANCES.filter(item => {
        return item.name.toLowerCase().startsWith((filters.query ?? '').toLowerCase())
    }).filter(item => {
        return item.location.toLowerCase().startsWith((filters.location ?? '').toLowerCase())
    }).filter(item => {
        if((filters.priceTo ?? '').toString().length < 2) filters.priceTo = 99999999
        return item.price > (filters.priceFrom ?? 0) && item.price < (filters.priceTo ?? 99999999)
    })
}