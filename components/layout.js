import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from '@/components/header'
export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-mobile md:min-h-desktop flex justify-center m-auto">
        <Header />
        <main className="max-w-screen-xl text-theme-text bg-theme-bg w-full mt-24 md:mt-36 md:pb-10">{children}</main>
      </div>
      <Footer />
    </>
  )
}
