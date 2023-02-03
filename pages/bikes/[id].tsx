import {BikesPropsType, BikeType} from '@/pages/bikes/index';
import s from '../../styles/Details.module.css'
import React from 'react';

export const getStaticPaths = async() => {
    const response = await fetch('http://localhost:5000/items')
    const data: Array<BikeType> = await response.json()

    const paths = data.map(bike => {
        return {
            params: {id: bike.id}
        }
    })

    return {
        paths: paths,
        // для того, чтобы в случае несуществующей страницы был редирект на 404
        fallback: false
    }
}

export const getStaticProps = async(context: {params: { id: string }}) => {
    const id = context.params.id

    const response = await fetch(`http://localhost:5000/items/${id}`)
    const data: Array<BikeType> = await response.json()

    return {
        props: {bikes: data}
    }
}


const Details: React.FC<BikesPropsType> = ({bikes}) => {

    console.log('details',bikes)

    return (
        <div className='commonFlex'>
            <div>
                <h1>Specialized - american quality!</h1>
            </div>
            {/*<div className={s.detailsItem}>*/}
            {/*    <div className={s.detailsItem_image}>*/}
            {/*        <img src={bikes.image} alt='bike-photo'/>*/}
            {/*    </div>*/}
            {/*    <div className={s.detailsItem_infoBlock}>*/}
            {/*        <div className={s.detailsItem_title}>{bikes.name}</div>*/}
            {/*        <div className={s.detailsItem_price}>${bikes.price}</div>*/}
            {/*        <div className={s.detailsItem_description}>{bikes.description}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Details