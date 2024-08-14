export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
