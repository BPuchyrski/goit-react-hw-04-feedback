import { useState } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';
import css from './App.module.css';



export const App = () => {
const [good, setGood] = useState(0);
const [bad, setBad] = useState(0)
const [neutral, setNeutral] = useState(0)


const countTotalFeedback = () => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  let total = good + neutral + bad;
  let percentage = (good / total) * 100;
  return Math.round(percentage);
};

const onLeaveFeedback = e => {
  if (e.target.textContent === 'Good') {
      return setGood(good + 1)
  }

  if (e.target.textContent === 'Neutral') {
   return setNeutral((prev) => prev + 1)
  }

  if (e.target.textContent === 'Bad') {
    return setBad(prev => prev + 1)
  }
};

return (
  <div className={css.main}>
        <div>
          <Section title="Kawiarnia Expresso">
            <FeedbackOptions
              onLeaveFeedback={onLeaveFeedback}
              options={['Good', 'Neutral', 'Bad']}
            ></FeedbackOptions>
            {good > 0 || neutral > 0 || bad > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              ></Statistics>
            ) : (
              <Notification message={'There is no feedback'}></Notification>
            )}
          </Section>
        </div>
      </div>
)
}



