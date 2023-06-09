import { Component } from 'react'; 
import PropTypes from "prop-types";

const stats = [
  { label: "Good", key: "good" },
  { label: "Neutral", key: "neutral" },
  { label: "Bad", key: "bad" },
  { label: "Total", key: "total" },
  { label: "Positive Feedback", key: "positivePercentage" },
];

class Statistics extends Component {
  calculateTotal = () => {
    const { good, neutral, bad } = this.props;
    return good + neutral + bad;
  }
  
  calculatePositivePercentage = () => {
    const total = this.calculateTotal();
    const { good } = this.props;
    return ((good / total) * 100).toFixed(1) + "%";
  }

  render() {
    return (
      <ul className="statsbox">
        {stats.map(stat => (
          <li key={stat.key}>
            <span>{stat.label}</span>
            <span>
              {stat.key === "positivePercentage"
                ? this.calculatePositivePercentage()
                : this.props[stat.key]}
            </span>
          </li>
        ))}  
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,  
};

export default Statistics;