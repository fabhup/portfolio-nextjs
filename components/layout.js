import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from '@/components/header'
export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <div className="min-h-mobile md:min-h-desktop flex justify-center m-auto bg-theme-bg-light">
                <Header />
                <main className="max-w-screen-xl text-theme-text bg-theme-bg-light w-full pt-24 md:pt-36 md:pb-10">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}
