import React, { lazy } from 'react'
import Image from 'next/image'
import t$c from '../components/t$c.jpg'


function Intro() {
  return (
    <div class='design'>
        <div>
            <h1>The Best <span>Interior</span> <br /> Design Products for <br /> your Home</h1>
            <p>The Home of quality interior design products that will spice up your homes</p>
        </div>
        <div>
            <Image alt='tables and chairs' src={t$c} layout='responsive' width={350} />

        </div>
    </div>
  )
}

export default Intro