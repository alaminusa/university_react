import Button from '../Button'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const Hero = () => {
  return (
    <section className='hero w-full min-h-[100vh] bg-hero text-white flex items-center justify-center bg-center bg-cover'>
        <Container className=''>
            <div className='text-center px-80'>
                <Heading text='We Ensure better education for a better world' as="h1" className="text-6xl font-semibold leading-normal"/>
                <Paragraph text="Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education" className="leading-normal my-4"/>
                <Button text=" Explore More" className='bg-white text-black ml-6 text-base py-2 px-4 rounded-full font-out'/>
            </div>
        </Container>
    </section>
  )
}

export default Hero