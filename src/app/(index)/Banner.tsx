/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";

export default function Banner() {
    return (
        <section className="app-container py-12">
            <div className="grid md:grid-cols-2 grid-cols-1 overflow-hidden rounded-lg bg-primary">
            <div className="flex flex-col justify-evenly p-6 gap-3 text-white">
                <h3 className="font-semibold md:text-3xl text-xl max-w-[500px]">Need Emergency Medical Transport?</h3>
                <p>Get fast, reliable ambulance services at your fingertips. Our state-of-the-art GPS technology ensures quick response times, connecting you with professional medical teams in your area. Download our app now for immediate access to life-saving services.</p>
                <Button className="bg-white rounded-lg py-4 px-8 hover:bg-white text-black w-fit">Call Now</Button>

            </div>
            <img src="/images/doctor2.jpg" className="w-full" alt="" />

        </div>
        </section>
    );
}