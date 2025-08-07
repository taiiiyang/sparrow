import { line as pathLine, area as pathArea } from "./d";

// 绘制极坐标系 等高线
export function contour(renderer, { points, ...styles }) {
  const end = points.length;
  const mid = end / 2;
  // 绘出轮廓
  const contour = renderer.path({ d: pathArea(points), ...styles, stroke: "none" });
  // 外轮廓
  const outerStroke = renderer.path({ d: pathLine(points.slice(0, mid)), ...styles, fill: "none" });
  // 内轮廓
  const innerStroke = renderer.path({
    d: pathLine(points.slice(mid, end)),
    ...styles,
    fill: "none",
  });

  return [innerStroke, contour, outerStroke];
}
