import Link from 'next/link';

const NotFoundPage = () => {

    return (
        <div className="notFound">
            <div className="notFound_title">
                Ooops...! Error 404: Page Not Found
            </div>
            <div className="notFound_text">
                <span>Go to </span>
                <Link href='/'>
                    Home Page
                </Link>
            </div>
            <div>
                <img src="/images/error404.jpg" alt="page404"/>
            </div>
        </div>
    )
}

export default NotFoundPage