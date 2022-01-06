import NavLink from './nav-link'
import Container from './container'
import logo from './container'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faAddressCard,
    faLaptopCode,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const NavStyle = styled.nav` 
  display: flex;  
  justify-content: space-around; 

  a {
    color: var(--header-text);
    position: relative; 
    text-align: center; 
    transition: all 350ms ease-in-out;
    padding: 5px;

    & svg {
      transition: all 300ms ease-in-out;
    } 

    & svg path {
      fill: var(--header-text);
      transition: all 350ms ease-in-out;
    } 

    & span:before {
      content: "";
      position: absolute;
      height: 2px;
      bottom: -10px;
      left: 50%;
      width:0px; 
      background: var(--header-text-hover);
      transition: all 300ms ease-in-out;
    } 

    &:hover svg path {
      fill: var(--header-text-hover);
    }

    &:hover {
      color: var(--header-text-hover);

      & span:before {
        left: calc(50% - 25px);
        width:50px; 
      } 
    }

    &[aria-current]{
      & svg path {
        var(--background-hover);
      }
      & svg {
        transform:scale(1.2); 
      } 
      color: var(--header-text);
      
      & span:before {
        content: "";
        position: absolute;
        height: 2px;
        bottom: -10px;
        left: calc(50% - 5px);
        width:10px; 
        background: var(--header-text); 
      }  
    }
  }
`

export default function MainNav() {
    return (
        <NavStyle
            className="w-full border-t-2 bg-theme-header-bg
        md:border-t-0 mx-auto py-3 px-0 
        flex flex-nowrap justify-around items-center fixed 
        bottom-0 left-0 right-0 
        md:relative 
        "
        >
            <NavLink href={`/`} exact>
                <a aria-label="Home">
                    <FontAwesomeIcon
                        icon={faHome}
                        width="30px"
                        className="block md:hidden"
                    />
                    <span className="hidden md:block">Accueil</span>
                </a>
            </NavLink>
            <NavLink href={`/profile`} exact>
                <a aria-label="Parcours">
                    <FontAwesomeIcon
                        icon={faAddressCard}
                        width="30px"
                        className="block md:hidden"
                    />
                    <span className="hidden md:block">Parcours</span>
                </a>
            </NavLink>
            <NavLink href={`/projects`} exact>
                <a aria-label="Projets">
                    <FontAwesomeIcon
                        icon={faLaptopCode}
                        width="30px"
                        className="block md:hidden"
                    />
                    <span className="hidden md:block">Projets</span>
                </a>
            </NavLink>
            <NavLink href={`/contact`} exact>
                <a aria-label="Contact">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        width="30px"
                        className="block md:hidden"
                    />
                    <span className="hidden md:block">Contact</span>
                </a>
            </NavLink>
        </NavStyle>
    )
}
