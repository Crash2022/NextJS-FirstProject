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
                <h1>About</h1>
            </div>
        </>
    )
}

export default About