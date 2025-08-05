import { useEffect } from "react";
import {
  createRenderer,
  createLinear,
  createCoordinate,
  transpose,
  cartesian,
  point,
} from "@TRender/t-svg";

export default function Point() {
  useEffect(() => {
    const width = 400;
    const height = 200;

    const renderer = createRenderer(width, height);

    // 希望绘制一个散点图来看下面数据的分布
    const data = [
      { height: 180, weight: 150 },
      { height: 163, weight: 94 },
      { height: 173, weight: 130 },
    ];

    // 将对应的值提取出来
    const H = data.map((d) => d.height);
    const W = data.map((d) => d.weight);
    const I = data.map((_, index) => index);
    const extent = (d) => [Math.min(...d), Math.max(...d)];

    // 将数据的 height 映射为点的 x 属性（这里注意 range 是 [0, 1]）
    const scaleX = createLinear({
      domain: extent(H),
      range: [0, 1],
    });

    // 将数据的 width 映射为点的 y 属性（这里注意 range 是 [0, 1]）
    const scaleY = createLinear({
      domain: extent(W),
      range: [0, 1],
    });

    // 创建一个坐标系
    const coordinate = createCoordinate({
      // 指定画布的起点和宽高
      x: 0,
      y: 0,
      width: 600,
      height: 400,
      // 一系列坐标系变换
      transforms: [transpose(), cartesian()],
    });

    // 使用比例尺映射数据
    const values = {
      x: H.map(scaleX.scale),
      y: W.map(scaleY.scale),
    };

    const scales = {
      x: scaleX.scale,
      y: scaleY.scale,
    };

    // 设置样式
    const styles = {
      fill: "none",
      stroke: "steelblue",
    };

    // 绘制点
    const p = point(renderer, I, scales, values, styles, coordinate);

    console.log(p, "p");
  }, []);

  return <div>Point</div>;
}
