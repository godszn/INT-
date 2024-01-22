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


export default function Home() {
  return (
    <main>
      <SliderComponent/>
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
