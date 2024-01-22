import React from 'react'
import Image from 'next/image'
import fintech from '../assets/vector (17).png'
import world from '../assets/vector (27).png'
import phone from '../assets/vector (12).png'
import logistics from '../assets/vector (25).png'
import estate from '../assets/vector (1).png'
import '../src/app/globals.css'

const DomainComponent = () => {
  return (
    <div className='w-full'>
      <main className="domain-wrapper" style={{ backgroundColor: '#F8F8F9', paddingTop: '4rem', paddingBottom: '4rem'}}>
        <div className="domain-text flex flex-col" style={{ textAlign: 'center', alignItems: 'center' }}>
          <h1 style={{ letterSpacing: '1px', width: '51%', fontSize: '20px', fontWeight: '500' }}>
            MULTI-INDUSTRY EXPERTISE FOR DIFFERENT BUSINESS DOMAIN
          </h1>
          <p className='flex' style={{ textAlign: 'center', alignItems: 'center', width: '75%' }}>
            We are proficient in delivering software solutions to companies of different business verticals. Our background covers such industries as:
          </p>
        </div>

        <div className="domain-card flex m-8" style={{ gap: '22px', justifyContent: 'center', marginTop: '2rem' }}>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
            <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
              <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={fintech} alt='' />
            </div>
            <p style={{ fontWeight: '600' }}>
              Fintech
            </p>
          </section>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
            <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
              <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={world} alt='' />
            </div>
            <p style={{ fontWeight: '600' }}>
              Travel & Hospitality
            </p>
          </section>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
            <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
              <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={phone} alt='' />
            </div>
            <p style={{ fontWeight: '600' }}>
              eCommerce & Retail
            </p>
          </section>
        </div>
        <div className="domain-card flex" style={{ gap: '22px', justifyContent: 'center', marginTop: '1rem'}}>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
            <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
              <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={logistics} alt='' />
            </div>
            <p style={{ fontWeight: '600' }}>
              Logistics
            </p>
          </section>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
            <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
              <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={estate} alt='' />
            </div>
            <p style={{ fontWeight: '600' }}>
              Real Estate
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default DomainComponent
