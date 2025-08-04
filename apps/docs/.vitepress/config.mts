import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TRender",
  description: "TRender's docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '源码解析', link: '/source-code/scale' }
    ],

    sidebar: [
      {
        text: '源码解析',
        items: [
          { text: 'Scale 比例尺', link: '/source-code/scale' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/taiiiyang/TRender' }
    ]
  }
})
