### 几何图形

几何图形需要有通道值，通过在创建时指定对应的通道，在生成函数中会去校验是否传入了对应的通道值。

#### createGeometry

通过 createGeometry 的形式，可以实现在实际调用 render 的时候，校验通道值

```javascript
export function createGeometry(channels, render) {
  const geometry = (renderer, I, scales, values, directStyles, coordinate) => {
    Object.entries(channels).forEach(([key, { optional, scale }]) => {
      if (optional) return;
      if (!values[key]) throw new Error(`missing Channels: ${key}`);
      if (!scaleValidator(scale, scales, key)) throw new Error(`${key} channels need a scale`);
    });

    return render(renderer, I, scales, values, directStyles, coordinate);
  };

  geometry.channels = () => channels;

  return geometry;
}
```

#### 比例尺和通道的关系

通常在生成图形时，比例尺和通道值是分开传入的，比如 cell 图形，他的 x 轴 和 y 轴 必须要是 band 比例尺，所以必须要有 scales

```javascript
{
  geometry: cell,
  index: [0, 1, 2, 3],
  scales: { // 对应通道的比例尺
    x: createBand({
      domain: ['a', 'b'],
      range: [0, 1],
      padding: 0,
    }),
    y: createBand({
      domain: ['c', 'd'],
      range: [0, 1],
      padding: 0,
    }),
  },
  styles: {
    stroke: 'black',
  },
  channels: { // 通道值
    fill: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
    x: [0, 0, 0.5, 0.5],
    y: [0, 0.5, 0, 0.5],
  },
}
```
