# React Start Kit

## 1. 기술 스택

1. 프레임워크: react
2. 번들러 : vite
3. 언어 : typescript
4. 라우터 제어 : react-router
5. 네트워크 호출 : axios
6. 비동기 상태 제어 : @tanstack/react-query
7. 전역 상태 관리 : zustand -> redux/toolkit
8. 스타일링 : tailwindcss
9. 애니메이션 제어 : motion/react (예전 이름 framer-motion) - 설치는 motion만
10. 헤드리스 UI(headless ui) : shadcn-ui
11. 폼 & 유효성 검증 : react-hook-form + zod
12. 컴포넌트 문서화 : storybook
13. 데이터 목킹 : msw
14. 날짜, 시간 변환 : dayjs
15. 단위/통합 테스트 작성 : vitest (요즘은 잘 작성 안함)
16. e2e 테스트 : playwright or cypress (요즘은 거의 playwright)
17. 아이콘 프리셋 : lucide-react

## 패키지 설치 및 삭제

- `pnpm install or pnpm` : pakage.json에 지정된 모든 dependencies 설치
- `pnpm add` : n개 혹은 한개의 패키지만 설치할 때
- `pnpm add -D` : devDependencies에 설치할 때 (src 개발소스에서 import하지 않는 패키지)
- `pnpm remove`: 패키지를 제거할 때
