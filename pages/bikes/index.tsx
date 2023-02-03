import Head from 'next/head'
import React from 'react'
import s from '../../styles/Bikes.module.css'

export type BikesPropsType = {
    bikes: Array<BikeType>
}

export type BikeType = {
    id: string
    name: string
    description: string
    price: number
    image: string
}

const Bikes: React.FC<BikesPropsType> = ({bikes}) => {

    console.log(bikes)

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

// SSR
export const getStaticProps = async() => {
    const response = await fetch('http://localhost:5000/items')
    const data: Array<BikeType> = await response.json()
    // console.log(data)

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {bikes: data}
    }
}