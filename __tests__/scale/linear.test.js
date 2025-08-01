import { createLinear } from '../../src/scale/linear';

describe('createLinear', () => {
  test('createLinear({ domain, range, interpolate }) returns expected linear scale.', () => {
    const linear = createLinear({ domain: [3, 20], range: [0, 100] });
    linear.nice(3);
    expect(linear.ticks(3)).toEqual([0, 5, 10, 15, 20]);
    console.log(linear.scale(10), linear.scale(2), linear);
    // expect(linear.scale(2)).toEqual(2);
  });
});
