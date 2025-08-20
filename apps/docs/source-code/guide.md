## 辅助组件

### 坐标轴

在不同的坐标系下 AxisX 和 AxisY 的展现形式不同，根据是否是极坐标（isPolar）以及是否转置坐标系（isTranspose），可以将它们分别分为四种类型：

- (isPolar: false, isTranspose: false)
- (isPolar: false, isTranspose: true)
- (isPolar: true, isTranspose: true)
- (isPolar: true, isTranspose: false)

### 刻度

ticks 的绘制，指的是跟坐标轴垂直的一小条线
