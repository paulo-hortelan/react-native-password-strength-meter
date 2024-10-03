function calculateLevel(score, levels) {
  const normalizedScore = score / 50;
  const normalizedIndex = Math.floor((levels.length - 1) * normalizedScore);
  return levels[normalizedIndex];
}

export default calculateLevel;
