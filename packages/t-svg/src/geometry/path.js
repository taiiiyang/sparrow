import { createChannel, createChannels } from "./channel";
import { channelStyles } from "./style";
import { createGeometry } from "./geometry";
import { path as shapePath } from "./shape";

const channels = {
  d: createChannel({ name: "d", optional: false, scale: "identity" }),
  fill: createChannel({ name: "fill" }),
  stroke: createChannel({ name: "stroke" }),
};

const render = (renderer, I, scales, values, directStyles, coordinate) => {
  const defaults = {};
  const { d: D } = values;
  return Array.from(I, (i) => {
    return shapePath(renderer, coordinate, {
      ...defaults,
      ...directStyles,
      ...channelStyles(i, values),
      d: D[i],
    });
  });
};

export const path = createGeometry(channels, render);
