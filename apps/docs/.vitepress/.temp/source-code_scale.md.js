import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"source-code/scale.md","filePath":"source-code/scale.md"}');
const _sfc_main = { name: "source-code/scale.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 id="比例尺" tabindex="-1">比例尺 <a class="header-anchor" href="#比例尺" aria-label="Permalink to &quot;比例尺&quot;">​</a></h3><p>在可视化中的比例尺，就是用来度量数据属性的，将数据抽象的属性映射为一个视觉属性。这决定了我们如何理解图形的颜色、大小、形状和位置等。选择一个比例尺的时候，需要我们去思考度量的是什么以及这些度量的含义，最终这些选择将决定我们如何理解一个图形。</p><p>比例尺本质上是一个函数，会将一个值（变量）从一个特定的范围（定义域）映射到另一个特定的范围（值域）。定义域（Domain）是由数据的属性决定，值域（Range）是由图形的视觉属性决定。根据定义域和值域的不同，我们需要选择不同的比例尺。</p><h3 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h3><ul><li>恒等比例尺 (Identity Scale)：将输入值直接映射到输出值，不进行任何转换。</li><li>连续比例尺（Continuous Scale）：用于将连续的数据映射到连续的视觉属性，如颜色、大小等。生成坐标轴所需要的刻度。 <ul><li>线性比例尺（Linear Scale）：将输入值线性映射到输出值。</li><li>对数比例尺（Log Scale）：将输入值的对数映射到输出值。</li><li>幂比例尺（Pow Scale）：将输入值的幂映射到输出值。</li><li>平方根比例尺（Sqrt Scale）：将输入值的平方根映射到输出值。</li></ul></li><li>序数比例尺（Ordinal Scale）：用于将离散的数据映射到离散的视觉属性，如颜色、形状等。</li><li>分布比例尺（Time Scale）：用于将时间数据映射到连续的视觉属性，如颜色、大小等。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("source-code/scale.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scale = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  scale as default
};
