'use client'

import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

// Speaker Data
const speakers = [
  {
    name: "Elias Hezron",
    role: "Co-Founder Oneramp & Shukuru Wallet",
    image: "/assets/images/pf.jpg",
    bio: "Elias Hezron is a visionary entrepreneur and blockchain advocate, co-founding Oneramp and Shukuru Wallet to make digital finance more accessible."
  },
  {
    name: "David Lumala",
    role: "Co-Founder Epoch Infinity",
    image: "/assets/images/david.jpg",
    bio: "David Lumala is an expert in blockchain and decentralized applications, co-founding Epoch Infinity to drive blockchain adoption in Africa."
  },
  {
    name: "Jovan Mwesigwa",
    role: "Co-Founder Oneramp & Shukuru Wallet",
    image: "/assets/images/jovan.jpg",
    bio: "Jovan is a blockchain developer and advocate, working on innovative solutions in Web3 and digital asset management."
  }
];

export default function FeaturesBlocks() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<null | typeof speakers[0]>(null);

  // Slider settings
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 px-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Listen from the Speakers
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
        Embark on an inspiring journey as our esteemed lineup of speakers shares
        their expertise, insights, and vision for the future of blockchain at
        Blockchain DevFest Kampala 2024.
      </p>
    </div>

          {/* Speaker Carousel */}
          <Slider {...settings} className="px-4">
            {speakers.map((speaker, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl cursor-pointer"
                onClick={() => setSelectedSpeaker(speaker)}
              >
                <Image className="relative rounded-full" src={speaker.image} width={150} height={150} alt={speaker.name} />
                <h4 className="text-xl font-bold leading-snug tracking-tight mt-4">{speaker.name}</h4>
                <p className="text-gray-600 text-center">{speaker.role}</p>
              </motion.div>
            ))}
          </Slider>

          {/* Speaker Details Modal */}
          {selectedSpeaker && (
            <motion.div 
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedSpeaker(null)}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full text-center"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image className="rounded-full mx-auto" src={selectedSpeaker.image} width={200} height={200} alt={selectedSpeaker.name} />
                <h3 className="text-2xl font-bold mt-4">{selectedSpeaker.name}</h3>
                <p className="text-gray-600">{selectedSpeaker.role}</p>
                <p className="mt-4 text-gray-800">{selectedSpeaker.bio}</p>
                <button 
                  className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => setSelectedSpeaker(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
