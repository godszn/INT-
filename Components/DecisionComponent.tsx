import React from 'react'
import tick from '../assets/vector (2).png'
import Image from 'next/image'
import '../src/app/globals.css'

const DecisionComponent = () => {
    return (
        <div className='w-full'>
            <div className="descision-wrapper" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <section className="decision-text" style={{ textAlign: 'center' }}>
<<<<<<< HEAD
                    <h1 style={{ fontWeight: '600', fontSize: '20px', marginBottom: '1rem', letterSpacing: '1px' }}>
=======
                    <h1 style={{ fontWeight: '500', fontSize: '20px', marginBottom: '1rem', letterSpacing: '1px' }}>
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                        WHY CHOOSE INT+
                    </h1>
                    <p>
                        When you choose Int+ to empower the technical side of your business, you will get:
                    </p>
                </section>
                <section className="decision-container" style={{ marginTop: '2rem', paddingTop: '2rem' }}>
                    <div className="decision-content flex" style={{ gap: '1rem' }}>
                        <Image style={{ width: '5%', height: 'fit-content' }} src={tick} alt='' />
                        <p style={{ fontWeight: '500' }}>
                            Technological competitive advantage
                        </p>
                    </div>
<<<<<<< HEAD
                    <div className="decision-content fe flex" style={{ gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}>
=======
                    <div className="decision-content flex" style={{ gap: '1rem', alignItems: 'center', justifyContent: 'flex-end' }}>
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                        <Image style={{ width: '5%', height: 'fit-content' }} src={tick} alt='' />
                        <p style={{ fontWeight: '500' }}>
                            End-user satisfaction rate increase
                        </p>
                    </div>
                    <div className="decision-content flex" style={{ gap: '1rem' }}>
                        <Image style={{ width: '5%', height: 'fit-content' }} src={tick} alt='' />
                        <p style={{ fontWeight: '500' }}>
                            Reduced time-to-market
                        </p>
                    </div>
<<<<<<< HEAD
                    <div className="decision-content fe flex" style={{ gap: '2.2rem', alignItems: 'center', justifyContent: 'flex-end' }}>
=======
                    <div className="decision-content flex" style={{ gap: '2.2rem', alignItems: 'center', justifyContent: 'flex-end' }}>
>>>>>>> f44d7a60a6170846d0d2ba2a11298e8a3bc6c46f
                        <Image style={{ width: '5%', height: 'fit-content' }} src={tick} alt='' />
                        <p style={{ fontWeight: '500' }}>
                            Efficiency and productivity boost
                        </p>
                    </div>
                </section>
                <section className="decision-container-text">
                    <p>
                        Stand out and become the unique factor among your competitors. As a committed software solutions company, we tackle
                        challenges like outdated software, inefficient processes, and limited digital presence. Our mission revolves around propelling your
                        business toward an exciting new level!
                    </p>
                </section>
            </div>
        </div>
    )
}

export default DecisionComponent
