import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize());

        return () => {
            window.removeEventListener("resize", handleResize());
        };
    }, []);


    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
          <div>
          <h2>𝖔𝖒𝖊𝖗𝖇𝖎𝖗𝖌𝖚𝖑</h2>
          </div>
          <a
            className={`nav_hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
          >
            <span className="nav_hamburger_line"></span>
            <span className="nav_hamburger_line"></span>
            <span className="nav_hamburger_line"></span>
          </a>
          <div className={`navbar-items ${navActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="navbar-content"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="aboutMe"
                  className="navbar-content"
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="myPortfolio"
                  className="navbar-content"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <Link
            onClick={closeMenu}
            activeClass="navbar-active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="contact"
            className="btn btn-outline-primary"
          >
            Contact Me
          </Link>
        </nav>
      );
}

export default Navbar