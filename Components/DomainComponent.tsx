import React from 'react'
import Image from 'next/image'
import fintech from '../assets/Group 111.svg'
import world from '../assets/Group 112.svg'
import phone from '../assets/Group 114.svg'
import logistics from '../assets/Group 113.svg'
import estate from '../assets/Group 63.svg'
import '../src/app/globals.css'

const DomainComponent = () => {
  return (
    <div className='w-full'>
      <main className="domain-wrapper" style={{ backgroundColor: '#F8F8F9', paddingTop: '4rem', paddingBottom: '4rem'}}>
        <div className="domain-text flex flex-col" style={{ textAlign: 'center', alignItems: 'center' }}>
          <h1 style={{ letterSpacing: '1px', width: '51%', fontSize: '20px', fontWeight: '600', marginBottom: '2rem' }}>
            MULTI-INDUSTRY EXPERTISE FOR DIFFERENT BUSINESS DOMAIN
          </h1>
          <p className='flex' style={{ textAlign: 'center', alignItems: 'center', width: '75%' }}>
            We are proficient in delivering software solutions to companies of different business verticals. Our background covers such industries as:
          </p>
        </div>

        <div className="domain-card flex m-8" style={{ gap: '22px', justifyContent: 'center', marginTop: '2rem' }}>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
              <Image style={{ top: '7px',left: '7px', width: '20%' }} className='h-fit' src={fintech} alt='' />
        
            <p style={{ fontWeight: '600'}}>
              Fintech
            </p>
          </section>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
              <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={world} alt='' />
          
            <p style={{ fontWeight: '600' }}>
              Travel & Hospitality
            </p>
          </section>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
              <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={phone} alt='' />
            
            <p style={{ fontWeight: '600' }}>
              eCommerce & Retail
            </p>
          </section>
        </div>
        <div className="domain-card flex" style={{ gap: '22px', justifyContent: 'center', marginTop: '1rem'}}>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
           
              <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={logistics} alt='' />
          
            <p style={{ fontWeight: '600' }}>
              Logistics
            </p>
          </section>
          <section className='flex' style={{ padding: '.5rem', borderRadius: '.5rem', backgroundColor: 'white', alignItems: 'center', width: '22%', gap: '14px', }}>
            
              <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={estate} alt='' />
           
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
