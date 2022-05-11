import React from 'react';
import './Footer.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { MdOutlineGroupAdd } from 'react-icons/md';

const Footer = props => {
  const pages = '/history/about/faq';
  const socialLinks = props.socialInfo;
  const socials = socialLinks && [
    {
      icon: <AiOutlineMail className='footer__icon' />,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: <BsWhatsapp className='footer__icon' />,
      href: socialLinks.whatsapp,
    },
    {
      icon: <GrFacebookOption className='footer__icon' />,
      href: socialLinks.facebookPage,
    },
    {
      icon: <MdOutlineGroupAdd className='footer__icon' />,
      href: socialLinks.whatsappGroup,
    },
  ];

  return (
    socialLinks &&
    pages.includes(window.location.pathname) && (
      <footer>
        <h2>Contact Us</h2>
        <div className='footer__socials' id='socials'>
          {socials.map(link => (
            <a key={link.href} href={link.href} target='_blank' rel='noopener noreferrer nofollow'>
              {link.icon}
            </a>
          ))}
        </div>
        <div className='footer__copyright'>
          <small>&copy; SURE PIPS 2022. All Rights Reserved.</small>
        </div>
      </footer>
    )
  );
};

export default Footer;
