import React from 'react'
import Paragraph from '../Paragraph'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Images from '../Images'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import Button from '../Button'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "54302c47-5ad4-45ce-8b03-5a5f2d3fca1e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <section className='py-10 font-out contact'>
        <Paragraph text="CONTACT US" className='font-semibold text-base text-blue-800 text-center mt-9'/>
        <Heading className="text-4xl font-bold text-blue-950 py-4 text-center mb-16" text="Get in Touch" as='h4' />
        <Container>
            <Flex>
                <div className='w-1/2'>
                    <div className='flex items-center gap-5'>
                        <Paragraph text='Send us a message' className="text-2xl text-blue-900"/>
                        <Images src={msg_icon} className="w-9"/>
                    </div>
                    <Paragraph className='text-gray-500' text='Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.'/>
                    <div className='flex items-center gap-5  pt-6'>
                        <Images src={mail_icon} className="w-9"/>
                        <Paragraph text='contact@GreatStack.dev' className=""/>
                    </div>
                    <div className='flex items-center gap-5 py-6 text-gray-500'>
                        <Images src={phone_icon} className="w-9"/>
                        <Paragraph text='+1 123-456-7890' className=""/>
                    </div>
                    <div className='flex items-center gap-5 text-gray-500'>
                        <Images src={location_icon} className="w-9"/>
                        <Paragraph text='77 Massachusetts Ave, Cambridge MA 02139, United States' className=""/>
                    </div>
                </div>
                <form className='w-1/2' onSubmit={onSubmit}>
                    <div className='flex flex-col text-gray-500'>
                        <label htmlFor="name">Your name</label>
                        <input type="text" name='name' required placeholder='Enter your name' className='bg-blue-50 py-4 pl-5 mt-1'/>
                    </div>
                    <div className='flex flex-col text-gray-500 py-4'>
                        <label htmlFor="name">Phone Number</label>
                        <input type="tel" name='phone' required placeholder='Enter your mobile number' className='bg-blue-50 py-4 pl-5 mt-1'/>
                    </div>
                    <div className='flex flex-col text-gray-500'>
                        <label htmlFor="name">Your Email</label>
                        <input type="email" name='email' required placeholder='Enter your email id' className='bg-blue-50 py-4 pl-5 mt-1'/>
                    </div>
                    <div className='flex flex-col text-gray-500'>
                        <label htmlFor="name">Write your messages here</label>
                        <textarea name="message" rows='6' placeholder='Enter your message' className='bg-blue-50 py-4 pl-5 mt-1'></textarea>
                    </div>
                    <Button text="Submit Now" className='bg-blue-700 text-white py-4 px-10 rounded-full font-out mt-4 text-xl'/>
                    <span className='block mt-3'>{result}</span>
                </form>
            </Flex>
        </Container>
    </section>
  )
}


export default Contact

