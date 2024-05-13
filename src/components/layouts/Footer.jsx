import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'

const Footer = () => {
  return (
    <section>
        <Container className="border-t border-t-stone-500 mb-9">
            <Flex className="justify-between">
                <Paragraph text="© 2024 Edusity. All rights reserved." className="mt-6"/>
                <div className='flex justify-between gap-9 mt-6 '>
                    <Paragraph text="Terms of Services"/>
                    <Paragraph text=" Privacy Policy"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Footer