import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Svelte Naver Maps",
  description: "Svelte Naver Maps",
  head: [
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-KS3MR2TKYM',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-KS3MR2TKYM');",
    ],
  ],
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
            { 
              text: '정보 창', 
              items: [
                { text: '정보 창 표시하기', link: '/guide/tutorial-1-infowindow-simple' },
              ]
            },
            { 
              text: '도형', 
              items: [
                { text: '사각형, 원, 타원 그리기', link: '/guide/tutorial-1-shape-simple' },
                { text: '폴리곤, 폴리라인 그리기', link: '/guide/tutorial-3-polygon-simple' },
              ]
            },
            { 
              text: '지상 오버레이', 
              items: [
                { text: '지상 오버레이 표시하기', link: '/guide/tutorial-ground-overlay' },
              ]
            },
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Base Type Definitions',
          items: [
            { text: '기반 타입', link: '/reference/base-type-defs' },
          ]
        },
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
            { text: 'NaverInfoWindow', link: '/reference/naver-info-window' },
            { text: 'NaverCircle', link: '/reference/naver-circle' },
            { text: 'NaverEllipse', link: '/reference/naver-ellipse' },
            { text: 'NaverRectangle', link: '/reference/naver-rectangle' },
            { text: 'NaverPolygon', link: '/reference/naver-polygon' },
            { text: 'NaverPolyline', link: '/reference/naver-polyline' },
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
