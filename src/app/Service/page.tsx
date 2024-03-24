'use client'
import Image from 'next/image'
import Link from 'next/link';
import background from '../../../assets/image 31.svg'
import '../globals.css'
import React, { useState, useEffect } from 'react'
import backgroundSmall1 from '../../../assets/image 90.svg'
import logo from '../../../assets/int+.svg'
import logo2 from '../../../assets/int++.svg'
import logo1 from '../../../assets/Vector2.svg'
import dropdown from '../../../assets/Group 101.svg'
import enterprise from '../../../assets/Rectangle 55.svg'
import servicepic from '../../../assets/Rectangle 54.svg'
import clientpic from '../../../assets/Rectangle 50.svg'
import companypic from '../../../assets/Rectangled 54.svg'
import Mobile from '../../../assets/Rectangle 56.svg'
import Dedicated from '../../../assets/Rectangle 57.svg'
import mobile from '../../../assets/mobile-development 1.svg'
import dedicated from '../../../assets/image 32.svg'
import product from '../../../assets/image 33.svg'
import design from '../../../assets/image 34.svg'
import consult from '../../../assets/image 35.svg'
import solution from '../../../assets/image 37.svg'
import contback from '../../../assets/jean-philippe-delberghe-75xPHEQBmvA-unsplash 1.svg'
import contback1 from '../../../assets/billie.svg'
import cycle from '../../../assets/Group 133.svg'
import ContactComponent from '../../../Components/ContactComponent'
import FooterComponent from '../../../Components/FooterComponent'
import DropdownComponent from '../../../Components/DropdownComponent';

interface MenuDropdown {
  menuClick: () => void
}

