import React from 'react'
import Image from 'next/image';
import logo from '../assets/int+.svg'
import logo1 from '../assets/Vector2.svg'
import right from '../assets/Vector (6).png'
import background from "../assets/vector20.svg";
import background1 from "../assets/image4.svg";
import background2 from "../assets/image9.svg";
import background3 from "../assets/image5.svg";
import backgroundSmall from "../assets/image 3.svg";
import backgroundSmall1 from "../assets/image 5.svg";
import backgroundSmall2 from "../assets/image 9.svg";
import backgroundSmall3 from "../assets/image 4.svg";
import dropdown from '../assets/Group 101.svg'
import '../src/app/globals.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const imageSlider = () => {
  return (
    <div className='flex flex-col items-center justify-between'>
        <nav className='navbar-wrapper justify-between w-full flex  absolute top-0 px-24 mt-9 ' style={{zIndex: '10'}}>
          <section className="navbrand flex">
            <Image className='h-fit' style={{height: '22px'}} src={logo} alt='' />
          </section>
          <section className=" mlogo flex">
            <Image className='h-fit' src={logo1} alt='' />
          </section>
          <section className="navmenu flex">
            <div>
              <Image className='h-fit nav-dropdown' style={{display: 'none'}} src={dropdown} alt=''/>
            </div>
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
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        autoplay={{delay: 5000}}
        navigation
        pagination={{ dynamicBullets: true,}}
        style={{width: '100%'}}
      >
        <SwiperSlide>
          <section className='main-wrap relative w-full'>
            <Image className='w-full bg-full' src={background} height={500} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <Image className='w-full bg-small' src={backgroundSmall} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <div className='enterprise-content top-[30%] absolute mx-24 '>
              <div className="main-text-wrapper p-4" style={{ backgroundColor: '#00000036' }}>
                <section className='enterprise-text text-wrapper text-white'>
                  <h1 className=' text-[30px] mb-4' style={{ fontWeight: '500' }}>
                    ENTERPISE SOFTWARE DEVELOPMENT
                  </h1>
                  <p>
                    Enhance your enterprise products or processes with our 10+ years of experience in providing complex software development,
                    legacy modernization, API integration, and other services
                  </p>
                </section>
              </div>
              {/* <section className='textBtn p-[6px] pr-4 pl-4 text-sm font-semibold items-center justify-between mt-6 flex' style={{ cursor: 'pointer', color: '#1476F2', backgroundColor: 'white', borderRadius: '.2rem', width: '160px' }}>
                <p>
                  LEARN MORE
                </p>
                <Image className='h-fit' src={right} alt='' />
              </section> */}
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='main-wrap relative w-full'>
            <Image className='w-full bg-full' src={background1} height={500} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <Image className='w-full bg-small' src={backgroundSmall1} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <div className='enterprise-content top-[30%] absolute mx-24 '>
              <div className="main-text-wrapper p-4" style={{ backgroundColor: '#00000036' }}>
                <section className='enterprise-text  text-wrapper text-white'>
                  <h1 className='text-[30px] mb-4' style={{ fontWeight: '500' }}>
                  TAILORED MOBILE APP DEVELOPMENT
                  </h1>
                  <p>
                  Get a personalized, user-friendly mobile application designed to cater to your employees or customers with an intuitive and 
                    visually appealing interface
                  </p>
                </section>
              </div>
              {/* <section className='textBtn p-[6px] pr-4 pl-4 text-sm font-semibold items-center justify-between mt-6 flex' style={{ cursor: 'pointer', color: '#1476F2', backgroundColor: 'white', borderRadius: '.2rem', width: '160px' }}>
                <p>
                  LEARN MORE
                </p>
                <Image className='h-fit' src={right} alt='' />
              </section> */}
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='main-wrap relative w-full'>
            <Image className='w-full bg-full' src={background2} height={500} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <Image className='w-full bg-small' src={backgroundSmall2} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <div className='enterprise-content top-[30%] absolute mx-24 '>
              <div className="main-text-wrapper p-4" style={{ backgroundColor: '#00000036' }}>
                <section className='enterprise-text text-wrapper text-white'>
                  <h1 className='text-[30px] mb-4' style={{ fontWeight: '500' }}>
                   SOLUTIONS FOR STARTUPS
                  </h1>
                  <p>
                  Leverage our wealth of expertise in crafting prototypes, MVPs, PoCs, and various digital solutions tailored for startups to drive 
                  your business forward.
                  </p>
                </section>
              </div>
              {/* <section className='textBtn p-[6px] pr-4 pl-4 text-sm font-semibold items-center justify-between mt-6 flex' style={{ cursor: 'pointer', color: '#1476F2', backgroundColor: 'white', borderRadius: '.2rem', width: '160px' }}>
                <p>
                  LEARN MORE
                </p>
                <Image className='h-fit' src={right} alt='' />
              </section> */}
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='main-wrap relative w-full'>
            <Image className='w-full bg-full' src={background3} height={500} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <Image className='w-full bg-small' src={backgroundSmall3} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            <div className='enterprise-content top-[30%] absolute mx-24 '>
              <div className="main-text-wrapper p-4" style={{ backgroundColor: '#00000036' }}>
                <section className='enterprise-text text-wrapper text-white'>
                  <h1 className='text-[30px] mb-4' style={{ fontWeight: '500' }}>
                  DEDICATED DEVELOPMENT TEAM
                  </h1>
                  <p>
                  Our dedicated team of software development experts will give their full commitment to your project, ensuring top-quality results,
                  allowing you to concentrate on other vital business goals and needs.
                  </p>
                </section>
              </div>
              {/* <section className='textBtn p-[6px] pr-4 pl-4 text-sm font-semibold items-center justify-between mt-6 flex' style={{ cursor: 'pointer', color: '#1476F2', backgroundColor: 'white', borderRadius: '.2rem', width: '160px' }}>
                <p>
                  LEARN MORE
                </p>
                <Image className='h-fit' src={right} alt='' />
              </section> */}
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default imageSlider
