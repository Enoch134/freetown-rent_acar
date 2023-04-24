import React, { useRef } from "react";
import { Container, Col, Button } from "reactstrap";
import {  Link,NavLink } from "react-router-dom";
import "../../styles/header.css";
import logos from "../../assets/all-images/logos.jpeg"

const navLinks = [
  {
    path: "/home",
    display: "Home",

  },
 
  {
    path: "#",
    display: "Our Cars",
    subMenu:[
      {
        path: "/freetown",
        display: "Freetown",
      },
      {
        path: "/province",
        display: "Province",
      },
    ]
  },
  {
    path: "/about",
    display: "About",
  },

];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ========== main navigation =========== */}
     

      <div className="main__navbar ">
        <Container >
          <div className="navigation__wrapper ">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center justify-content-center">

              <Col lg="3" md="3" sm="4" className="text-end d-flex align-items-start justify-content-start">
              <div className="header__location">
                <div className="header__location-content">
                  <img src={logos}  alt="" />
                </div>
              </div>
               </Col>
             
                 {/* {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                  
                ))}   */}

{navLinks.map((item, index) => (
  <div key={index} className="nav__item-container">
    <NavLink
      to={item.path}
      className={(navClass) =>
        navClass.isActive ? "nav__active nav__item" : "nav__item"
      }
    >
      {item.display}
    </NavLink>
    {item.subMenu && (
      <ul className="submenu text-decoration-none">
        {item.subMenu.map((submenuItem, submenuIndex) => (
          <li key={submenuIndex} >
            <NavLink to={submenuItem.path} className="text-decoration-none text-black">{submenuItem.display}</NavLink>
          </li>
        ))}
      </ul>
    )}
  </div>
))}

     

            <Col
              lg="2"
              md="3"
              sm="0"
              className="text-end d-flex align-items-center justify-content-center"
            >
              <Button className="header__btn btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Book
                </Link>
              </Button>
                  </Col>
              </div>
            </div>

            <div className="nav__right">
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
