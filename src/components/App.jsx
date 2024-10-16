import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(prevState => prevState + 1);
  };

  const addNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const addBad = () => {
    setBad(prevState => prevState + 1);
  };

  const totalResult = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.floor(
    totalResult > 0 ? (good / totalResult) * 100 : 0
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          addGood={addGood}
          addNeutral={addNeutral}
          addBad={addBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalResult={totalResult}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}
