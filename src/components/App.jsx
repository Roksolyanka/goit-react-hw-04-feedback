import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [stateFeedback, setStateFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedback = option => {
    setStateFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const feedbackTotal = () => {
    const { good, neutral, bad } = stateFeedback;
    return good + neutral + bad;
  };

  const feedbackPositivePercentage = () => {
    const { good } = stateFeedback;
    const total = feedbackTotal();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const { good, neutral, bad } = stateFeedback;
  const totalFeedback = feedbackTotal();
  const positivePercentage = feedbackPositivePercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={feedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
