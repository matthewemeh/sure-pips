import React from 'react';
import './Signal.css';

const Signal = props => {
  const signalInfo = props.signalInfo;
  const action = signalInfo && signalInfo.action.toUpperCase();

  return (
    signalInfo && (
      <section className='signal'>
        <p className='signal__head'>{`Signal for ${signalInfo.date}`}</p>

        <div className='signal__box'>
          <div
            className='signal__pair'
            style={{ borderColor: action === 'BUY' ? '#34c240' : '#d64242' }}
          >{`${signalInfo.pair}`}</div>
          <div
            className='signal__action'
            style={{ backgroundColor: action === 'BUY' ? '#34c240' : '#d64242' }}
          >
            {action}
          </div>
        </div>

        <a href='#socials'>Join our WhatsApp group chat for more signals</a>
      </section>
    )
  );
};

export default Signal;
