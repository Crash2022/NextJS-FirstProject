import s from '@/styles/Home.module.css'

export default function Home() {
    return (
        <>
            <main className={s.main}>
                <div>
                    <h1>Progress Anywhere Anytime</h1>
                </div>
                <div className={s.mainImage}>
                    <img src="/images/main-01.jpg" alt="home-image"/>
                </div>
            </main>
        </>
    )
}
