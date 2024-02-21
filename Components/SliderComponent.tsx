import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import logo from '../assets/int+.svg'
import logo2 from '../assets/int++.svg'
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
import enterprise from '../assets/Rectangle 55.svg'
import servicepic from '../assets/Rectangle 54.svg'
import clientpic from '../assets/Rectangle 50.svg'
import companypic from '../assets/Rectangled 54.svg'
import Mobile from '../assets/Rectangle 56.svg'
import Dedicated from '../assets/Rectangle 57.svg'
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

interface MenuDropdown {
  menuClick : () => void
}

const imageSlider:React.FC<MenuDropdown> = ({menuClick}) => {
  const [display, setDisplay] = useState(true)
  const [display1, setDisplay1] = useState(false)
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active !== null) {
      bgColor(true);  
    } else {
      bgColor(false); 
    }
  }, [active]);

  const handleActive = (index: number) => {
    setActive((prevIndex) => (prevIndex === index ? null : index))
    bgColor(true);
  }

  const activeStyle = (index: number) => {
    const isActive = index === active

    return {
      color: isActive ? '#2D7EFF' : (active !== null ? 'black' : 'white'),
    };
    
  }

   const renderImage = () => {
    if (active !== null) {
      return <Image  className='h-fit' style={{ height: '22px' }} src={logo2} alt="" />;
    } else {
      return <Image className='h-fit' style={{ height: '22px' }} src={logo} alt="" />;
    }
  }

  const bgColor = (isActive: boolean) => {
   const nav = document.getElementById('nav');
   const color = document.getElementById('color');
   if (nav) {
    nav.style.backgroundColor = isActive ? 'white' : 'transparent';
   }
 

   
  }

  const dropDown = () => {
    setDisplay((!display))
    setDisplay1((!display1))
  }

  return (
    <div className='flex flex-col items-center justify-between relative'>
      <nav id='nav' className='navbar-wrapper justify-between w-full flex  absolute top-0 px-24 pt-9 pb-4 '>
        <section className="navbrand flex">
          {renderImage()}
        </section>
        <section className=" mlogo flex">
          <Image className='h-fit' src={logo1} alt='' />
        </section>
        <section className="navmenu flex">
          <div className='nav-dropdown-container' onClick={menuClick}>
            <Image className='h-fit nav-dropdown' style={{ display: 'none' }} src={dropdown} alt='' />
          </div>
          <div className='nav-list flex items-center'>
            <ul className='flex list text-sm ' style={{ color:'white' }}>
              {['SERVICES', 'INDUSTRIES', 'CLIENT', 'COMPANY'].map((links, index) => (
                <li style={activeStyle(index)} key={index} onClick={
                  () => {
                    dropDown();
                    handleActive(index);
                  }
                }
                >
                  {links}
                </li>
              ))}
            </ul>
          </div>
          <button className="navbtn text-sm items-center flex">
            Get in Touch
          </button>
        </section>
      </nav>
      {active === 0 && (
        <main className='absolute dropDetails' style={{ backgroundColor: 'white', paddingTop: '67px', paddingBottom: '4rem' }}>
          <div className='flex' style={{ paddingLeft: '100px' }}>
            <section className='flex' style={{ gap: '41px', paddingRight: '38px', borderRight: '1px solid #0000000F' }}>
              <div className='enterprise flex flex-col' style={{ gap: '15px', width: '50%' }}>
                <Image src={enterprise} alt='' />
                <section>
                  <h1 style={{ fontWeight: '600', fontSize: '17px', lineHeight: '2', width: '72%' }}>
                    Enterprise Software Development
                  </h1>
                  <p style={{ fontSize: '14px', paddingTop: '1rem' }}>
                    Harness our power to design, integrate, and manage your applications seamlessly throughout their entire lifecycle.
                  </p>
                </section>
              </div>
              <div className='Mobile flex flex-col' style={{ gap: '15px', width: '50%' }}>
                <Image src={Mobile} alt='' />
                <section>
                  <h1 style={{ fontWeight: '600', fontSize: '17px', lineHeight: '2', width: '72%' }}>
                    Mobile App Development
                  </h1>
                  <p style={{ fontSize: '14px', paddingTop: '1rem' }}>
                    Businesses, embrace mobile-first: Deliver superior apps for today's on-the-go users.
                  </p>
                </section>
              </div>
              <div className='Dedicated flex flex-col' style={{ gap: '15px', width: '50%' }} >
                <Image src={Dedicated} alt='' />
                <section>
                  <h1 style={{ fontWeight: '600', fontSize: '17px', lineHeight: '2', width: '79%' }}>
                    Dedicated Development Team
                  </h1>
                  <p style={{ fontSize: '14px', paddingTop: '1rem' }}>
                    Boost your delivery capacity and speed to market with our high-performing engineering team.
                  </p>
                </section>
              </div>
            </section>
            <div className='side-mav'>
              <ul style={{ fontWeight: '600', lineHeight: '2.3', width: '200px' }}>
              <li>IT Consulting</li>
                <li>Digital Transformation</li>
                <li>Ui/Ux Design</li>
                <li>QA & Testing</li>
                <li>Solution Architecture</li>
              </ul>
            </div>
          </div>
        </main>
      )}
      {active === 1 && (
        <main className='absolute dropDetails' style={{ backgroundColor: 'white', paddingTop: '67px', paddingBottom: '4rem' }}>
          <div className='flex' style={{ paddingLeft: '188px' }}>
            <section style={{ position: 'relative' , borderRight: '1px solid #0000000F', paddingRight: '68px'}}>
              <Image src={servicepic} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
              <h1 className='backgroundDrop' style={{ position: 'absolute', top: '40%' }}>
                Get the edge you need: Industry-focused solutions built with the latest tech by Intellectsoft.
              </h1>
            </section>
            <div className='side-mav'>
              <ul style={{ fontWeight: '600', lineHeight: '2.3', width: '200px' }}>
                <h1 style={{color: '#998E8E', fontWeight:'600'}}>Industries</h1>
                <li>Fintech</li>
                <li>Travel & Hospitality</li>
                <li>eCommerce & Retails</li>
                <li>Logistics & Transportation</li>
                <li>Real Estate</li>
              </ul>
            </div>
          </div>
        </main>
      )}
      {active === 2 && (
        <main className='absolute dropDetails' style={{ backgroundColor: 'white', paddingTop: '67px', paddingBottom: '4rem' }}>
          <div className='flex' style={{ paddingLeft: '188px' }}>
            <section style={{ position: 'relative' , borderRight: '1px solid #0000000F', paddingRight: '68px'}}>
              <Image src={clientpic} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
              <h1 className='backgroundDrop' style={{ position: 'absolute', top: '40%' }}>
              Forward-thinking companies choose us for reliable partnership and innovation.
              </h1>
            </section>
            <div className='side-mav'>
              <ul style={{ fontWeight: '600', lineHeight: '2.3', width: '200px' }}>
                <h1 style={{color: '#998E8E', fontWeight:'600'}}>Clients</h1>
                <li style={{color: '#2D7EFF'}}>Our Clients</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </main>
      )}
      {active === 3 && (
        <main className='absolute dropDetails' style={{ backgroundColor: 'white', paddingTop: '67px', paddingBottom: '4rem' }}>
          <div className='flex' style={{ paddingLeft: '188px' }}>
            <section style={{ position: 'relative' , borderRight: '1px solid #0000000F', paddingRight: '68px'}}>
              <Image src={companypic} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
              <h1 className='backgroundDrop' style={{ position: 'absolute', top: '40%', width: '70%' }}>
              Breakthrough barriers, achieve agility: We help enterprises rethink their core and transform digitally, efficiently.
              </h1>
            </section>
            <div className='side-mav'>
              <ul style={{ fontWeight: '600', lineHeight: '2.3', width: '200px' }}>
                <h1 style={{color: '#998E8E', fontWeight:'600'}}>Company</h1>
                <li style={{color: '#2D7EFF'}}>About</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Social Responsibility</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
        </main>
      )}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ dynamicBullets: true, }}
        style={{ width: '100%' }}
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
