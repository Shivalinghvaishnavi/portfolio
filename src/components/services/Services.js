import React from 'react';

const Services = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">We offer a wide range of services tailored to meet the unique needs of your business. Explore our offerings below:</p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Web Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src="/icons/web-development-icon.svg" alt="Web Development" className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Web Development</h3>
            <p className="text-gray-600 mb-4">Custom websites with modern designs, responsive layouts, and robust functionality using the latest technologies.</p>
            <a href="/services/web-development" className="text-designColor font-medium hover:underline">Learn More</a>
          </div>

          {/* Service 2: Mobile App Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src="/icons/mobile-app-icon.svg" alt="Mobile App Development" className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Mobile App Development</h3>
            <p className="text-gray-600 mb-4">Cross-platform mobile apps built with React Native for seamless experiences on iOS and Android devices.</p>
            <a href="/services/mobile-app-development" className="text-designColor font-medium hover:underline">Learn More</a>
          </div>

          {/* Service 3: UI/UX Design */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src="/icons/ui-ux-icon.svg" alt="UI/UX Design" className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">User-centered design focusing on intuitive interfaces and smooth user journeys for web and mobile apps.</p>
            <a href="/services/ui-ux-design" className="text-designColor font-medium hover:underline">Learn More</a>
          </div>

          {/* Service 4: API Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src="/icons/api-icon.svg" alt="API Development" className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">API Development</h3>
            <p className="text-gray-600 mb-4">Robust and scalable RESTful APIs for seamless backend integration and communication between systems.</p>
            <a href="/services/api-development" className="text-designColor font-medium hover:underline">Learn More</a>
          </div>

          {/* Service 5: Cloud Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src="/icons/cloud-icon.svg" alt="Cloud Solutions" className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">Flexible cloud infrastructure setups on AWS and Azure to scale your business and optimize resource usage.</p>
            <a href="/services/cloud-solutions" className="text-designColor font-medium hover:underline">Learn More</a>
          </div>

          {/* Service 6: Data Synchronization */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <img src="/icons/data-sync-icon.svg" alt="Data Synchronization" className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Data Synchronization</h3>
            <p className="text-gray-600 mb-4">Real-time data syncing across multiple platforms to ensure consistency and accuracy for all stakeholders.</p>
            <a href="/services/data-synchronization" className="text-designColor font-medium hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
