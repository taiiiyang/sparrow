import { drawRedRect } from "./drawRedRect.js";

// 初始化画布
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
document.body.appendChild(svg);
svg.setAttribute("width", "400");
svg.setAttribute("height", "300");

// 绘制红色矩形
drawRedRect(svg);
