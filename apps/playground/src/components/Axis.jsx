import { createLinear, transpose, cartesian, axisX, axisY } from "@TRender/t-svg";
import { firstOf, renderAxis } from "@/utils/test";

const domain = [0, 10];
const scale = createLinear({
  domain,
  range: [0, 1],
});

export default function () {
  renderAxis({
    scale,
    domain,
    transforms: [transpose(), cartesian()],
    axis: axisX,
    label: "val",
    grid: true,
  });

  return <></>;
}
