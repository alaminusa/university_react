import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import pgm1 from '../../assets/program-1.png'
import pgm2 from '../../assets/program-2.png'
import pgm3 from '../../assets/program-3.png'
import pgm_icn1 from '../../assets/program-icon-1.png'
import pgm_icn2 from '../../assets/program-icon-2.png'
import pgm_icn3 from '../../assets/program-icon-3.png'
import Paragraph from '../Paragraph'
import Heading from '../Heading'


const Program = () => {
  return (
    <section className='py-9 font-out program' >
        <Container className='text-white'>
         <div className="py-14">
           <Paragraph text='Our Program' className="text-blue-800 text-center text-base font-semibold uppercase"/>
            <Heading text='What We Offer' as="h3" className="text-blue-950 text-center text-3xl font-semibold"/>
         </div>
            <Flex className="justify-between">
                <div className='w-[30%] relative '>
                  <Images src={pgm1} className="rounded-lg "/>
                  <div className="bg-[#000f98b3] absolute top-0 left-0 bottom-0 pt-[70%] duration-300 hover:pt-0 right-0 flex items-center justify-center flex-col opacity-0 hover:opacity-100 hover:cursor-pointer">
                    <Images src={pgm_icn1} className='w-16'/>
                    <Paragraph text='Graduation Degree'/>
                  </div>
                </div>
                <div className='w-[30%] relative'>
                  <Images src={pgm2} className="rounded-lg "/>
                  <div className="bg-[#000f98b3] absolute top-0 left-0 bottom-0 pt-[70%] duration-300 hover:pt-0 right-0 flex items-center justify-center flex-col opacity-0 hover:opacity-100 hover:cursor-pointer">
                    <Images src={pgm_icn2} className='w-16'/>
                    <Paragraph text='Graduation Degree'/>
                  </div>
                </div>
                <div className='w-[30%] relative'>
                  <Images src={pgm3} className="rounded-lg "/>
                  <div className="bg-[#000f98b3] absolute top-0 left-0 bottom-0 pt-[70%] duration-300 hover:pt-0 right-0 flex items-center justify-center flex-col opacity-0 hover:opacity-100 hover:cursor-pointer">
                    <Images src={pgm_icn3} className='w-16'/>
                    <Paragraph text='Graduation Degree'/>
                  </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Program