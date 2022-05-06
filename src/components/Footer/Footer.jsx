import React from 'react';
import './Footer.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';

const Footer = () => {
  const socials = [
    {
      icon: <AiOutlineMail className='footer__icon' />,
      href: 'mailto:surepips22@gmail.com',
    },
    {
      icon: <BsWhatsapp className='footer__icon' />,
      href: 'https://api.whatsapp.com/send?phone=+2348034064288',
    },
    {
      icon: <GrFacebookOption className='footer__icon' />,
      href: 'https://facebook.com',
    },
  ];

  return (
    <footer>
      <h2>Contact Us</h2>
      <div className='footer__socials'>
        {socials.map(link => (
          <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer'>
            {link.icon}
          </a>
        ))}
      </div>
      <div className='footer__copyright'>
        <small>&copy; SURE PIPS. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
