import React from 'react'
import Image from 'next/image'
import skill from '../assets/Group 106.svg'
import skill1 from '../assets/Group 109.svg'
import skill2 from '../assets/Group 110.svg'
import skill3 from '../assets/Group 107.svg'
import skill4 from '../assets/Group 16.svg'
import skill5 from '../assets/Group 62.svg'
import skill6 from '../assets/Group 108.svg'
import skill7 from '../assets/Group 64.svg'
import skill8 from '../assets/Group 55.svg'


const SolutionComponent = () => {
    return (
        <div>
            <main className="solution-wrapper p-4" style={{ backgroundColor: '#F8F8F9' }}>
                <h1 className='p-4' style={{ textAlign: 'center', fontSize: '20px', fontWeight: '500'}}>
                    INT+ TECHNOLOGY SOLUTIONS
                </h1>
                <section className="maincard-wrapper">
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                                    <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={skill} alt='' />
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    Discovery Projects
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Conduct an in-depth exploration of your prospective project, ensuring alignment between business and technology stakeholders,
                                and gaining a precise understanding of the resources and timeline necessary to attain its objectives before making any investments.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                                    <Image style={{ top: '7px', left: '7px', width: '20%' ,transform: 'rotate(90deg)' }} className='h-fit' src={skill1} alt='' />
                                <h1 style={{fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    PoC/MVP Services
                                </h1>
                            </div>
                            <p style={{width: '100%', fontSize: 'smaller' }}>
                                Prototype to either identify shortcomings swiftly or enhance and fortify your concept.
                                Deliver a product version to gather feedback from early adopters, laying the groundwork for a comprehensive rollout.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">  
                                    <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={skill2} alt='' />
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    Business Process Automation
                                </h1>
                            </div>
                            <p style={{width: '100%', fontSize: 'smaller' }}>
                                Implement automation throughout the value chain to streamline repetitive and labor-intensive tasks.
                                This enhances overall performance, improves the experience for internal users, and enables scalable operations.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                                    <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={skill3} alt='' />
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    End-to-End System Integration
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Integrate existing systems and data landscapes using APIs to enhance efficiency, eliminate data silos, shadow IT, and reduce the likelihood of error-prone manual interventions.
                                This connects various elements and creates a seamless flow of information.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                                    <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={skill4} alt='' />
                                <h1 style={{fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    Cloud Solutions
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Leverage our expertise in empowering businesses through reliable cloud solutions, ensuring a scalable, adaptable, and interconnected enterprise environment.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                                    <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={skill5} alt='' />
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    Product Oriented Delivery (POD)
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Acquire a team possessing the ideal mix of skills to efficiently deliver your product or specific components within a favorable timeframe. This team collaborates closely with your business, product, and tech leadership to ensure alignment and success.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                               
                                    <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={skill6} alt='' />
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    Master Data Management
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Create a centralized, reliable source of corporate data to prevent expensive reconciliations,
                                eradicate inefficiencies and discrepancies, and unify your systems for seamless communication and understanding.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                                    <Image style={{ top: '7px', left: '7px', width: '20%' }} className='h-fit' src={skill7} alt='' />
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    Executive and Operational Dashboards
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Design secure dashboards showcasing essential business, financial, and operational indicators. These dashboards offer instant access and the capability to drill down to granular details for each metric.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col"> 
                                    <Image style={{ top: '11px', left: '7px', width: '20%' }} className='h-fit' src={skill8} alt='' />
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    UI/UX Design
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Develop a user-centric digital product alongside a seasoned team that employs clear and impactful design solutions.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SolutionComponent
