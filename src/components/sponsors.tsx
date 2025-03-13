'use client';

import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const sponsors = [
  { src: '/assets/images/celo.png', alt: 'Celo', href: 'https://celo.org/' },
  { src: '/assets/images/starknet.png', alt: 'starknet', href: 'https://www.starknet.io/' },
  { src: '/assets/images/onboard.png', alt: 'onboard', href: 'https://x.com/onboardglobal' },
  { src: '/assets/images/iv.png', alt: 'innovation village', href: 'https://innovationvillage.africa/' },
  { src: '/assets/images/oneramp.png', alt: 'oneramp', href: 'https://oneramp.io/' },
  { src: '/assets/images/base.jpeg', alt: 'base', href: 'https://www.base.org/' },
  { src: '/assets/images/w3bridge.png', alt: 'web3Bridge', href: 'https://www.web3bridgeafrica.com/' },
  { src: '/assets/images/unlock.png', alt: 'unlock protocol', href: 'https://unlock-protocol.com/' },
  { src: '/assets/images/muda.png', alt: 'muda', href: 'https://muda.tech/' },
  { src: '/assets/images/fonbnk.png', alt: 'fonbnk', href: 'https://fonbnk.com/' },
  { src: '/assets/images/pago.png', alt: 'pago', href: 'https://pago.capital/' },
];

const Sponsors = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"

  };

  return (
    <section className="relative py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
       
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Previous Sponsors</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                The companies that make the Blockchain DevFest happen
            </p>

        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <Link href={sponsor.href} passHref target="_blank" rel="noopener noreferrer">
                <Image src={sponsor.src} width={120} height={120} alt={sponsor.alt} className="mx-auto" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sponsors;



















// 'use client'

// import Link from 'next/link';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';


// const sponsors = [
//   { src: '/assets/images/celo.png', alt: 'Celo', href: 'https://celo.org/' },
//   { src: '/assets/images/starknet.png', alt: 'starknet', href: 'https://www.starknet.io/' },
//   { src: '/assets/images/onboard.png', alt: 'onboard', href: 'https://x.com/onboardglobal' },
//   { src: '/assets/images/iv.png', alt: 'innovation village', href: 'https://innovationvillage.africa/' },
//   { src: '/assets/images/oneramp.png', alt: 'oneramp', href: 'https://oneramp.io/' },
//   { src: '/assets/images/base.jpeg', alt: 'base', href: 'https://www.base.org/' },
//   { src: '/assets/images/w3bridge.png', alt: 'web3Bridge', href: 'https://www.web3bridgeafrica.com/' },
//   { src: '/assets/images/unlock.png', alt: 'unlock protocol', href: 'https://unlock-protocol.com/' },
//   { src: '/assets/images/muda.png', alt: 'muda', href: 'https://muda.tech/' },
//   { src: '/assets/images/fonbnk.png', alt: 'fonbnk', href: 'https://fonbnk.com/' },
//   { src: '/assets/images/pago.png', alt: 'pago', href: 'https://pago.capital/' },
// ];

// const Sponsors = () => {
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
//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
//             <h2 className="h2 mb-4">Our previous Sponsors</h2>
//             <p className="text-xl text-gray-600" data-aos="zoom-y-out">The companies that make the blockchain devfest happen</p>
//           </div>

//           {/* Swiper Carousel */}
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={3}
//             //navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 1000, disableOnInteraction: false }}
//             loop={true}
//             effect="coverflow"
//             grabCursor={true}
//             centeredSlides={true}
//               coverflowEffect={{
//                 rotate: 0,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 2,
//                 slideShadows: true,
//               }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 30,
//               },
//               1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 40,
//               },
//             }}
//           >
//             {sponsors.map((sponsor, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex items-center justify-center py-2">
//                   <Link href={sponsor.href} passHref target="_blank" rel="noopener noreferrer">
//                     <Image src={sponsor.src} width={100} height={100} alt={sponsor.alt} />
//                   </Link>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Testimonials */}
       
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sponsors;






  //  <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
  //           <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
  //             {/* Testimonial */}
  //             <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
  //               <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
  //                 <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  //                   <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
  //                 </svg>
  //                 <Image className="relative rounded-full" src='/assets/images/pf.jpg' width={96} height={96} alt="Testimonial 01" />
  //               </div>
  //               <blockquote className="text-xl font-medium mb-4">
  //                 “ Blockchain devFest Kampala 2024 exceeded all my expectations. Inspiring speakers, valuable networking, and practical workshops made it an event not to be missed. Highly recommended! “
  //               </blockquote>
  //               <cite className="block font-bold text-lg not-italic mb-1">Elias Hezron</cite>
  //               <div className="text-gray-600">
  //                 <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="https://oneramp.io">@Oneramp</a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>






















