import React from 'react';
import './About.css';
import pioneer from '../../assets/pioneer.webp';

const About = () => {
  return (
    <section className='about'>
      <div className='about__image'>
        <img src={pioneer} alt='image of author' />
      </div>

      <div className='about__div'>
        <p className='about__header'>
          About the Pioneer - <b>Mr. Emeh Matthew Emeh</b>
        </p>

        <p className='about__content'>
          A product of well balanced training on the nature of the Foreign Exchange Market. A former
          banker with over two decades of experience, as well as over a decade of hands-on
          experience in Forex trading. Mr. Matthew is often motivated by his desire to put an end to
          the deception that goes on in the Foreign Exchange Market caused by misfits who have
          continued to swindle and misdirect promising traders, channeling them away from their main
          course of business. Forex is basically about the exchange of currency and not necessarily
          about charts. Mr. Matthew is a firm enforcer of the opinion that charts are basically
          roadmaps, and that without an adequate knowledge of the strengths and weaknesses of the
          various currencies, charts could become an absolute waste of time. He launched the Sure
          Pips E-Commerce Platform with a view to showing potential traders the perfect directions
          to achieve success in the Foreign Exchange Market - this, he believes is the primary
          objective of his initiative.
        </p>
      </div>
    </section>
  );
};

export default About;
