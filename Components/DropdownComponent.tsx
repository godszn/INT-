import React, { useState } from 'react'
import Image from 'next/image'
import Mobilelogo from '../assets/Group 143.svg'
import back2 from '../assets/back2.svg'
import close from '../assets/icon-park-outline_close-one.svg'

interface MenuDropdown {
  menuClick: () => void
}

const DropdownComponent: React.FC<MenuDropdown> = ({ menuClick }) => {
  const [service, setService] = useState(false)
  const [industry, setIndustry] = useState(false)
  const [client, setClient] = useState(false)
  const [company, setCompany] = useState(false)
  const serviceDisplay = () => {
    setService(!service)
  }
  const industryDisplay = () => {
    setIndustry(!industry)
  }
  const clientDisplay = () => {
    setClient(!client)
  }
  const companyDisplay = () => {
    setCompany(!company)
  }

  return (
    <div>
      <section className="dropdown-wrapper">
        <div className='flex dropdown-widget' style={{}}>
          <Image src={Mobilelogo} alt='' />
          <Image onClick={menuClick} src={close} alt='' />
        </div>
        <div className='dropdown-list relative'>
          <ul>
            <li onClick={serviceDisplay}>SERVICES</li>
            <li onClick={industryDisplay}>INDUSTRIES</li>
            <li onClick={clientDisplay}>CLIENTS</li>
            <li onClick={companyDisplay}>COMPANY</li>
          </ul>
          {service && (
            <div className='absolute w-full z-10 top-0 serv-dropdown' style={{ backgroundColor: 'white', height: '440px' }}>
              <div className='flex w-fit' onClick={serviceDisplay} style={{ gap: '10px' }}>
                <Image src={back2} alt='' />
                <h1>
                  SERVICES
                </h1>
              </div>
              <ul>
                <li>
                  Enterprise Software Development
                </li>
                <li>
                  Mobile App Development
                </li>
                <li>
                  Dedicated Development Team
                </li>
              </ul>
            </div>
          )}
          {industry && (
            <div className='absolute w-full z-10 top-0 serv-dropdown' style={{ backgroundColor: 'white', height: '440px' }}>
              <div className='flex w-fit' onClick={industryDisplay} style={{ gap: '10px' }}>
                <Image src={back2} alt='' />
                <h1>
                  INDUSTRIES
                </h1>
              </div>
              <ul>
                <li>
                  Fintech
                </li>
                <li>
                  Travel & Hospitality
                </li>
                <li>
                  Ecommerce & Retails
                </li>
                <li>
                  Logistics & Transportation
                </li>
                <li>
                  Real Estate
                </li>
              </ul>
            </div>
          )}
          {client && (
            <div className='absolute w-full z-10 top-0 serv-dropdown' style={{ backgroundColor: 'white', height: '440px' }}>
              <div className='flex w-fit' onClick={clientDisplay} style={{ gap: '10px' }}>
                <Image src={back2} alt='' />
                <h1>
                  CLIENTS
                </h1>
              </div>
              <ul>
                <li>
                  Our Clients
                </li>
                <li>
                  Case Studies
                </li>
              </ul>
            </div>
          )}
          {company && (
            <div className='absolute w-full z-10 top-0 serv-dropdown' style={{ backgroundColor: 'white', height: '440px' }}>
              <div className='flex w-fit' onClick={companyDisplay} style={{ gap: '10px' }}>
                <Image src={back2} alt='' />
                <h1>
                  COMPANY
                </h1>
              </div>
              <ul>
                <li>
                  About
                </li>
                <li>
                  Team
                </li>
                <li>
                  Careers
                </li>
                <li>
                  Social Responsibility
                </li>
                <li>
                  Contacts
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className='button-wrapper' style={{ marginTop: '162px' }}>
          <button style={{ backgroundColor: '#F54D4D', color: 'white', borderRadius: '8px', height: '55px', margin: '2rem', width: '86%' }}>
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  )
}

export default DropdownComponent

/*https://www.figma.com/file/KMILrLUyoAs9r14wVPF8kE/int%2B-website-design?type=design&node-id=151-1547&mode=design&t=jRbqt3uOVbODqQkY-0*/
