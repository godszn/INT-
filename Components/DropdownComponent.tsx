import React from 'react'
import Image from 'next/image'
import Mobilelogo from '../assets/Group 143.svg'
import close from '../assets/icon-park-outline_close-one.svg'

interface MenuDropdown {
  menuClick : () => void
}

const DropdownComponent:React.FC<MenuDropdown> = ({menuClick}) => {
  return (
    <div>
      <section className="dropdown-wrapper">
        <div className='flex dropdown-widget' style= {{}}>
           <Image src={Mobilelogo} alt=''/>
           <Image  onClick={menuClick} src={close} alt=''/>
        </div>
        <div className='dropdown-list'>
            <ul>
                <li>SERVICES</li>
                <li>INDUSTRIES</li>
                <li>CLIENTS</li>
                <li>COMPANY</li>
            </ul>
        </div>
        <div className='button-wrapper' style= {{marginTop: '162px'}}>
           <button style={{backgroundColor: '#F54D4D',color: 'white', borderRadius: '8px', height: '55px', margin: '2rem', width: '86%'}}>
              Get in Touch
           </button>
        </div>
      </section>
    </div>
  )
}

export default DropdownComponent
