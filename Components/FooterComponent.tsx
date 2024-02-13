import React from 'react'
import Image from 'next/image'
import '../src/app/globals.css'
import cap from '../assets/cap.png'
import line from '../assets/Line 13.png'

const FooterComponent = () => {
    return (
        <div className='w-full'>
            <main className="footer-wrapper" style={{ backgroundColor: '#FAFAFA' }}>
                <div className="footer-items">
                    <div className='service-footer' style={{ fontSize: 'smaller' }}>
                        <h1 style={{ fontWeight: '600' ,fontSize: '14px' }}>
                            SERVICES
                        </h1>
                        <p style={{ color: '#998E8E' }}>
                            Product Development
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Mobile Development
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Web Development
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Startup & MVP solutions
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Enterprise Solutions
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Dedicated Teams
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            IT Consulting
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            UI/UX Design
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            QA & Testing
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Solution Architecture
                        </p>
                    </div>
                    <div className="industry-footer">
                        <h1 style={{ fontWeight: '600', fontSize: '14px'}}>
                            INDUSTRIES
                        </h1>
                        <p style={{ color: '#998E8E' }}>
                            Fintech
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Travel & Hospitality
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            eCommerce & Retails
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Logistics & Transportation
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Real Estate
                        </p>
                    </div>
                    <div className="company-footer" style={{ fontSize: 'smaller' }}>
                        <h1 style={{ fontWeight: '600', fontSize: '14px' }}>
                            COMPANIES
                        </h1>
                        <p style={{ color: '#998E8E' }}>
                            About
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Team
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Careers
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Blog
                        </p>
                        <p style={{ color: '#998E8E' }}>
                            Social Responsibility
                        </p>
                    </div>
                    <div className='contact-footer' >
                        <h1 style={{ fontWeight: '600', fontSize: '14px' }}>
                            CONTACT
                        </h1>
                        <p style={{ color: '#2D7EFF', fontSize: 'smaller' }}>
                            info@intplus.co
                        </p>
                    </div>
                </div>
                <div className='footer-end flex' style={{ borderTop: '1px solid black', gap: '2rem' }}>
<<<<<<< HEAD
                    <section className='flex footsmall' style={{ marginTop: '1rem', gap: '.5rem', alignItems: 'center' }}>
=======
                    <section className='flex' style={{ marginTop: '1rem', gap: '.5rem', alignItems: 'center' }}>
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                        <Image src={cap} alt='' />
                        <p>
                            2024 Int+
                        </p>
                    </section>
<<<<<<< HEAD
                    <section className='flex footsmall' style={{ marginTop: '1rem', gap: '.5rem', alignItems: 'center' }}>
                        <Image src={line} className='line' alt='' />
=======
                    <section className='flex' style={{ marginTop: '1rem', gap: '.5rem', alignItems: 'center' }}>
                        <Image src={line} alt='' />
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                        <p>
                            Terms of use
                        </p>
                    </section>
<<<<<<< HEAD
                    <section className='flex  footsmall' style={{ marginTop: '1rem', gap: '.5rem', alignItems: 'center' }}>
                        <Image src={line} className='line' alt='' />
=======
                    <section className='flex' style={{ marginTop: '1rem', gap: '.5rem', alignItems: 'center' }}>
                        <Image src={line} alt='' />
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                        <p>
                            Privacy Policy
                        </p>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default FooterComponent
