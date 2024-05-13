import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import Images from '../Images'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import Button from '../Button'


const Campus = () => {
  return (
    <section className='pb-9 font-out campus'>
        <div className="pb-14">
            <Paragraph text='Gallery' className="text-blue-800 text-center text-base font-semibold uppercase"/>
            <Heading text='Campus Photo' as="h3" className="text-blue-950 text-center text-3xl font-semibold"/>
         </div>
        <Container>
            <Flex className='justify-between'>
                <Images src={gallery_1} className='w-[23%] rounded-xl'/>
                <Images src={gallery_2} className='w-[23%] rounded-xl'/>
                <Images src={gallery_3} className='w-[23%] rounded-xl'/>
                <Images src={gallery_4} className='w-[23%] rounded-xl'/>
            </Flex>
            <div className='flex justify-center mt-9'>
              <Button text="Submit Now" className='bg-blue-700 text-white py-4 px-10 rounded-full font-out mt-4 text-xl'/>
            </div>
        </Container>
    </section>
  )
}

export default Campus