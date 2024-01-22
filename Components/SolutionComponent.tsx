import React from 'react'
import Image from 'next/image'
import skill from '../assets/game-icons_puzzle.png'
import skill1 from '../assets/settings-gear-svgrepo-com 1.png'
import skill2 from '../assets/vector (16).png'
import skill3 from '../assets/vector (4).png'
import skill4 from '../assets/vector (8).png'
import skill5 from '../assets/vector (28).png'
import skill6 from '../assets/vector (11).png'
import skill7 from '../assets/vector (10).png'
import skill8 from '../assets/vector (30).png'


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
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={skill} alt='' />
                                </div>
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
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '7px', left: '7px', width: '66%' ,transform: 'rotate(90deg)' }} className='h-fit absolute top-[50%]' src={skill1} alt='' />
                                </div>
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    PoC/MVP Services
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Prototype to either identify shortcomings swiftly or enhance and fortify your concept.
                                Deliver a product version to gather feedback from early adopters, laying the groundwork for a comprehensive rollout.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={skill2} alt='' />
                                </div>
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                    Business Process Automation
                                </h1>
                            </div>
                            <p style={{ width: '100%', fontSize: 'smaller' }}>
                                Implement automation throughout the value chain to streamline repetitive and labor-intensive tasks.
                                This enhances overall performance, improves the experience for internal users, and enables scalable operations.
                            </p>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-details flex flex-col p-4" style={{ borderRadius: '.5rem', backgroundColor: 'white' }}>
                            <div className="skill-logo flex flex-col">
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={skill3} alt='' />
                                </div>
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
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={skill4} alt='' />
                                </div>
                                <h1 style={{ fontWeight: '600', color: '#333333', paddingTop: '1rem', paddingBottom: '1rem' }}>
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
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={skill5} alt='' />
                                </div>
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
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={skill6} alt='' />
                                </div>
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
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '7px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={skill7} alt='' />
                                </div>
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
                                <div className='relative' style={{ borderRadius: '50%', padding: '1.3rem', border: '1px solid blue', width: '4%' }}>
                                    <Image style={{ top: '11px', left: '7px', width: '66%' }} className='h-fit absolute top-[50%]' src={skill8} alt='' />
                                </div>
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
