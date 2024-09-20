import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, Truck } from "lucide-react"
import fetchAmbulances from "@/actions/fetchAmbulances"
import { notFound } from "next/navigation"


export default async function AmbulanceDetails({params}: {params: {slug: string}}) {

  const ambulances = await fetchAmbulances({});
  const ambulance = ambulances.find(i=>i.id === params.slug);
  if(!ambulance) notFound();
  const { img, name, location, price, vehicleType} = ambulance;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <Image
              src={img}
              alt={name}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
            <CardContent>
              <h1 className="text-3xl font-bold mb-4">{name}</h1>
              <div className="flex items-center mb-2">
                <Truck className="mr-2 h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{vehicleType}</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{location}</span>
              </div>
              <p className="text-2xl font-bold text-primary mb-4">${price.toFixed(2)} per hour</p>
              <p className="text-gray-600 mb-6">
                This {vehicleType} ambulance is equipped with advanced life support systems and
                staffed by highly trained paramedics. It&apos;s designed to provide critical care during
                transportation to medical facilities.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-lg py-6" size="lg">
                Book Now
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  )
}