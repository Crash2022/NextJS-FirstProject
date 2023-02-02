import s from '@/components/Header.module.css'

const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img src="/bicycle-03.svg" alt="header_logo"/>
            </div>
            <nav className={s.navigation}>
                <div>
                    <a href="">Home</a>
                </div>
                <div>
                    <a href="">Catalog</a>
                </div>
                <div>
                    <a href="">About Us</a>
                </div>
            </nav>
        </header>
    )
}

export default Header