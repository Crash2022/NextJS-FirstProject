import React from 'react'
import {ReactNode} from 'react';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';

type LayoutPropsType = {
    children: ReactNode
}

export const Layout: React.FC<LayoutPropsType> = ({children}) => {

    return (
        <div className='content'>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}