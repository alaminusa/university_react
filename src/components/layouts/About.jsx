import React from 'react'
import Images from '../Images'
import play from '../../assets/about.png'
import play_icn from '../../assets/play-icon.png'
import Paragraph from '../Paragraph'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'

const About = () => {
  return (
    <section className='py-32 font-out about'>
        <Container>
            <Flex className='gap-28'>
                <div className="w-1/2 relative ">
                    <Images src={play} className='rounded-lg w-full'/>
                    <Images src={play_icn} className='w-16 absolute top-1/2 left-1/2 bottom-0'/>
                </div>
                <div className="w-1/2 mt-16 pr-10 text-xl">
                    <Paragraph text="ABOUT UNIVERSITY" className='font-semibold text-base text-blue-800'/>
                    <Heading className="text-4xl font-bold w-96 text-blue-950 py-4" text="Nurturing Tomorrow's Leaders Today" as='h4' />

                    <Paragraph className='' text="Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education."/>

                    <Paragraph className='py-6' text="With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities."/>

                    <Paragraph className='' text="Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education."/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default About