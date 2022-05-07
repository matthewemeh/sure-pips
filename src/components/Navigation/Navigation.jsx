import React from 'react';
import './Navigation.css';
import webIcon from '../../assets/website_icon.webp';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const currentUrl = window.location.pathname;
  const [activePage, setActivePage] = React.useState(currentUrl);

  return (
    <div className='navigation__head'>
      <div className='navigation__intro'>
        <div className='navigation__icon'>
          <img src={webIcon} alt='web-icon' />
        </div>

        <h2>Sure Pips</h2>
      </div>

      <nav className='navigation__links'>
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
