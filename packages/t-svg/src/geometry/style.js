export function channelStyles(index, channel) {
  const { stroke: S, fill: F } = channel;
  return {
    ...(S ? { stroke: S[index] } : {}),
    ...(F ? { fill: F[index] } : {}),
  };
}
