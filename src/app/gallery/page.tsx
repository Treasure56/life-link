"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface GalleryItem {
  title: string
  image: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    { title: "Rescuing kids in NY", image: "/images/ambulances/image-1.jpeg" },
    { title: "Emergency response in LA", image: "/images/ambulances/image-10.jpeg" },
    { title: "Training new paramedics", image: "/images/ambulances/image-12.jpeg" },
    { title: "Community outreach program", image: "/images/ambulances/image-4.jpeg" },
    { title: "Life-saving equipment demo", image: "/images/ambulances/image-5.jpeg" },
    { title: "Helicopter rescue mission", image: "/images/ambulances/image-6.jpeg" },
    { title: "Responding to highway accident", image: "/images/ambulances/image-7.jpeg" },
    { title: "Disaster relief efforts", image: "/images/ambulances/image-8.jpeg" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
        </div>
      </header>

      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer mx-auto"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for larger image view */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
          <div className="relative">
            {selectedImage && (
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 p-1 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-opacity"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {selectedImage && (
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold">{selectedImage.title}</h2>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}