import Container from './container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'

export default function Footer() {
    const [footerPosition, setFooterPosition] = useState('fixed')

    useEffect(() => {
        setTimeout(() => {
            setFooterPosition('relative')
        }, 2500)
    }, [])

    return (
        <footer
            className={`animate-footer-mobile md:animate-footer 
          w-full h-40 flex bg-theme-footer-bg 
          text-theme-footer-text border-t md:h-32 bottom-0
          border-gray p-2 pb-5 md:pb-0 md:p-0
          ${footerPosition == 'fixed' ? 'fixed' : 'relative'}
          `}
        >
            <div
                className="w-full h-20 pb-8 pt-1 md:h-full md:p-0 
        md:py-6 px-2 md:px-20 
        flex flex-row items-center flex-wrap justify-around 
        lg:flex-row 
        text-xs xs:text-sm sm:text-lg"
            >
                <div
                    className="flex mx-2 flex-col justify-center items-start text-2l 
          sm:text-base font-medium align-center tracking-tighter 
          leading-normal text-center "
                >
                    <span className="block font-bold text-xl sm:text-2xl">
                        FHP DEV
                    </span>
                    <span className="block font-semibold">Fabien Hupel</span>
                    <span className="block">Bretagne, Rennes</span>
                </div>
                <div>
                    <div
                        className="flex flex-row justify-center 
              items-center sm:text-base font-medium 
              align-center tracking-tighter leading-normal 
              text-center "
                    >
                        <FontAwesomeIcon
                            icon={faAt}
                            color="var(--footer-text)"
                            width="30px"
                            className="m-1 w-6 sm:w-7 sm:w-7"
                        />
                        <span className="block my-2 md:mx-2">
                            fabien.hupel@gmail.com
                        </span>
                    </div>
                    <div
                        className="flex flex-row items-center 
               text-2l sm:text-base font-medium 
            align-center tracking-tighter leading-normal 
            text-center"
                    >
                        <FontAwesomeIcon
                            icon={faPhone}
                            color="var(--footer-text)"
                            transform={{ rotate: 90 }}
                            className="m-1 w-6 sm:w-7 sm:w-7"
                        />
                        <span className="block my-2 md:mx-2">
                            (+33) 6 84 09 33 67{' '}
                        </span>
                    </div>
                </div>

                <div
                    className="h-full flex flex-col sm:flex-row 
          items-center justify-center"
                >
                    <a
                        href="https://www.linkedin.com/in/fabien-hupel/"
                        target="_blank"
                        className="m-1 sm:m-4 bg-theme-footer-text 
              rounded-lg color-theme-footer-bg   
              hover:bg-theme-footer-text-hover 
              border border-theme-text text-white font-bold p-1 
              duration-200 transition-colors"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            color="var(--footer-bg)"
                            className="w-5 h-5 sm:w-8 sm:h-8"
                        />
                    </a>
                    <a
                        href={`https://github.com/fabhup`}
                        target="_blank"
                        className="m-1 sm:m-4 bg-theme-footer-text 
              rounded-lg color-theme-footer-bg 
              hover:bg-theme-footer-text-hover 
              border-theme-text text-white font-bold p-1 
              duration-200 transition-colors"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="var(--footer-bg)"
                            className="w-5 h-5 sm:w-8 sm:h-8"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}
