import React from 'react';
import './Navigation.css';
import webIcon from '../../assets/website_icon.webp';
import { Link } from 'react-router-dom';
import { CgDetailsMore } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

const Navigation = () => {
  const currentUrl = window.location.pathname;
  const [display, setDisplay] = React.useState(document.body.clientWidth >= 768 ? 'flex' : 'none');
  const [activePage, setActivePage] = React.useState(currentUrl);

  window.onload = () => {
    const nav = document.querySelector('.navigation__links');
    setDisplay(window.getComputedStyle(nav).getPropertyValue('display'));
  };

  const onResize = () => {
    setDisplay(document.body.clientWidth >= 768 ? 'flex' : 'none');
  };

  window.addEventListener('resize', onResize);

  React.useEffect(() => {
    if (display === 'grid') setDisplay('none');
  }, [activePage]);

  return (
    <div className='navigation__head'>
      <CgDetailsMore className='navigation__more' onClick={() => setDisplay('grid')} />

      <div className='navigation__intro'>
        <div className='navigation__icon'>
          <img src={webIcon} alt='web-icon' />
        </div>

        <h2>Sure Pips</h2>
      </div>

      <nav className='navigation__links' style={{ display: display }}>
        <AiOutlineClose className='navigation__close' onClick={() => setDisplay('none')} />

        <Link
          to='/'
          className={activePage === '/' ? 'active' : 'inactive'}
          onClick={() => setActivePage('/')}
        >
          Home
        </Link>

        <Link
          to='/history'
          className={activePage === '/history' ? 'active' : 'inactive'}
          onClick={() => setActivePage('/history')}
        >
          History
        </Link>

        <Link
          to='/about'
          className={activePage === '/about' ? 'active' : 'inactive'}
          onClick={() => setActivePage('/about')}
        >
          About
        </Link>

        <Link
          to='/faq'
          className={activePage === '/faq' ? 'active' : 'inactive'}
          onClick={() => setActivePage('/faq')}
        >
          FAQ
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
