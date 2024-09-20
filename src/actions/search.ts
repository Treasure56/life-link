"use server"

import { redirect } from "next/navigation"

export  async function searchAction(formData:FormData){
    const query = formData.get("query")
    if (query) redirect(`/search?query=${query}`)


}