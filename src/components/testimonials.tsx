//import Image from 'next/image'
//import TestimonialImage from '../../public/images/testimonial.jpg'
// import celo from '../../public/images/celo.png'
// import base from '../../public/images/base.jpeg'
// import web3bridge from '../../public/images/w3bridge.png'
// import starknet from '../../public/images/starknet.png'
// import iv from '../../public/images/iv.png'
// import fonbnk from '../../public/images/fonbnk.png'
// import onboard from '../../public/images/onboard.png'
// import unlock from '../../public/images/unlock.png'
// import pf from '../../public/images/pf.jpg'
// import muda from '../../public/images/muda.png'
// import pago from '../../public/images/pago.png'
// import oneramp from '../../public/images/oneramp.png'
//import Link from 'next/link'



// export default function Testimonials() {
//   return (
//     <section className="relative">

//       {/* Illustration behind content */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
//         <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
//               <stop stopColor="#FFF" offset="0%" />
//               <stop stopColor="#EAEAEA" offset="77.402%" />
//               <stop stopColor="#DFDFDF" offset="100%" />
//             </linearGradient>
//           </defs>
//           <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
//             <circle cx="1630" cy="128" r="128" />
//             <circle cx="178" cy="481" r="40" />
//           </g>
//         </svg>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20">
//           {/* Testimonials */}
//           <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
//             <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

//               {/* Testimonial */}
//               <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
//                 <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
//                   <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
//                   </svg>
//                   <Image className="relative rounded-full" src='/assets/images/pf.jpg' width={96} height={96} alt="Testimonial 01" />
//                 </div>
//                 <blockquote className="text-xl font-medium mb-4">
//                   “ Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended! “
//                 </blockquote>
//                 <cite className="block font-bold text-lg not-italic mb-1">Elias Hezron</cite>
//                 <div className="text-gray-600">
//                   <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="https://oneramp.io">@Oneramp</a>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }




'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, QuoteIcon } from 'lucide-react';

const testimonialsData = [
  {
    quote: '" Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended!"',
    name: 'David Lumala',
    title: 'Co-Founder Epoch Infinity',
    avatar: '/assets/images/david.jpg'
  },
  {
    quote: '" Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended!"',
    name: 'Angella Mulikatete',
    title: 'software Engineer',
    avatar: '/assets/images/Angellina.jpeg'
  },
  {
    quote: '" Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended!"',
    name: 'Elias Hezron',
    title: 'Co-Founder Oneramp & Shukuru Wallet',
    avatar: '/assets/images/pf.jpg'
  },
  {
    quote: '" Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended!"',
    name: 'Jovan Mwesigwa',
    title: 'Co-Founder Oneramp & Shukuru Wallet',
    avatar: '/assets/images/jovan.jpg'
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play: move to next testimonial every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const testimonial = testimonialsData[currentTestimonial];

  // Motion variants for cleaner code
  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction * 100
    }),
    center: {
      opacity: 1,
      x: 0
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: -direction * 100
    })
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#FCFEF9] to-[#F0F4F8] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Intro Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-0.5 w-12 bg-gray-300"></div>
              <span className="text-gray-600 text-sm uppercase tracking-wider">
                Community Impact
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Stories from <br />Our previous Attendees
            </h2>
            <p className="text-gray-600 max-w-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde cum aspernatur facere iure esse, tenetur totam corrupti accusamus accusantium, quae officiis dolores! Magni soluta nihil, modi officiis quod aliquam delectus?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={prevTestimonial} 
                aria-label="Previous testimonial"
                className="border border-gray-300 hover:bg-gray-100 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
              >
                <ChevronLeft className="text-gray-600 group-hover:text-black" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="bg-black text-white hover:bg-gray-800 transition-colors rounded-full w-12 h-12 flex items-center justify-center group"
              >
                <ChevronRight className="text-white group-hover:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Dynamic Testimonial Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentTestimonial}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -100) {
                    nextTestimonial();
                  } else if (info.offset.x > 100) {
                    prevTestimonial();
                  }
                }}
                className="bg-white rounded-2xl shadow-lg p-8 relative max-w-lg mx-auto"
              >
                <QuoteIcon className="absolute top-4 left-4 text-gray-200 w-16 h-16" />
                <blockquote className="text-xl font-medium text-gray-800 mb-6 relative z-10">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    width={64}
                    height={64}
                    className="rounded-full border-4 border-gray-100 shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100/50 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Testimonials;










