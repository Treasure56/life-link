import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { searchAction } from "@/actions/search"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1612574935301-af13ccce9258?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFtYnVsYW5jZXxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Swift Care at Your Fingertips
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          Revolutionizing emergency response with cutting-edge technology. Our eAmbulance service ensures rapid, reliable, and efficient medical assistance when every second counts. Experience the future of urgent care today.
        </p>
        
        {/* Search Input */}
        <form action={searchAction} className="flex max-w-md mx-auto">
          <Input name="query"
            type="text" 
            placeholder="Search the for ambulance" 
            className="flex-grow bg-white text-neutral-700"
          />
          <Button type="submit" className="ml-2">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>
    </section>
  )
}   