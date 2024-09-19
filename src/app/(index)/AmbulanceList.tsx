import AmbulanceCard from "@/components/ui/AmbulanceCard";
import { AMBULANCES } from "@/types/eabulance";

export default function AmbulanceList() {
    const abulanceLists = AMBULANCES
    return (
        <section className="app-container py-12">
            <h3 className="lg:text-3xl text-xl pb-6 font-semibold">Available Ambulances</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {abulanceLists.map(AmbulanceList =>
               <AmbulanceCard  key={AmbulanceList.id} {...AmbulanceList}/> 
            )}
          </div>
        </section>
    );
}