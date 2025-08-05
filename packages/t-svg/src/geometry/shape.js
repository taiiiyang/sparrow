export const circle = (renderer, coordinate, { cx, cy, ...styles }) => {
  const [x, y] = coordinate([cx, cy]);
  return renderer.circle({ cx: x, cy: y, ...styles });
};

export const text = (renderer, coordinate, { x, y, rotate, text, ...styles }) => {
  const [px, py] = coordinate([x, y]);
  renderer.save();
  renderer.translate(px, py);
  renderer.rotate(rotate);

  const textEle = renderer.text({ x: 0, y: 0, text, ...styles });
  renderer.restore();
  return textEle;
};
