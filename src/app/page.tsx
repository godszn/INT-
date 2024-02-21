'use client'
import 'tailwindcss/tailwind.css'
import './globals.css'
import SpecializeComponent from '../../Components/SpecializeComponent'
import DiscoverComponent from '../../Components/DiscoverComponent'
import SolutionComponent from '../../Components/SolutionComponent'
import { useState } from 'react'
import DevelopmentComponent from '../../Components/DevelopmentComponent'
import DomainComponent from '../../Components/DomainComponent'
import DecisionComponent from '../../Components/DecisionComponent'
import ContactComponent from '../../Components/ContactComponent'
import FooterComponent from '../../Components/FooterComponent'
import SliderComponent from '../../Components/SliderComponent'
import DropdownComponent from '../../Components/DropdownComponent'

export default function Home() {
  const [showDropdown, setDropdown ] =useState(false)

const handleDropdown =  () => {
  setDropdown((!showDropdown))
  document.body.classList.toggle('bodyscroll')
}
  return (
    <main>
      <SliderComponent menuClick = {handleDropdown}/>
      {showDropdown && <DropdownComponent menuClick = {handleDropdown}/>}
      <SpecializeComponent />
      <DiscoverComponent/>
      <SolutionComponent/>
      <DevelopmentComponent/>
      <DomainComponent/>
      <DecisionComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </main>
  )
}
