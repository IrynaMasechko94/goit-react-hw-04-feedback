import React from 'react';
import css from './FeedbackOptoins.module.css';

export default function FeedbackOptions({ addGood, addNeutral, addBad }) {
  return (
    <div className={css.buttonContainer}>
      <button type="button" onClick={addGood} className={css.feedbackBtn}>
        Good
      </button>
      <button type="button" onClick={addNeutral} className={css.feedbackBtn}>
        Neutral
      </button>
      <button type="button" onClick={addBad} className={css.feedbackBtn}>
        Bad
      </button>
    </div>
  );
}
