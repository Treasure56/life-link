import fetchAmbulances from "@/actions/fetchAmbulances";
import AmbulanceCard from "@/components/ui/AmbulanceCard";

export default async function AmbulanceList() {
    const abulanceLists = await fetchAmbulances({})
    return (
        <section className="app-container py-12">
            <h3 className="lg:text-3xl text-xl pb-6 font-semibold">Available Ambulances</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {abulanceLists.slice(0, 8).map(AmbulanceList =>
               <AmbulanceCard  key={AmbulanceList.id} {...AmbulanceList}/> 
            )}
          </div>
        </section>
    );
}