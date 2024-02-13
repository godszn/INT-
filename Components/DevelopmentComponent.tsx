<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
import Image from 'next/image'
import dev from '../assets/vector (18).png'

const DevelopmentComponent = () => {
    return (
        <div>
<<<<<<< HEAD
            <main className="development-wrapper" style={{ backgroundColor: '#F8F8F9' , paddingBottom: '2rem'}}>
                <div className="development-text p-4 " style={{marginBottom: '2rem', textAlign: 'center', fontSize: '20px' }} >
                    <h1 className='p-4'style={{fontWeight: '500'}}>
                        OUR SOFTWARE AGENCY'S DEVELOPMENT CYCLE
                    </h1>
                    <p style={{fontSize: 'smaller'}}>
=======
            <main className="development-wrapper" style={{ backgroundColor: '#F8F8F9', paddingBottom: '2rem' }}>
                <div className="development-text p-4 " style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '20px' }} >
                    <h1 className='p-4' style={{ fontWeight: '500' }}>
                        OUR SOFTWARE AGENCY&apos;S DEVELOPMENT CYCLE
                    </h1>
                    <p style={{ fontSize: 'smaller' }}>
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                        We are a custom software solution provider, our development cycle is adaptable to suit your project and requirements.
                        You have the flexiblity to request end-to-end full-cycle software development or select specific services that aligns with your needs.
                    </p>
                </div>
<<<<<<< HEAD
                <section className='flex' style={{justifyContent: 'center'}}>
                <Image  src={dev} alt='' style={{width: '85%'}}/>
=======
                <section className='flex' style={{ justifyContent: 'center' }}>
                    <Image src={dev} alt='' style={{ width: '85%' }} />
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                </section>
            </main>
        </div>
    )
}

export default DevelopmentComponent
