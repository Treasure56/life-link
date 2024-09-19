
import fetchAmbulances from "@/actions/fetchAmbulances"
import LocationSelect from "./LocationSelect"
import PriceSelect from "./PriceSelect"
import Search from "./Search"
import AmbulanceCard from "@/components/ui/AmbulanceCard"

export default async function SearchComponent({searchParams}:{searchParams: unknown}) {
    const ambulances =  await fetchAmbulances(searchParams as unknown as never)

  return (
    <div className="app-container py-12 ">
       <div className="flex justify-between max-md:flex-col max-md:gap-3">
       <Search />
      <div className="flex gap-4">
      <LocationSelect />
      <PriceSelect />
      </div>
       </div>
    <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
    {
        ambulances.map(ambulance =>
            <AmbulanceCard key={ambulance.id} {...ambulance} />
        )
       }
    </div>
    </div>
  )
}