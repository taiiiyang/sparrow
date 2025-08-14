import { identity } from "../utils";

// 该函数会返回一个绘制坐标轴的函数，它根据当前的坐标系选择不同的刻度、标签和格子绘制函数，从而绘制整个坐标轴。
export function createAxis(components, labelOf) {
  return (
    renderer,
    scale,
    coordinate,
    {
      tick = true,
      grid = false,
      domain,
      label,
      formatter = identity,
      tickCount = 5,
      tickLength = 5,
      fontSize,
    },
  ) => {
    // 如果是 band 比例尺的话，需要绘制在柱子的中间，所以需要往右移
    const offset = scale.bandWidth ? scale.bandWidth() / 2 : 0;
    const values = scale.ticks ? scale.ticks(tickCount) : domain;

    const center = coordinate.center();
    const type = `${+coordinate.isPolar()}${+coordinate.isTranspose()}`;

    const options = { tickLength, fontSize, center };

    const { grid: Grid, label: Label, ticks: Ticks, start, end } = components[type];

    const ticks = values.map((d) => {
      const [x, y] = coordinate(start(d, scale, offset));
      const text = formatter(text);
      return { x, y, text };
    });

    if (grid && Grid) Grid(renderer, ticks, end(coordinate)); // 格子不需要 字体的 样式
    if (tick && Ticks) Ticks(renderer, ticks, options);
    if (label && Label) Label(renderer, label, labelOf(ticks), options);
  };
}
