import React from 'react'
import Head from 'next/head'
import s from '@/styles/Home.module.css'

type HomePropsType = {
    src: string
    width: number
    height: number
}

export default function Home ({src, width, height}: HomePropsType) {
    return (
        <>
            <Head>
                <title>Bikes form all the world | Home </title>
                <meta name='title' content='Bikes form all the world'/>
            </Head>
            <main className={s.main}>
                <div>
                    <h1 className='blockTitle'>Progress Anywhere Anytime</h1>
                </div>
                <div className={s.mainImage}>
                    <img src='/images/main-01.jpg' alt='home-image'/>
                    {/*<Image src='/images/main-01.jpg' alt='home-image' width={800} height={500}/>*/}
                </div>
            </main>
        </>
    )
}
