import { createContext } from "./context.js";
import Shape from "./shape.js";
import { restore, save, scale, translate, rotate } from "./transform";

class Renderer {
  constructor(width, height) {
    this.ctx = createContext(width, height);
    this.shape = new Shape(this.ctx);
  }

  line(options) {
    return this.shape.line(options);
  }

  circle(options) {
    return this.shape.circle(options);
  }

  text(options) {
    return this.shape.text(options);
  }

  rect(options) {
    return this.shape.rect(options);
  }

  path(options) {
    return this.shape.path(options);
  }

  ring(options) {
    return this.shape.ring(options); // 绘制圆
  }

  restore() {
    const context = this.ctx;
    return restore(context);
  }

  save() {
    const context = this.ctx;
    return save(context);
  }

  scale(...args) {
    const context = this.ctx;
    return scale(context, ...args);
  }

  rotate(...args) {
    const context = this.ctx;
    return rotate(context, ...args);
  }

  translate(...args) {
    const context = this.ctx;
    return translate(context, ...args);
  }

  node() {
    const context = this.ctx;
    return context.node;
  }

  group() {
    const context = this.ctx;
    return context.group;
  }

  render() {}
}

export const createRenderer = (width, height) => {
  return new Renderer(width, height);
};
