import Head from 'next/head'
import React from 'react'
import s from '../../styles/Bikes.module.css'

const Bikes = () => {

    return (
        <>
            <Head>
                <title>Our products | Bikes </title>
                <meta name='title' content='Our products'/>
            </Head>
            <div className='commonFlex'>
                <h1>Our Products</h1>
            </div>
        </>
    )
}

export default Bikes