import { normalize, tickStep, ticks, round, nice, ceil, floor } from "./utils";

export function createLinear({ domain, range, interpolate }) {
  return new Linear({ domain, range, interpolate });
}

export default class Linear {
  constructor({ domain, range, interpolate }) {
    this.domain = domain;
    this.range = range;
    const [d0, d1] = domain;
    const [r0, r1] = range;
    this.d0 = d0;
    this.r0 = r0;
    this.d1 = d1;
    this.r1 = r1;
    this.interpolate = interpolate ?? this.interpolateNumber;
  }

  scale(x) {
    const { d0, d1, r0, r1 } = this;
    const t = normalize(x, d0, d1);
    // 默认是使用线性的数值插值器
    // 如果是颜色可以使用颜色插入器
    return this.interpolate(t, r0, r1);
  }

  interpolateColor(t, start, stop) {
    const r = this.interpolateNumber(t, start[0], stop[0]);
    const g = this.interpolateNumber(t, start[1], stop[1]);
    const b = this.interpolateNumber(t, start[2], stop[2]);
    return `rgb(${r}, ${g}, ${b})`;
  }

  interpolateNumber(t, start, stop) {
    // start + (stop - start) * t;
    // start + stop * t - start * t;
    // start * (1 - t) + stop * t;
    return start * (1 - t) + stop * t;
  }

  // 优化 ticks，使其更具可读性
  ticks(tickCount) {
    const { d0, d1 } = this;
    return ticks(d0, d1, tickCount);
  }

  // 优化 start 和 stop，使其都是刻度间隔的整数倍
  nice(tickCount) {
    const { d0, d1 } = this;
    const step = tickStep(d0, d1, tickCount);
    [this.d0, this.d1] = nice([d0, d1], {
      floor: (x) => floor(x, step),
      ceil: (x) => ceil(x, step),
    });
  }
}
