import { createLinear } from './linear';

export function createTime({ domain, range, interpolate }) {
  return new Time({ domain, range, interpolate });
}

class Time {
  constructor({ domain, range, interpolate }) {
    this.domain = domain;
    this.range = range;
    this.transformedDomain = domain.map((d) => this.transform(d));
    this.linear = createLinear({ transformedDomain, range, interpolate });
  }

  transform(x) {
    return x.getTime(x);
  }

  scale(x) {
    return this.linear.scale(this.transform(x));
  }

  ticks(tickCount) {
    this.linear.ticks(tickCount).map((t) => new Date(t));
  }

  nice(tickCount) {
    this.linear.nice(tickCount);
  }
}
