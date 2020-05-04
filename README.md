# SPA

## Info

- [리액트를 다루는 기술](https://search.daum.net/search?w=bookpage&bookId=5056576&tab=introduction&DA=LB2&q=%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC%20%EB%8B%A4%EB%A3%A8%EB%8A%94%20%EA%B8%B0%EC%88%A0) 도서를 공부하면서 진행한 실습 예제입니다.

## Install

```bash
yarn
```

## Run (development mode)

```bash
yarn start
```

## Build

```bash
yarn build
```

## useHook

- 책에서는 컴포넌트를 [class 형태](#4)로 진행했으나 Hook으로도 구현해봤습니다.
- 이런식으로 작성하는 것인지는 의문이 들지만 기능은 정상동작했습니다.
- 하지만 history 자체도 결국에는 props로 받아오는데 값을 push해도 괜찮은 것인지 의문이 생겼습니다.
