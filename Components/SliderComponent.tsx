import React from 'react'
import Image from 'next/image';
import logo from '../assets/int+.png'
import right from '../assets/Vector (6).png'
import background from "../assets/vector (20).png";
import background1 from "../assets/vector (22).png";
import background2 from "../assets/vector (24).png";
import background3 from "../assets/vector (23).png";
import '../src/app/globals.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imageSlider = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
        <nav className='navbar-wrapper justify-between w-full flex  absolute top-0 px-24 mt-9 ' style={{zIndex: '10'}}>
          <section className="navbrand flex">
            <Image className='h-fit' src={logo} alt='' />
            <p className='ml-2 text-gray-50 text-xl mt-[1px]'>technology</p>
          </section>
          <section className="navmenu flex">
            <div className='nav-list flex items-center'>
              <ul className='flex list text-sm '>
                <li>
                  SERVICES
                </li>
                <li>
                  INDUSTRIES
                </li>
                <li>
                  CLIENT
                </li>
                <li>
                  COMPANY
                </li>
              </ul>
            </div>
            <button className="navbtn text-sm items-center flex">
              Get in Touch
            </button>
          </section>
        </nav>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        navigation
        pagination={{ type: 'fraction'}}
        style={{width: '100%'}}
      >
        <SwiperSlide>
          <section className='main-wrap relative w-full'>
            <Image className='w-full' src={background} height={500} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <div className='top-[30%] absolute mx-24 '>
              <div className="main-text-wrapper p-4" style={{ backgroundColor: '#00000036' }}>
                <section className='text-wrapper text-white'>
                  <h1 className='text-[30px] mb-4' style={{ fontWeight: '600' }}>
                    ENTERPISE SOFTWARE DEVELOPMENT
                  </h1>
                  <p>
                    Enhance your enterprise products or processes with our 10+ years of experience in providing complex software development,
                    legacy modernization, API integration, and other services
                  </p>
                </section>
              </div>
              <section className='textBtn p-[6px] pr-4 pl-4 text-sm font-semibold items-center justify-between mt-6 flex' style={{ cursor: 'pointer', color: '#1476F2', backgroundColor: 'white', borderRadius: '.2rem', width: '160px' }}>
                <p>
                  LEARN MORE
                </p>
                <Image className='h-fit' src={right} alt='' />
              </section>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='main-wrap relative w-full'>
            <Image className='w-full' src={background2} height={500} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <div className='top-[30%] absolute mx-24 '>
              <div className="main-text-wrapper p-4" style={{ backgroundColor: '#00000036' }}>
                <section className='text-wrapper text-white'>
                  <h1 className='text-[30px] mb-4' style={{ fontWeight: '600' }}>
                  TAILORED MOBILE APP DEVELOPMENT
                  </h1>
                  <p>
                  Get a personalized, user-friendly mobile application designed to cater to your employees or customers with an intuitive and 
                    visually appealing interface
                  </p>
                </section>
              </div>
              <section className='textBtn p-[6px] pr-4 pl-4 text-sm font-semibold items-center justify-between mt-6 flex' style={{ cursor: 'pointer', color: '#1476F2', backgroundColor: 'white', borderRadius: '.2rem', width: '160px' }}>
                <p>
                  LEARN MORE
                </p>
                <Image className='h-fit' src={right} alt='' />
              </section>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='main-wrap relative w-full'>
            <Image className='w-full' src={background3} height={500} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <div className='top-[30%] absolute mx-24 '>
              <div className="main-text-wrapper p-4" style={{ backgroundColor: '#00000036' }}>
                <section className='text-wrapper text-white'>
                  <h1 className='text-[30px] mb-4' style={{ fontWeight: '600' }}>
                   SOLUTIONS FOR STARTUPS
                  </h1>
                  <p>
                  Leverage our wealth of expertise in crafting prototypes, MVPs, PoCs, and various digital solutions tailored for startups to drive 
                  your business forward.
                  </p>
                </section>
              </div>
              <section className='textBtn p-[6px] pr-4 pl-4 text-sm font-semibold items-center justify-between mt-6 flex' style={{ cursor: 'pointer', color: '#1476F2', backgroundColor: 'white', borderRadius: '.2rem', width: '160px' }}>
                <p>
                  LEARN MORE
                </p>
                <Image className='h-fit' src={right} alt='' />
              </section>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='main-wrap relative w-full'>
            <Image className='w-full' src={background1} height={500} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <div className='top-[30%] absolute mx-24 '>
              <div className="main-text-wrapper p-4" style={{ backgroundColor: '#00000036' }}>
                <section className='text-wrapper text-white'>
                  <h1 className='text-[30px] mb-4' style={{ fontWeight: '600' }}>
                  DEDICATED DEVELOPMENT TEAM
                  </h1>
                  <p>
                  Our dedicated team of software development experts will give their full commitment to your project, ensuring top-quality results,
                  allowing you to concentrate on other vital business goals and needs.
                  </p>
                </section>
              </div>
              <section className='textBtn p-[6px] pr-4 pl-4 text-sm font-semibold items-center justify-between mt-6 flex' style={{ cursor: 'pointer', color: '#1476F2', backgroundColor: 'white', borderRadius: '.2rem', width: '160px' }}>
                <p>
                  LEARN MORE
                </p>
                <Image className='h-fit' src={right} alt='' />
              </section>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default imageSlider
