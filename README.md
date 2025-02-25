# React로 만드는 MBTI 검사

## 프로젝트 목적

- 인증/인가를 통한 권한 관리
- fetch를 대신할 axios 활용
- Tanstack Query 활용
- Zustand 활용
- json-server 사용으로 로컬 API 서버 구축

## Github rules

- 브랜치 나누어 작업하기
- 브랜치 명은 feat(기능),style(스타일),refactor(리팩토링)으로 시작
- 커밋은 단위별로 나누어 작업하기.
- 그러나 다음 날로 이전 시 미완성 단위로 세이브 가능
- 커밋의 설명은 "브랜치 종류: 상세한 단위 설명"으로 적기

## 나만의 룰

- 최대한 관심사를 분리하여 클린한 코드 만들기
- 커스텀 훅은 use로 시작
- 기능 함수는 handle로 시작
- 새로운 기술 적극 활용하기 (axios, TanstackQuery, Zustand, TailwindCSS 등)
- UX 향상 주의적 시점으로 프로젝트 완성도 올리기

## 기술 스택

### 프론트엔드

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1740464331421?alt=media&token=f2b4c46d-5db4-4f38-bbdc-6679b637491d)](https://github.com/msdio/stackticon)
### 배포

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1740464631713?alt=media&token=cba3e3bb-566d-498f-a1a8-a095e0f3f0f5)](https://github.com/msdio/stackticon)

## 프로젝트 실행
```
$ git clone https://github.com/KIMgyeongmIN00/React-MBTI.git
$ cd React-MBTI

$ pnpm install
$ pnpm dev
```

## 기능
- 로그인/로그아웃
- 강제 라우팅
- MBTI 검사
- 검사 결과 서버 저장
- 검사 결과 리스트업
- 필터링 검사 결과 리스트업(마이페이지)
- 프로필 닉네임 수정
- 검사 결과 통계
- TanstackQuery를 사용한 로딩 화면 구현

## 프로젝트 발자국
- [로그인 안하면 들어오지도 마!](https://velog.io/@rlarudals61/250220-%EC%9D%B8%EC%A6%9D%EC%9D%B4-%ED%95%84%EC%9A%94%ED%95%9C-%ED%8E%98%EC%9D%B4%EC%A7%80)
- [라이브러리는 마법이 아니다.](https://velog.io/@rlarudals61/250224-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%91%90-%EA%B0%9C%EB%A5%BC-%EA%B0%99%EC%9D%B4-%EC%93%B0%EA%B3%A0-%EC%8B%B6%EC%96%B4-%EC%9E%98-%EC%95%8C%EA%B3%A0-%EC%8D%A8%EC%95%BC%EC%A7%80-%EA%B7%B8%EB%9F%BC)