const page: React.FC<MenuDropdown> = ({ menuClick }) => {
  const [showDropdown, setDropdown] = useState(false)

  const handleDropdown = () => {
    setDropdown((!showDropdown))
    document.body.classList.toggle('bodyscroll')
  }
  const [ishover, setHover] = useState(false);
  const [ishover1, setHover1] = useState(false);
  const [ishover2, setHover2] = useState(false);
  const [ishover3, setHover3] = useState(false);

  const handleHover = () => {
    setHover(true);
  }
  const handleLeave = () => {
    setHover(false)
  }
  const handleHover1 = () => {
    setHover1(true);
  }
  const handleLeave1 = () => {
    setHover1(false)
  }
  const handleHover2 = () => {
    setHover2(true);
  }
  const handleLeave2 = () => {
    setHover2(false)
  }
  const handleHover3 = () => {
    setHover3(true);
  }
  const handleLeave3 = () => {
    setHover3(false)
  }

  const renderImage = () => {
    return <Image className='h-fit' style={{ height: '22px', width: '100%' }} src={ishover || ishover1 || ishover2 || ishover3 ? logo2 : logo} alt="" />;
  }
  return (
    <div className='service-wrapper'>
      {showDropdown && <DropdownComponent menuClick={handleDropdown} />}
      <nav id='nav' className='navbar-wrapper justify-between w-full flex  absolute top-0 px-24 pt-9 pb-4 ' style={{ backgroundColor: ishover || ishover1 || ishover2 || ishover3 ? 'white' : 'transparent' }} >
        <section className="navbrand flex">
          <Link href='/'>
            {renderImage()}
          </Link>
        </section>
        <section className=" mlogo flex">
          <Image className='h-fit' src={logo1} alt='' />
        </section>
        <section className="navmenu flex">
          <div className='nav-dropdown-container' onClick={handleDropdown}>
            <Image className='h-fit nav-dropdown' style={{ display: 'none' }} src={dropdown} alt='' />
          </div>
          <div className='nav-list flex items-center'>
            <ul className='flex list text-sm ' style={{ color: ishover || ishover1 || ishover2 || ishover3 ? 'black' : 'white' }}>
              <li onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                SERVICES
              </li>
              <Link href='/industries'>
                <li onMouseEnter={handleHover1} onMouseLeave={handleLeave1}>
                  INDUSTRIES
                </li>
              </Link>
              <Link href='/client'>
                <li onMouseEnter={handleHover2} onMouseLeave={handleLeave2}>
                  CLIENT
                </li>
              </Link>
              <Link href='/company'>
                <li onMouseEnter={handleHover3} onMouseLeave={handleLeave3}>
                  COMPANY
                </li>
              </Link>
            </ul>
          </div>
          <button className="navbtn text-sm items-center flex">
            Get in Touch
          </button>
        </section>
      </nav>
      {ishover && (
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
        </main>)}
      {ishover1 && (
        <main className='absolute dropDetails' style={{ backgroundColor: 'white', paddingTop: '67px', paddingBottom: '4rem' }}>
          <div className='flex' style={{ paddingLeft: '188px' }}>
            <section style={{ position: 'relative', borderRight: '1px solid #0000000F', paddingRight: '68px' }}>
              <Image src={servicepic} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
              <h1 className='backgroundDrop' style={{ position: 'absolute', top: '40%' }}>
                Get the edge you need: Industry-focused solutions built with the latest tech by Intellectsoft.
              </h1>
            </section>
            <div className='side-mav'>
              <ul style={{ fontWeight: '600', lineHeight: '2.3', width: '200px' }}>
                <h1 style={{ color: '#998E8E', fontWeight: '600' }}>Industries</h1>
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
      {ishover2 && (
        <main className='absolute dropDetails' style={{ backgroundColor: 'white', paddingTop: '67px', paddingBottom: '4rem' }}>
          <div className='flex' style={{ paddingLeft: '188px' }}>
            <section style={{ position: 'relative', borderRight: '1px solid #0000000F', paddingRight: '68px' }}>
              <Image src={clientpic} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
              <h1 className='backgroundDrop' style={{ position: 'absolute', top: '40%' }}>
                Forward-thinking companies choose us for reliable partnership and innovation.
              </h1>
            </section>
            <div className='side-mav'>
              <ul style={{ fontWeight: '600', lineHeight: '2.3', width: '200px' }}>
                <h1 style={{ color: '#998E8E', fontWeight: '600' }}>Clients</h1>
                <li style={{ color: '#2D7EFF' }}>Our Clients</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </main>
      )}
      {ishover3 && (
        <main className='absolute dropDetails' style={{ backgroundColor: 'white', paddingTop: '67px', paddingBottom: '4rem' }}>
          <div className='flex' style={{ paddingLeft: '188px' }}>
            <section style={{ position: 'relative', borderRight: '1px solid #0000000F', paddingRight: '68px' }}>
              <Image src={companypic} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
              <h1 className='backgroundDrop' style={{ position: 'absolute', top: '40%', width: '70%' }}>
                Breakthrough barriers, achieve agility: We help enterprises rethink their core and transform digitally, efficiently.
              </h1>
            </section>
            <div className='side-mav'>
              <ul style={{ fontWeight: '600', lineHeight: '2.3', width: '200px' }}>
                <h1 style={{ color: '#998E8E', fontWeight: '600' }}>Company</h1>
                <li style={{ color: '#2D7EFF' }}>About</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Social Responsibility</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
        </main>
      )}
      <section className='main-wrap relative w-full'>
        <Image className='w-full bg-full' src={background} height={200} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
        <Image className='w-full bg-small' src={backgroundSmall1} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
        <div className='enterprise-content top-[32%] absolute mx-24 '>
          <div className="main-text-wrapper p-4" >
            <section className='enterprise-text  text-wrapper text-white'>
              <h1 className='text-[44px] mb-4' style={{ fontWeight: '500', width: '89%', lineHeight: '1.2' }}>
                TRANSFORM YOUR INNOVATIVE CONCEPTS INTO
                REALITY WITH OUR CUSTOM SOFTWARE
                DEVELOPMENT SOLUTIONS.
              </h1>
              <p className='text-[22px]' style={{ marginTop: '42px' }}>
                Turn innovative ideas into real business value. Talk to our custom software development experts today!
              </p>
            </section>
          </div>
        </div>
      </section>
      <main className="development-service relative w-full">
        <div className=" w-full z-10 ">
          <Image className='w-full bg-full' src={contback} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
          <Image className='w-full bg-small' src={contback1} style={{ height: '1970px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
        </div>
        <h1 className='absolute w-full' style={{ position: 'absolute', top: '5%', zIndex: '10' }}>
          OUR CUSTOM SOFTWARE DEVELOPMENT SERVICES
        </h1>
        <p style={{ color: '#333333', textAlign: 'center', width: '45%', paddingTop: '1rem', position: 'absolute', top: '14%', zIndex: '10' }} className='absolute w-full'>
          Scale your business with our end-to-end software development solutions.
          int+ technology delivers a full-cycle software development services that adapt
          seamlessly to your project requirements and business needs
        </p>
        <div className="serviceCard-wrapper" style={{ paddingTop: '4rem', position: 'absolute', top: '25%', zIndex: '10' }}>
          <div className="service-card">
            <div className="cardwrap">
              <div className="front">
                <Image src={mobile} alt='' />
                <p style={{ marginTop: '1rem' }}>MOBILE DEVELOPMENT</p>
              </div>
              <div className="card-text">
                <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
                  MOBILE DEVELOPMENT
                </h1>
                <p>
                  Meet your goals, exceed expectations. We deliver top-quality mobile apps, on time, every time.
                </p>
              </div>
            </div>
          </div>
          <div className="service-card">
            <div className="cardwrap">
              <div className="front">
                <Image src={dedicated} alt='' />
                <p style={{ marginTop: '1rem', width: '74%' }}>DEDICATED DEVELOPMENT TEAMS</p>
              </div>
              <section className="card-text">
                <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
                  DEDICATED DEVELOPMENT TEAMS
                </h1>
                <p>
                  Meet your goals, exceed expectations. We deliver top-quality mobile apps, on time, every time.
                </p>
              </section>
            </div>
          </div>
          <div className="service-card">
            <div className="cardwrap">
              <div className="front">
                <Image src={product} alt='' />
                <p style={{ marginTop: '1rem' }}>PRODUCT ENGINEERING</p>
              </div>
              <section className="card-text">
                <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
                  PRODUCT ENGINEERING
                </h1>
                <p>
                  Meet your goals, exceed expectations. We deliver top-quality mobile apps, on time, every time.
                </p>
              </section>
            </div>
          </div>
          <div className="service-card" >
            <div className="cardwrap">
              <div className="front">
                <Image src={design} alt='' />
                <p style={{ marginTop: '1rem' }}>UI/UX DESIGN</p>
              </div>
              <section className="card-text">
                <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
                  UI/UX DESIGN
                </h1>
                <p>
                  Meet your goals, exceed expectations. We deliver top-quality mobile apps, on time, every time.
                </p>
              </section>
            </div>
          </div>
          <div className="service-card" >
            <div className="cardwrap">
              <div className="front">
                <Image src={consult} alt='' />
                <p style={{ marginTop: '1rem' }}>IT CONSULTING</p>
              </div>
              <section className="card-text">
                <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
                  IT CONSULTING
                </h1>
                <p>
                  Meet your goals, exceed expectations. We deliver top-quality mobile apps, on time, every time.
                </p>
              </section>
            </div>
          </div>
          <div className="service-card" >
            <div className="cardwrap">
              <div className="front">
                <Image src={solution} alt='' />
                <p style={{ marginTop: '1rem' }}>SOLUTION ARCHITECTURE</p>
              </div>
              <section className="card-text">
                <h1 style={{ fontSize: '17px', fontWeight: '600' }}>
                  SOLUTION ARCHITECTURE
                </h1>
                <p>
                  Meet your goals, exceed expectations. We deliver top-quality mobile apps, on time, every time.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <section className="lifecycle-wrapper" style={{ backgroundColor: '#F3F3F3' }} >
        <h1>
          CUSTOM SOFTWARE DEVELOPMENT CYCLE
        </h1>
        <p style={{ color: '#333333', textAlign: 'center', width: '45%', paddingTop: '1rem' }}>
          Our structured approach leverages established best practices and efficient development methodologies,
          enabling us to rapidly build innovative and cutting-edge technology solutions.
        </p>
        <div className="lifecycle-widget">
          <Image src={cycle} style={{ width: '90%' }} alt='' />
        </div>
      </section>
      <ContactComponent />
      <FooterComponent />
    </div>
  )
}

export default page
