function calculateAbsoluteWidth(score, widthLimit) {
  const width = (score * widthLimit) / 50;
  return Math.round(width);
}

export default calculateAbsoluteWidth;
