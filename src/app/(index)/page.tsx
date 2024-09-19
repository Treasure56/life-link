import AmbulanceList from "./AmbulanceList";
import Banner from "./Banner";
import HeroSection from "./Hero";

export default function Page() {
    return (
       <main>
        <HeroSection />
        <AmbulanceList />
        <Banner />
       </main>
    );
}