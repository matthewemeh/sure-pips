import React from 'react';
import './Navigation.css';
import { MdHistoryEdu } from 'react-icons/md';
import { RiQuestionLine, RiServiceLine } from 'react-icons/ri';
import { TiHomeOutline } from 'react-icons/ti';
import { BiUserPin } from 'react-icons/bi';

const Navigation = () => {
  const [activePage, setActivePage] = React.useState('#');

  return (
    <nav>
      <div className='navigation__icons'>
        <a
          href='#'
          className={activePage === '#' ? 'active' : 'inactive'}
          onClick={() => setActivePage('#')}
        >
          <TiHomeOutline className='navigation__icon' />
        </a>

        <a
          href='#history'
          className={activePage === '#history' ? 'active' : 'inactive'}
          onClick={() => setActivePage('#history')}
        >
          <MdHistoryEdu className='navigation__icon' />
        </a>

        <a
          href='#about'
          className={activePage === '#about' ? 'active' : 'inactive'}
          onClick={() => setActivePage('#about')}
        >
          <BiUserPin className='navigation__icon' />
        </a>

        <a
          href='#faq'
          className={activePage === '#faq' ? 'active' : 'inactive'}
          onClick={() => setActivePage('#faq')}
        >
          <RiQuestionLine className='navigation__icon' />
        </a>

        <a
          href='#contact'
          className={activePage === '#contact' ? 'active' : 'inactive'}
          onClick={() => setActivePage('#contact')}
        >
          <RiServiceLine className='navigation__icon' />
        </a>
      </div>

      <div
        className='navigation__indicator navigation__indicator1'
        id={activePage === '#' ? 'active' : 'inactive'}
      />

      <div
        className='navigation__indicator navigation__indicator2'
        id={activePage === '#history' ? 'active' : 'inactive'}
      />

      <div
        className='navigation__indicator navigation__indicator3'
        id={activePage === '#about' ? 'active' : 'inactive'}
      />

      <div
        className='navigation__indicator navigation__indicator4'
        id={activePage === '#faq' ? 'active' : 'inactive'}
      />

      <div
        className='navigation__indicator navigation__indicator5'
        id={activePage === '#contact' ? 'active' : 'inactive'}
      />
    </nav>
  );
};

export default Navigation;
