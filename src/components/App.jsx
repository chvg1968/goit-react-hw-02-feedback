import { useState } from "react";
import "../sytles/App.css";
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";

function App() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasFeedback, setHasFeedback] = useState(false);
  const options = ["Good 👍", "Neutral 😐", "Bad 👎"];

  const total = counts.reduce((acc, curr) => acc + curr);
  const positivePercent = ((counts[0] * 100) / total).toFixed(1);

  const handleIncrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
    setHasFeedback(true);
  };

  return (
    <>
      <h1>Expresso Café ☕️ </h1>
      <div className="card">
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        {hasFeedback ? (
          <Section title="Statistics">
            <Statistics
              good={counts[0]}
              neutral={counts[1]}
              bad={counts[2]}
              total={total}
              positivePercentage={positivePercent}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </>
  );
}

export default App;
