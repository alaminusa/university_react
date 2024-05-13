import React from 'react'
import Container from '../Container'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import Images from '../Images'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";



const Campus = () => {

    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

  return (
    <section className='pb-9 pt-10 font-out relative testimonials'>
        <div className="pb-14">
            <Paragraph text='Testimonials' className="text-blue-800 text-center text-base font-semibold uppercase "/>
            <Heading text='What Students Says' as="h3" className="text-blue-950 text-center text-3xl font-semibold"/>
         </div>
            
        <Container>
            <div className="">
                <Images src={next_icon} onClick={previous} className=' bg-blue-800 p-4 w-12 rounded-full cursor-pointer  right-28  absolute top-1/2'/>
                <Images src={back_icon} onClick={next} className=' bg-blue-800 p-4 w-12 rounded-full cursor-pointer  left-28 absolute top-1/2'/>
            </div>

        <Slider {...settings}>
            <div className='rounded-lg border-green-700 px-32'>
                <div className='flex gap-7 mx-12'>
                    <Images src={user_1} className=' rounded-full w-32  border-8 border-blue-800 '/>
                    <div className='mt-7'>
                        <Heading text='Emily Williams' as="h3" className="text-blue-800 text-3xl font-semibold"/>
                        <Paragraph text='Edusity, USA' className=" text-base text-gray-600" />
                    </div>
                </div>
                <Paragraph className="text-lg text-gray-600 px-12 mt-8" text="Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."/>
            </div>

            <div className='rounded-lg border-green-700 px-32'>
                <div className='flex gap-7 mx-12'>
                    <Images src={user_2} className=' rounded-full w-32  border-8 border-blue-800 '/>
                    <div className='mt-7'>
                        <Heading text='Will Jackson' as="h3" className="text-blue-800 text-3xl font-semibold"/>
                        <Paragraph text='Edusity, USA' className=" text-base text-gray-600" />
                    </div>
                </div>
                <Paragraph className="text-lg text-gray-600 px-12 mt-8" text="Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."/>
            </div>

            <div className='rounded-lg border-green-700 px-32'>
                <div className='flex gap-7 mx-12'>
                    <Images src={user_3} className=' rounded-full w-32  border-8 border-blue-800 '/>
                    <div className='mt-7'>
                        <Heading text='Shan Williams' as="h3" className="text-blue-800 text-3xl font-semibold"/>
                        <Paragraph text='Edusity, USA' className=" text-base text-gray-600" />
                    </div>
                </div>
                <Paragraph className="text-lg text-gray-600 px-12 mt-8" text="Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."/>
            </div>

            <div className='rounded-lg border-green-700 px-32'>
                <div className='flex gap-7 mx-12'>
                    <Images src={user_4} className=' rounded-full w-32  border-8 border-blue-800 '/>
                    <div className='mt-7'>
                        <Heading text='Denial Justin' as="h3" className="text-blue-800 text-3xl font-semibold"/>
                        <Paragraph text='Edusity, USA' className=" text-base text-gray-600" />
                    </div>
                </div>
                <Paragraph className="text-lg text-gray-600 px-12 mt-8" text="Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."/>
            </div>
            </Slider>
    </Container>
</section>
  )
}

export default Campus