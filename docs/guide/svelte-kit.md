# SvelteKit

## SvelteKit이란 무엇인가요?

[SveleteKit](https://kit.svelte.dev/)은 [Svelte](https://svelte.dev/)를 사용하여 강력하고 성능이 뛰어난 웹 애플리케이션을 빠르게 개발하기 위한 프레임워크입니다. React에선 SvelteKit은 Next와 비슷합니다. Vue의 경우엔 SvelteKit은 Nuxt와 유사합니다.

## SSR false
일반적으로 SvelteKit은 서버 사이드에서 페이지를 렌더링하고 해당 HTML을 `hydration`하는 과정을 거칩니다.
`svelte-naver-maps`는 client 환경에서 실행되어야 하며 아래와 같이 ssr 옵션을 꺼서 실행해야 합니다.

::: code-group

```typescript [+page.ts]
export const ssr = false;
```

:::