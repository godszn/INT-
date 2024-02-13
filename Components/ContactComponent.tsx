<<<<<<< HEAD
import React from 'react'
import '../src/app/globals.css'
import Image from 'next/image'
import attach from '../assets/attach.png'
=======
import Image from 'next/image'
import attach from '../assets/attach.png'
import '../src/app/globals.css'
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f

const ContactComponent = () => {
    return (
        <div className='w-full'>
            <div className="contact-wrapper" style={{ backgroundColor: '#2D7EFF' }}>
                <section className="contact-container flex" style={{ padding: '6rem', justifyContent: 'center', width: '100%', gap: '6rem' }}>
                    <section className="contact-widget p-4" style={{ width: '347.98px', backgroundColor: 'white', borderRadius: '.5rem', padding: '.5rem' }}>
                        <h1 style={{ textAlign: 'center', marginTop: '1rem', fontSize: '20px', fontWeight: '500', letterSpacing: '1px' }}>
                            CONTACT US
                        </h1>
                        <div className="contact-input flex flex-col">
                            <input className='m-4' placeholder='Name' style={{ borderRadius: '.3rem', border: '1px solid #998E8E', width: '300px', margin: '.5rem', padding: '.5rem' }} />
                            <input className='m-4' placeholder='Business Email*' style={{ borderRadius: '.3rem', border: '1px solid #998E8E', width: '300px', margin: '.5rem', padding: '.5rem' }} />
                            <input className='m-4' placeholder='Alternative Email*' style={{ borderRadius: '.3rem', border: '1px solid #998E8E', width: '300px', margin: '.5rem', padding: '.5rem' }} />
                            <input className='m-4' placeholder='+234   |' style={{ borderRadius: '.3rem', border: '1px solid #998E8E', width: '300px', margin: '.5rem', padding: '.5rem' }} />
                            <div className='relative'>
<<<<<<< HEAD
                                <section className='flex' style={{ position: 'absolute', bottom: '25px', right: '23px' , width: '67px'}}>
=======
                                <section className='flex' style={{ position: 'absolute', bottom: '25px', right: '23px' }}>
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                                    <Image alt='' className='h-fit' style={{ width: '17%' }} src={attach} />
                                    <p style={{ color: '#3333338F', fontSize: 'x-small' }}>
                                        Attach files
                                    </p>
                                </section>
<<<<<<< HEAD
                                <textarea className='m-4' placeholder='Tell us about your project*' style={{ borderRadius: '.3rem', border: '1px solid #998E8E', width: '316px', height: '120px', margin: '.5rem', padding: '.5rem' }} />
                            </div>
                            <div className='p-4'style={{paddingTop: '0'}}>
                                <section className='flex'>
                                    <input type="checkbox" style={{width:'19px !important'}} />
                                    <label style={{ fontSize: 'small',marginLeft: '.5rem', color: '#3333338F' }}>
                                        Request NDA
                                    </label>
                                </section>
                                <p style={{ fontSize: 'x-small',paddingTop: '1rem',color: '#3333338F'}}>
=======
                                <textarea className='m-4' placeholder='Tell us about your project*' style={{ borderRadius: '.3rem', border: '1px solid #998E8E', width: '300px', height: '120px', margin: '.5rem', padding: '.5rem' }} />
                            </div>
                            <div className='p-4' style={{ paddingTop: '0' }}>
                                <section className='flex'>
                                    <input type="checkbox" />
                                    <label style={{ fontSize: 'small', marginLeft: '.5rem', color: '#3333338F' }}>
                                        Request NDA
                                    </label>
                                </section>
                                <p style={{ fontSize: 'x-small', paddingTop: '1rem', color: '#3333338F' }}>
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                                    By sending this form I confirm that I have read and accept Int+
                                    <a style={{ color: '#2D7EFF', marginLeft: '.5rem' }} href="https://www.sportybet.com/ng/m/">Privacy Policy</a>
                                </p>
                                <button style={{ backgroundColor: '#F54D4D', width: '100%', color: 'white', fontSize: 'smaller', borderRadius: '.3rem', padding: '.4rem', marginTop: '1rem' }}>
                                    SEND
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="contact-text" style={{ color: 'white', width: '44%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '1rem' }}>
<<<<<<< HEAD
                            WHAT'S NEXT?
=======
                            WHAT&apos;S NEXT?
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                        </h1>
                        <ul className='contact-list'>
                            <li style={{ listStyle: 'outside' }}>
                                We will send a short email notifying you that we successfully received your request and started working on it.
                            </li>
                            <li style={{ listStyle: 'outside' }}>
                                Our solution advisor analyzes your requirements and will reach back to you within 3 business days.
                            </li>
                            <li style={{ listStyle: 'outside' }}>
                                We may sign an optional mutual NDA within 1-2 business days to make sure you get the highest confidentiality level.
                            </li>
                            <li style={{ listStyle: 'outside' }}>
                                Our business development manager presents you an initial project estimation,
                                ballpark figures, or our project recommendations within approximately 3-5 days.
                            </li>
                        </ul>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default ContactComponent
