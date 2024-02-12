import React, { useState } from 'react'
import Image from 'next/image'
import dropdown from '../assets/vector (29).png'
import skill1 from '../assets/Group 104.svg'
import skill2 from '../assets/Group 105.svg'
import skill3 from '../assets/Group 60.svg'
import skill4 from '../assets/Group 59.svg'
import skill5 from '../assets/Group 58.svg'
import skill6 from '../assets/Group 57.svg'
import skill7 from '../assets/Group 55.svg'
import skill8 from '../assets/Group 54.svg'
import skill9 from '../assets/Group 56.svg'
import '../src/app/globals.css'

const DiscoverComponent = () => {
    const [detail, setDetail] = useState(false);
    const [detail1, setDetail1] = useState(false);
    const [detail2, setDetail2] = useState(false);
    const [detail3, setDetail3] = useState(false);
    const [detail4, setDetail4] = useState(false);
    const [detail5, setDetail5] = useState(false);
    const [detail6, setDetail6] = useState(false);
    const [detail7, setDetail7] = useState(false);
    const [detail8, setDetail8] = useState(false);

    const [rotation, setRotation] = useState(0);
    const [rotation1, setRotation1] = useState(0);
    const [rotation2, setRotation2] = useState(0);
    const [rotation3, setRotation3] = useState(0);
    const [rotation4, setRotation4] = useState(0);
    const [rotation5, setRotation5] = useState(0);
    const [rotation6, setRotation6] = useState(0);
    const [rotation7, setRotation7] = useState(0);
    const [rotation8, setRotation8] = useState(0);

    const dropdownDetail = () => {
        setDetail((!detail))
        setRotation(rotation + 180)
    }
    const dropdownDetail1 = () => {
        setDetail1((!detail1))
        setRotation1(rotation1 + 180)
    }
    const dropdownDetail2 = () => {
        setDetail2((!detail2))
        setRotation2(rotation2 + 180)
    }
    const dropdownDetail3 = () => {
        setDetail3((!detail3))
        setRotation3(rotation3 + 180)
    }
    const dropdownDetail4 = () => {
        setDetail4((!detail4))
        setRotation4(rotation4 + 180)
    }
    const dropdownDetail5 = () => {
        setDetail5((!detail5))
        setRotation5(rotation5 + 180)
    }
    const dropdownDetail6 = () => {
        setDetail6((!detail6))
        setRotation6(rotation6 + 180)
    }
    const dropdownDetail7 = () => {
        setDetail7((!detail7))
        setRotation7(rotation7 + 180)
    }
    const dropdownDetail8 = () => {
        setDetail8((!detail8))
        setRotation8(rotation8 + 180)
    }


    return (
        <div className='w-full '>
            <section className="Discover-wrapper items-center w-full flex flex-col" style={{ backgroundColor: '#F8F8F9', padding: '2rem' }}>
                <section className=' flex w-full items-center' style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <h1 className='font-bold mb-4 text-xl' style={{fontWeight: '500', color: '#333333', textAlign: 'center', width: '53%', letterSpacing: '1px' }}>
                        DISCOVER OUR OFFERINGS TAILORED TO ENSURE A SMOOTH LAUNCH FOR YOUR PROJECT
                    </h1>
                </section>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '10px', left: '5px', width: '23%' }} className='h-fit' src={skill1} alt='' />
                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                Web development
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                We specialize in developing functional and captivating web products catering to various industries.
                                With a wide array of technologies at our disposal, we choose the most suitable approach for your project.
                                Our team crafts progressive web apps, e-commerce platforms, and a range of other solutions to meet your needs.
                            </p>
                            <ul className='flex' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    Web Development Services
                                </li>
                                <li style={{ listStyle: 'outside' }}>
                                    Web Application Development Services
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail1} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '4px', left: '10px', width: '19%' }} className='h-fit' src={skill2} alt='' />

                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                Mobile App Development
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail1} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation1}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail1 && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                Int+ Delivering custom mobile development application services,
                                we help boost your sales and foster client loyalty through stable, interactive, and high-performance mobile applications.
                            </p>
                            <ul className='skill-list' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    Mobile App Development Services
                                </li>
                                <li style={{ listStyle: 'outside' }}>
                                    Android App Development Services
                                </li>
                                <li style={{ listStyle: 'outside' }}>
                                    iOS App Development Services
                                </li>
                                <li style={{ listStyle: 'outside' }}>
                                    Hybrid App Development Services
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail2} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '7px', left: '7px', width: '15%' }} className='h-fit' src={skill3} alt='' />
                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                MVP for Startups and Enterprises
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail2} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation2}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail2 && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                Our experienced managers, business analysts, developers, and designers collaborate to assist companies in validating their business concepts.
                                We guide you through testing your project using an MVP (Minimum Viable Product), gathering valuable feedback from your intended audience, and ultimately launching a solution that perfectly aligns with the market needs.
                            </p>
                            <ul className='flex' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    Software Development for startups
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail3} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '4px', left: '6px', width: '16%' }} className='h-fit' src={skill4} alt='' />
                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                Dedicated Development Teams
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail3} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation3}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail3 && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                Accelerate your time-to-market and cut hiring costs significantly. Our pool of talented professionals provides rapid, high-quality development services on demand.
                                Whether you need to outsource entire projects or bolster your existing team with our skilled engineers, we've got you covered.
                            </p>
                            <ul className='flex' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    Dedicated Software Development Team
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail4} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '7px', left: '8px', width: '15%' }} className='h-fit' src={skill5} alt='' />
                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                Enterprise Software Development
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail4} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation4}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail4 && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                We specialize in API integration, enterprise software development, mobility solutions, digital transformation services, and beyond.
                                Optimize your data management and operational efficiency with our intelligent and optimized solutions.
                            </p>
                            <ul className='flex' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    Enterprise Software Development Services
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail5} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '10px', left: '5px', width: '13%' }} className='h-fit' src={skill6} alt='' />
                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                Enterprise Software Development Services
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail5} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation5}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail5 && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                Streamline your operations and expedite achieving business objectives through Int+'s digital transformation approach.
                                Our strategic IT consulting enhances your software architecture, focusing on designing performance-driven tech innovations.
                            </p>
                            <ul className='flex' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    IT Consulting Services
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail6} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '10px', left: '5px', width: '28%' }} className='h-fit' src={skill7} alt='' />
                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                UI/UX Design
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail6} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation6}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail6 && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                Captivate and retain your users with intuitive, engaging, and responsive designs. We specialize in crafting user-centric interfaces aimed at enhancing the overall customer experience.
                            </p>
                            <ul className='flex' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    UI/UX Design Services
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail7} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '6px', left: '7px', width: '28%' }} className='h-fit' src={skill8} alt='' />
                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                QA & Testing
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail7} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation7}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail7 && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                Our company performs both manual and automated quality assurance checks to ensure impeccable solutions. By integrating the best practices and leveraging the latest technologies,
                                we guarantee efficient performance and high-quality project implementation.
                            </p>
                            <ul className='flex' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    QA & Software Testing Services
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
                <div className="skill-wrapper flex flex-col">
                    <div className='flex' onClick={dropdownDetail8} style={{ marginTop: '.5rem', marginBottom: '.5rem', width: '94%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="skill-logo flex items-center">
                                <Image style={{ top: '5px', left: '5px', width: '16%' }} className='h-fit' src={skill9} alt='' />
                            <h1 style={{ marginLeft: '1rem', fontWeight: '600', color: '#333333' }}>
                                Software Architecture Solutions
                            </h1>
                        </div>
                        <div className='dropdown' onClick={dropdownDetail8} style={{ cursor: 'pointer !important' }}>
                            <Image className='h-fit' style={{ transition: 'all .5s ease-in-out', transform: `rotate(${rotation8}deg)`, width: '60%' }} src={dropdown} alt='' />
                        </div>
                    </div>
                    {detail8 && (
                        <section className="skill-details flex-col flex" style={{ padding: '1rem', backgroundColor: 'rgb(248, 248, 249)', transition: 'all ease-in-out' }} >
                            <p>
                                Our tech leads specialize in designing software architecture that ensures your product's maintainability, interoperability, security, and stable performance.
                            </p>
                            <ul className='flex' style={{ padding: '1.3rem', width: '85%', justifyContent: 'space-between' }}>
                                <li style={{ listStyle: 'outside' }}>
                                    Project & Software Architecture
                                </li>
                            </ul>
                        </section>
                    )}
                </div>
            </section>
        </div>
    )
}

export default DiscoverComponent
