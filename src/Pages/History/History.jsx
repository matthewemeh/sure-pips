import React from 'react';
import './History.css';
import Result1 from '../../assets/Result1.webp';
import Result2 from '../../assets/Result2.webp';

const History = () => {
  const bestResults = [
    { id: 1, image: Result1, date: '2022-03-18' },
    { id: 2, image: Result2, date: '2022-03-18' },
  ];
  return (
    <section className='history'>
      <article className='history__header'>
        <h2>Where we are today?</h2>

        <p>
          Sure Pips is currently expanding its reach to traders who are new to the Foreign Exchange
          Market. Already established Forex Traders are also free to share from our wealth of
          experience.
        </p>
      </article>

      <div className='history__div'>
        <h2>Our Best Results</h2>

        <article className='history__body'>
          <div className='history__results'>
            {bestResults.map(result => (
              <div key={result.id}>
                <img
                  src={result.image}
                  alt={`meta trading(mt4) forex trading result ${result.id}`}
                />
                <p>{`Results from ${result.date}`}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default History;
