import React, { useState, useEffect, useRef } from 'react';
import { scroller } from 'react-scroll';
import '../App.scss';

const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 1000,
    delay: 150,
    smooth: 'easeInOutQuint',
  });
};

const Navbar = () => {
  const [scr, setScr] = useState(true);
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos > window.innerHeight / 2 && currentScrollPos) {
          setScr(false);
        } else {
          setScr(true);
        }
      };
    }
  }, [scr]);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        transition: '1s ease',
        backgroundColor: navBackground ? '#212122' : 'transparent',
      }}
    >
      <div className='logo-container'>
        <img
          onClick={() => {
            scrollToElement('Navbar');
          }}
          src='../../DCLogo.png'
          alt='logo'
          className='logo'
          style={{
            visibility: scr ? 'hidden' : 'visible',
          }}
        />
      </div>

      <div className='menu-container'>
        <ul>
          <li>
            <a
              href='!#'
              onClick={(ev) => {
                ev.preventDefault();
                scrollToElement('About');
              }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              onClick={(ev) => {
                ev.preventDefault();
                scrollToElement('Projects');
              }}
              href='!#'
            >
              PROJECTS
            </a>{' '}
          </li>

          <li>
            <a
              onClick={(ev) => {
                ev.preventDefault();
                scrollToElement('Designs');
              }}
              href='!#'
            >
              DESIGNS
            </a>{' '}
          </li>

          <li>
            <a
              onClick={(ev) => {
                ev.preventDefault();
                scrollToElement('Contact');
              }}
              href='!#'
            >
              CONTACT
            </a>{' '}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
