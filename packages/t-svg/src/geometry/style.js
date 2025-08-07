export function channelStyles(index, channel) {
  const { stroke: S, fill: F } = channel;
  return {
    ...(S ? { stroke: S[index] } : {}),
    ...(F ? { fill: F[index] } : {}),
  };
}

export function groupChannelStyles([index], channels) {
  return channelStyles(index, channels);
}
