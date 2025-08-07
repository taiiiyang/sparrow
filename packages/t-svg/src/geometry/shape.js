import { line as pathLine, area as pathArea } from "./d";
import { contour } from "./primitive";

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

export const line = (renderer, coordinate, { X, Y, I: I0, ...style }) => {
  // 极坐标系下需要闭合，所以要把最后一个节点加上去
  const I = coordinate.isPolar() ? [...I0, I0[0]] : I0;
  const points = I.map((i) => coordinate([X[i], Y[i]]));
  const path = pathLine(points);
  return renderer.path({ d: path, ...style });
};

export const area = (renderer, coordinate, { X1, Y1, X2, Y2, I: I0, ...style }) => {
  const I = coordinate.isPolar() ? [...I0, I0[0]] : I0;
  // 需要围成一个圈
  const points = [...I.map((i) => [X1[i], Y1[i]]), ...I.map((i) => [X2[i], Y2[i]]).reverse()].map(
    coordinate,
  );
  if (coordinate.isPolar()) {
    return contour(renderer, { points, ...style });
  }

  return renderer.path({ d: pathArea(points), ...style });
};
