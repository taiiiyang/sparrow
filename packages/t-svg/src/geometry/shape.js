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

export const link = (renderer, coordinate, { x1, y1, x2, y2, ...style }) => {
  const [p0, p1] = [
    [x1, y1],
    [x2, y2],
  ].map(coordinate);

  return renderer.line({
    x1: p0[0],
    y1: p0[1],
    x2: p1[0],
    y2: p1[1],
    ...style,
  });
};
