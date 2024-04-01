import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Svelte Naver Maps",
  description: "Svelte Naver Maps",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '가이드', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/naver-map' },
      { text: 'Naver Maps 공식문서', link: 'https://navermaps.github.io/maps.js/'}
    ],

    sidebar: {
      '/guide/': [
        {
          text: '소개',
          items: [
            { text: '시작하기', link: '/guide/getting-started' },
            { text: '기본 사용법', link: '/guide/basic-usage' },
            { text: 'SvelteKit', link: '/guide/svelte-kit' },
          ]
        },
        {
          text: 'Examples',
          items: [
            { 
              text: '지도', 
              items: [
                { text: '지도 기본 예제', link: '/guide/tutorial-1-map-simple' },
              ]
            },
            { 
              text: '마커', 
              items: [
                { text: '마커 표시하기', link: '/guide/tutorial-1-marker-simple' },
                { text: '이미지 아이콘 사용하기', link: '/guide/tutorial-3-marker-image-icon' },
              ]
            },
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Map',
          items: [
            { text: 'NaverMap', link: '/reference/naver-map' },
          ]
        },
        {
          text: 'Naver Overlays',
          items: [
            { text: 'NaverMarker', link: '/reference/naver-marker' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dalcon10028/svelte-naver-maps' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/svelte-naver-maps' }
    ]
  }
})
