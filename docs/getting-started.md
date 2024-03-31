# 시작하기

## Svelte Naver Maps이 무엇인가요?

Svelte Naver Maps은 네이버에서 제공하는 [Naver Map API](https://navermaps.github.io/maps.js.ncp/)를 Svelte 컴포넌트로 제공하는 비공식 라이브러리 입니다.

`NaverMaps API`의 직접적인 사용이 필요한 경우 [NaverMaps API 공식문서](https://navermaps.github.io/maps.js.ncp/docs/)를 참고해 주세요.


## 지원 컴포넌트

| 컴포넌트        | 설명 |
| :-----------: | :----:|
| `NaverMap`    | 네이버 지도 컴포넌트 |

## 설치

::: code-group

```sh [npm]
$ npm i svelte-naver-maps
$ npm i -D @types/navermaps # for typescript
```

```sh [pnpm]
$ pnpm add svelte-naver-maps
$ pnpm add -D @types/navermaps # for typescript
```

```sh [yarn]
$ yarn add svelte-naver-maps
$ yarn add -D @types/navermaps # for typescript
```
:::

::: tip NOTE

타입스크립트를 사용할 경우 네이버에서 제공해주는 타입 정의([@types/navermaps](https://navermaps.github.io/maps.js.ncp/docs/tutorial-3-Using-TypeScript.html))를 추가적으로 설치해주세요.

:::