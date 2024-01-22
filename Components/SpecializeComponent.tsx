import React from 'react'
import '../src/app/globals.css'

const SpecializeComponent = () => {
    return (
        <div>
            <section className="specialize-wrapper flex flex-col items-center justify-center p-4 mt-4" style={{marginTop:'2rem', marginBottom: '2rem'}}>
                <h1 className='font-bold mb-4 text-xl' style={{fontWeight: '700', color: '#333333', textAlign: 'center' , width:'53%' , letterSpacing:'1px'}}>
                    THE COMPANY SPECIALIZING IN SOFTWARE DEVELOPMENT THAT EMPOWERS BUSINESS
                </h1>
                <p className='font-semibold' style={{textAlign: 'center' , width: '70%', color: '#333333'}}>
                    We offer a comprehensive approach encompassing consulting, engineering, and support services. As a software solutions provider,
                    Int+ specializes in delivering, Blockchain, mobile, and other custom solutions.
                    No project is too complex—we handle everything from basic mobile apps to advanced cloud-based enterprise products.
                    Strengthen your business with our blend of expertise, technological resources,
                    intelligence, and a dedicated commitment to crafting innovative software solutions that truly matter.
                </p>
            </section>
        </div>
    )
}

export default SpecializeComponent
