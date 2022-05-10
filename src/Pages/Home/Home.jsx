import React from 'react';
import './Home.css';
import Signal from '../../components/Signal/Signal';
import Result1 from '../../assets/Result1.webp';
import Result2 from '../../assets/Result2.webp';
import Result3 from '../../assets/Result3.webp';
import Result4 from '../../assets/Result4.webp';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = props => {
  const results = [
    { id: 1, image: Result1 },
    { id: 2, image: Result2 },
    { id: 3, image: Result3 },
    { id: 4, image: Result4 },
  ];

  return (
    <section className='header'>
      <div className='header__image'>
        <h1>SURE PIPS</h1>

        <h5>The most reliable source for currency signals...</h5>
      </div>

      <div className='header__mission'>
        <h2>- Our Mission -</h2>

        <p>
          At Sure Pips, we offer a perfect guide into the Foreign Exchange market by providing
          expertly sourced trading signals (pips) and a variety of tools to assist traders and guide
          our customers away from false insights and wrong sources. Our premium social media forums
          are also available to ensure adequate assistance for all our customers . At Sure Pips, we
          mean business.
        </p>
      </div>

      <Signal signalInfo={props.signalInfo} />

      <h3>Let our results do the talking...</h3>

      <Swiper
        className='header__container'
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {results.map(result => (
          <SwiperSlide key={result.id} className='header__results'>
            <div className='header__result'>
              <img src={result.image} alt={`meta trading(mt4) trading image_${result.id}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Home;
