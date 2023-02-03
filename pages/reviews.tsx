import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import s from '../styles/Reviews.module.css'

type PostType = {
    userId: number
    id: number
    title: string
    body: string
}

type PhotoType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

const Reviews = () => {

    const [photos, setPhotos] = useState<Array<PhotoType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
            .then(response => response.json())
            .then(json => setPhotos(json))
    }, [])

    return (
        <>
            <Head>
                <title>Comments to bikes | Reviews </title>
                <meta name='title' content='Comments to bikes'/>
            </Head>
            <div className='commonFlex'>
                <h1 className={s.title}>Reviews</h1>
                <div className={s.reviewBox}>
                    {
                        photos.map(photo => {
                            return (
                                <div className={s.responseItem}>
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

export default Reviews