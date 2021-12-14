import Link from 'next/link'
import MainNav from './main-nav'
import Logo from './logo'
import useColorTheme from "use-color-theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette  } from '@fortawesome/free-solid-svg-icons'

export default function Header() {  
  const colorTheme = useColorTheme('light-theme', {
    classNames: ['light-theme', 'dark-theme', 'funky']
  });

  return (
    <header className="w-full bg-theme-header-bg mx-0 py-2 
    md:pt-10 border-b-2 
    md:px-10 fixed z-50 flex flex-row 
    justify-between sm:justify-center md:justify-between 
    text-theme-header-text">
      <Logo 
        fill="var(--header-text)" 
        width="150px" 
        height="80px" 
        className="mx-10"
        />
      <MainNav/>
      <button onClick={colorTheme.toggle} className="absolute top-5 right-5 bg-theme-header-text rounded-full p-2">
        <FontAwesomeIcon icon={faPalette} color="var(--header-bg)" width="20px" className="block"/>
      </button>
    </header>
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/">
    //     <a className="hover:underline">Blog</a> 
    //   </Link>
    //   . 
    // </h2>
  )
}
