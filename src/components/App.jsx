import { Component } from "react";
import "../sytles/App.css";
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [0, 0, 0],
      hasFeedback: false
    };
    this.options = ["Good 👍", "Neutral 😐", "Bad 👎"];
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  getTotal() {
    return this.state.counts.reduce((acc, curr) => acc + curr);
  }

  getPositivePercentage() {
    const total = this.getTotal();
    return ((this.state.counts[0] * 100) / total).toFixed(1);
  }

  handleIncrement(index) {
    this.setState((prevState) => {
      const newCounts = [...prevState.counts];
      newCounts[index] += 1;
      return { counts: newCounts, hasFeedback: true };
    });
  }

  render() {
    const { counts, hasFeedback } = this.state;
    return (
      <>
        <h1>Expresso Café ☕️ </h1>
        <div className="card">
          <Section title="Please Leave Feedback">
            <FeedbackOptions
              options={this.options}
              onLeaveFeedback={this.handleIncrement}
            />
          </Section>
          {hasFeedback ? (
            <Section title="Statistics">
              <Statistics
                good={counts[0]}
                neutral={counts[1]}
                bad={counts[2]}
                total={this.getTotal()}
                positivePercentage={this.getPositivePercentage()}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </>
    );
  }
}

export default App;
