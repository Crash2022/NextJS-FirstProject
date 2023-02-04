import Head from 'next/head'
import React from 'react'
import s from '../styles/About.module.css'

const About = () => {

    return (
        <>
            <Head>
                <title>Info about our company | About </title>
                <meta name='title' content='Info about our company'/>
            </Head>
            <div className='commonFlex'>
                <h1 className='commonFlex'>1974</h1>
                <div className={s.about_info}>
                    We are riders - that fact has guided our every decision since 1974.
                    When quality tires weren't around, we strove to make the best.
                    When people wanted to ride cruisers in the dirt, we made the first
                    production mountain bike. When roadies wanted to go faster,
                    we doubled-down on carbon and built our own wind tunnel.
                    And when we saw kids struggling to focus in school, we began supporting
                    Outride to help promote better health through cycling.

                    Specialized. Made for riders, by riders.
                </div>
            </div>
        </>
    )
}

export default About