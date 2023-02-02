import s from 'styles/Header.module.css'
import Link from 'next/link'

export const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img src="/bicycle-03.svg" alt="header_logo"/>
            </div>
            <nav className={s.navigation}>
                <div>
                    <Link href='/'>
                        Home
                    </Link>
                </div>
                <div>
                    <Link href='/bikes'>
                        Bikes
                    </Link>
                </div>
                <div>
                    <Link href='/about'>
                        About Us
                    </Link>
                </div>
            </nav>
        </header>
    )
}