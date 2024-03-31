import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Svelte Naver Maps",
  description: "Svelte Naver Maps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '소개',
        items: [
          { text: '시작하기', link: '/getting-started' },
          { text: '기본 사용법', link: '/basic-usage' },
          { text: 'SvelteKit', link: '/svelte-kit' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dalcon10028/svelte-naver-maps' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/svelte-naver-maps' }
    ]
  }
})
