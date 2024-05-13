import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import List from '../List'
import Button from '../Button'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Header = () => {

  let [sticky, setStiky] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      window.scrollY > 400 ? setStiky(true) : setStiky(false)
    })
  },[])

  return (
    <section className={`w-full text-white py-3 fixed z-10 ${sticky? "bg-blue-600 duration-1000" : ''}`}>
      <Container className="CNT">
        <Flex className="justify-between items-center">
          <Images src={logo} className="w-44"/>
          <ul className='flex justify-between gap-4 items-center font-out '>
            <Link to='hero' smooth={true} offset={0} duration={500}><List text="Home"/></Link>
            <Link to='program' smooth={true} offset={0} duration={500}><List text="Program"/></Link>
            <Link to='about' smooth={true} offset={0} duration={500}><List text="About us"/></Link>
            <Link to='campus' smooth={true} offset={-90} duration={500}><List text="Campus"/></Link>
            <Link to='testimonials' smooth={true} offset={-50} duration={500}><List text="Testimonials"/></Link>

            <Link to='contact' smooth={true} offset={0} duration={500}><Button text="Contuct us" className='bg-white text-black ml-6 text-base py-2 px-4 rounded-full font-out'/></Link>
             
          </ul>
        </Flex>
      </Container>
    </section>
  )
}

export default Header
