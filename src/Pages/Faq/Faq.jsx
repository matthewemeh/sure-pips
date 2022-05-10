import React from 'react';
import './Faq.css';
import { FaQuestion } from 'react-icons/fa';

const Faq = () => {
  const questionsInfo = [
    {
      id: 1,
      question: 'How can Sure Pips assist me on my Trading Journey',
      href: 'question1',
      answer:
        'We understand the struggles that come with entering into the foreign exchange market and are here to offer you the right guidance by minimizing risk with professionally sourced signals in Forex to make placing trades more seamless and highly profitable.',
    },
    {
      id: 2,
      question: 'Does Sure Pips offer one-on-one counselling on Forex',
      href: 'question2',
      answer:
        'Yes, at Sure Pips we understand that there are several online miscreants circling the web with false insights to Foreign Exchange that often end up leaving traders red-faced. With our social media handles and online forums, we want to bring traders closer to the right kind of information by offering a new insight to trading never before seen.',
    },
    {
      id: 3,
      question: 'How sure are the trading signals at Sure Pips',
      href: 'question3',
      answer:
        'With over  10 years of trading experience, our trading signals offer a 90-95% success rate - up amongst some of the best odds in the Foreign Exchange Market. ',
    },
  ];
  return (
    <section className='faq'>
      <h2>Frequently Asked Questions</h2>

      <div className='faq__answered-questions'>
        {questionsInfo.map(question => (
          <article key={question.id}>
            <h3>
              <span>
                <FaQuestion className='faq_icon-question' />
              </span>
              {question.question}
            </h3>

            <p className='answer' id={question.href}>
              {question.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Faq;
