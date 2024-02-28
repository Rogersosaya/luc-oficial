import Container from '@/components/container/Container'
import React from 'react'
import Banner from '../../components/home/sections/Banner';

function GeneralPage() {
  return (
    <>
    <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <Banner/>
        </Container>
      </div></>
  )
}

export default GeneralPage
