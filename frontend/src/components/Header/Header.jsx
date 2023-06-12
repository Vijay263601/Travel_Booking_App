import React, {useRef, useEffect} from 'react'
import { Container, Row } from "reactstrap"
import { NavLink} from "react-router-dom"

import logo from '../../assets/images/logo.png';
import "./header.css";

const nav__links = [
  {
    Path: '/home',
    display: 'Home'
  },
  {
    Path: '/about',
    display: 'About'
  },
  {
    Path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderfunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderfunc()

    return window.removeEventListener('scroll', stickyHeaderfunc)
  })

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~ logo ~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className="logo">
              <img src={logo} alt="LOGO" />
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~ logo end~~~~~~~~~~~~~~~~~~~~~~~ */}

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~ menu start~~~~~~~~~~~~~~~~~~~~~~~ */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink to={item.Path} className={navClass=> navClass.isActive ? "active__link" : ""
                    }
                    >
                      {item.display}
                    </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~ menu end~~~~~~~~~~~~~~~~~~~~~~~ */}


            <div className="nav__right d-flex align-items-center gap-4" >

              <div className="nav__btns d-flex align-items-center gap-4">
                <button className='btn secondary__btn'>
                 <a href="/login">Login</a>
                </button>
                <button className='btn primary__btn'>
                  <a href="/register">Register</a>
                </button>
              </div>


              <span className="mobile_menu">
                <i class="ri-menu-fill"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header