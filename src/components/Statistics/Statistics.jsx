import React from 'react';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  totalResult,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div className={css.feedbackList}>
      <h1 className={css.Statistics}>Statistics</h1>
      {totalResult > 0 ? (
        <ul className={css.feedbackList}>
          <li className={css.feedbackListItem}>Good: {good}</li>
          <li className={css.feedbackListItem}>Neutral: {neutral}</li>
          <li className={css.feedbackListItem}>Bad: {bad}</li>
          <li className={css.feedbackListItem}>Total: {totalResult}</li>
          <li className={css.feedbackListItem}>
            Positive feedback: {countPositiveFeedbackPercentage} %
          </li>
        </ul>
      ) : (
        <h2 className={css.feedbackInfo}>There is no feedback</h2>
      )}
    </div>
  );
}


