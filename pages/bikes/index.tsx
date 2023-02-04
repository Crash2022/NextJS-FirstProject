import Head from 'next/head'
import React from 'react'
import s from '../../styles/Bikes.module.css'
import {Loader} from "@/public/components/loader/loader";
import {GetStaticProps} from "next";

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

    // console.log(bikes)

    if (!bikes) {
        return <Loader/>
    } else {
        return (
            <>
                <Head>
                    <title>Our products | Bikes </title>
                    <meta name='title' content='Our products'/>
                </Head>
                <div className='commonFlex'>
                    <h1 className='blockTitle'>Our Products</h1>
                    <div className='mappedBox'>
                        {
                            bikes.map(bike => {
                                return (
                                    <div className={s.responseItem} key={bike.id}>
                                        <div className={s.responseItem_infoBlock}>
                                            <div className={s.responseItem_title}>{bike.name}</div>
                                            <div className={s.responseItem_price}>${bike.price}</div>
                                        </div>
                                        <div className={s.responseItem_image}>
                                            <img src={bike.image} alt='bike-photo'/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Bikes

// SSR
export const getStaticProps: GetStaticProps<{bikes: Array<BikeType>}> = async () => {
    const response = await fetch('http://localhost:5000/items')
    const data: Array<BikeType> = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {bikes: data}
    }
}