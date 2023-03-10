import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import s from '../styles/Reviews.module.css'
import {Loader} from "@/public/components/loader/loader";
import {GetServerSideProps, InferGetServerSidePropsType} from 'next'

export type ReviewsPropsType = {
    data: Array<DataPhotoType>
}

export type DataPhotoType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

const Reviews: React.FC<ReviewsPropsType> = ({data}) => {
// вариант из документации
// const Reviews = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    // const [photos, setPhotos] = useState<Array<PhotoType>>([])
    // const [error, setError] = useState<string>('')

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
    //         .then(response => response.json())
    //         .then(json => setPhotos(json))
    //         .catch(error => {
    //             console.log(error)
    //             setError(error)
    //         })
    // }, [])

    if (!data) {
        return <Loader/>
    } else {
        return (
            <>
                <Head>
                    <title>Comments to bikes | Reviews </title>
                    <meta name='title' content='Comments to bikes'/>
                </Head>
                <div className='commonFlex'>
                    <h1 className='blockTitle'>Our riders</h1>
                    <div className='mappedBox'>
                        {
                            data.map(photo => {
                                return (
                                    <div className={s.responseItem} key={photo.id}>
                                        <div className={s.responseItem_title}>{photo.title}</div>
                                        <div className={s.responseItem_image}>
                                            <img src={photo.thumbnailUrl} alt='userPhoto'/>
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

export default Reviews

// если не нужны динамические адреса, то можно пользоваться getStaticProps
export const getServerSideProps: GetServerSideProps<{ data: Array<DataPhotoType> }> = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=6')
    const data: Array<DataPhotoType> = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {data}
    }
}
