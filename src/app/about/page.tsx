import Image from 'next/image'
import { Clock, Link as LinkIcon, Wrench } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">About Life Link eAmbulance</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-b border-gray-200 pb-5">
              <p className="mt-2 max-w-4xl text-lg text-gray-500">
                Life Link eAmbulance Website is a groundbreaking healthcare innovation that harnesses the power of technology to address the critical need for efficient and timely emergency medical transportation.
              </p>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Life Link eAmbulance?</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Prompt Assistance */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-lg font-medium text-gray-900 truncate">Prompt Assistance</dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Request eAmbulance services promptly and conveniently. Track updates on ambulance types, costs, and availability in real-time.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Forge the Connection */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <LinkIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-lg font-medium text-gray-900 truncate">Forge the Connection</dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Connect patients and medical emergency services seamlessly. Provide a secure and reliable platform for booking during critical situations.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support and Maintenance */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-lg font-medium text-gray-900 truncate">Support and Maintenance</dt>
                        <dd className="mt-2 text-base text-gray-500">
                          Available 24/7 to ensure continuous service. We maintain high emergency standards through a responsible and holistic approach.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-10">
            <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">Our Mission</h3>
                <div className="mt-2 max-w-xl text-sm text-white">
                  <p>
                    To revolutionize emergency medical transportation by providing a user-friendly, efficient, and reliable eAmbulance booking platform that saves lives through prompt and effective assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10">
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-[30rem]">
              <Image
                src="/images/emagency.jpg"
                alt="Emergency Medical Services in Action"
                layout="fill"
                objectFit="cover"
                className="rounded-lg "
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to experience the future of emergency medical transportation?
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-green-800 bg-primary"
                >
                  Get Started
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-blue-100 hover:bg-blue-200"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}