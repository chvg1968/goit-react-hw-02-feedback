import PropTypes from "prop-types";

const stats = [
  { label: "Good", key: "good" },
  { label: "Neutral", key: "neutral" },
  { label: "Bad", key: "bad" },
  { label: "Total", key: "total" },
  { label: "Positive Feedback", key: "positivePercentage" },
];

function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const positivePercentage = ((good / total) * 100).toFixed(1) + "%";

  return (
    <ul className="statsbox">
      {stats.map((stat) => (
        <li key={stat.key}>
          <span>{stat.label}</span>
          <span>
            {stat.key === "positivePercentage"
              ? positivePercentage
              : eval(stat.key)}
          </span>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
