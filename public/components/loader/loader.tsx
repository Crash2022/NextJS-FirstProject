import React from 'react';
import s from '../../../styles/Loader.module.css'

export const Loader = () => {

    return (
            <div className={s.isLoading}>
                <img src='/icons/loader.gif' alt='isLoading'/>
            </div>
    );
}

