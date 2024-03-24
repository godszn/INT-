'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import '../globals.css'
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
import background from '../../../assets/images 31.svg'
import backgroundSmall1 from '../../../assets/image 100.svg'
import oneplus from '../../../assets/OnePlus 10T.svg'
import mac from '../../../assets/MacBook Pro 16.svg'
import ellipse from '../../../assets/Group 145.svg'
import con from '../../../assets/image 42.svg'
import tic from '../../../assets/image 43.svg'
import ope from '../../../assets/image 44.svg'
import macpro from '../../../assets/MacBook Pro 17.svg'
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
        <div className='industry-wrapper'>
            {showDropdown && <DropdownComponent menuClick={handleDropdown} />}
            <nav id='nav' className='navbar-wrapper justify-between w-full flex  absolute top-0 px-24 pt-9 pb-4' style={{ backgroundColor: ishover || ishover1 || ishover2 || ishover3 ? 'white' : 'transparent' }}>
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
                            <Link href='/Service'>
                                <li onMouseEnter={handleHover} onMouseLeave={handleLeave} >
                                    SERVICES
                                </li>
                            </Link>
                            <li onMouseEnter={handleHover1} onMouseLeave={handleLeave1}>
                                INDUSTRIES
                            </li>
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
            <section className='main-wrap relative w-full' style={{ zIndex: '1' }}>
                <Image className='w-full bg-full' src={background} height={200} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
                <Image className='w-full bg-small' src={backgroundSmall1} style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
                <div className='enterprise-content top-[32%] absolute mx-24 '>
                    <div className="main-text-wrapper p-4" >
                        <section className='enterprise-text  text-wrapper text-white'>
                            <h1 className='text-[44px] mb-4' style={{ fontWeight: '500', width: '80%', lineHeight: '1.2' }}>
                                SOFTWARE SOLUTIONS FOR ANY INDUSTRIES
                            </h1>
                            <p className='text-[22px]' style={{ marginTop: '42px' }}>
                                Unleash the power of custom software, combined with a world-class platform.
                                We bring 10 years of expertise and cutting-edge technology to help you build impactful solutions, faster.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <div className="platform-wrapper flex" style={{ position: 'relative' }}>
                <div className="platform-widget" style={{ width: '25%' }}>
                    <Image src={oneplus} style={{ width: '80%' }} alt='' />
                </div>
                <div className='flex flex-col' style={{ alignItems: 'center', textAlign: 'center' }}>
                    <h1 style={{ fontWeight: '600', color: '#333333', zIndex: '2' }}>
                        COMPREHENSIVE PLATFORM & CUSTOM DEVELOPMENT
                    </h1>
                    <div className='ellipse' style={{ position: 'absolute', width: '67%', top: '-165px' }}>
                        <Image src={ellipse} alt='' />
                    </div>
                    <h1 style={{ paddingTop: '1rem', color: '#333333', zIndex: '2' }}>
                        CONVERGED IN ONE POINT
                    </h1>
                    <p>
                        Leverage the paired power
                        of our robust platform and decade-long development expertise to create definitive software solutions for your enterprise.
                    </p>
                </div>
                <div className="platform-widget2" style={{ width: '25%' }}>
                    <Image src={mac} alt='' />
                </div>
            </div>
            <section className='analytics-wrapper flex flex-col' style={{ alignItems: 'center', textAlign: 'center' }}>
                <h1 style={{ margin: '2.5rem', color: '#1C1C1C', fontSize: '25px', fontWeight: '600' }}>
                    APP MANAGEMENT AND ANALYTICS
                </h1>
                <div className="analytics-container flex flex-col" style={{ paddingTop: '1rem', justifyContent: 'center', paddingLeft: '4rem', paddingRight: '4rem', gap: '5rem' }}>
                    <div className='flex analy-wrapper' style={{ justifyContent: 'center', gap: '5rem' }} >
                        <section className='flex flex-col analy-content' style={{ textAlign: 'start', gap: '1.5rem', width: '25%' }}>
                            <Image src={con} alt='' />
                            <h1 style={{ color: '#2D7EFF', fontWeight: '600' }}>
                                CONTENT MANAGEMENT
                            </h1>
                            <p>
                                Effortlessly manage your data in a single, user-friendly CMS. Preview content instantly in the dashboard.
                            </p>
                        </section>
                        <section className='flex flex-col analy-content' style={{ textAlign: 'start', gap: '1.5rem', width: '25%' }}>
                            <Image src={tic} alt='' />
                            <h1 style={{ color: '#2D7EFF', fontWeight: '600' }}>
                                ALL THE ANALYTICS
                            </h1>
                            <p>
                                Turn data into clear insights. Access actionable analytics & reports with intuitive graphs - make data-driven decisions instantly.
                            </p>
                        </section>
                        <section className='flex flex-col analy-content' style={{ textAlign: 'start', gap: '1.5rem', width: '25%' }}>
                            <Image src={ope} alt='' />
                            <h1 style={{ color: '#2D7EFF', fontWeight: '600' }}>
                                INTEGRATE YOUR OPERATIONS
                            </h1>
                            <p>
                                Unlock higher engagement: Store content in the cloud, segment, and personalize.
                            </p>
                        </section>
                    </div>
                    <div className='analytic-widget'>
                        <Image src={macpro} alt='' />
                    </div>
                </div>
            </section>
            <ContactComponent />
            <FooterComponent />
        </div>
    )
}

export default page
