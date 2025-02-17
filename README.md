## ✅ 각 폴더별 역할 정리

| 폴더                   | 설명                                                                |
| ---------------------- | ------------------------------------------------------------------- |
| apps/frontend          | 🌐 Next.js 기반 프론트엔드 (UI, Store, API 요청 등)                 |
| apps/backend           | 🛠 NestJS 기반 백엔드 (API, DB, 비즈니스 로직)                      |
| packages/shared        | 🔗 프론트 & 백엔드에서 공통으로 사용하는 모듈 (DTO, API 요청, 유틸) |
| packages/ui            | 🎨 공통 UI 컴포넌트 (버튼, 카드, 폼 등)                             |
| packages/eslint-config | 🚨 Monorepo 전체 ESLint 설정 패키지                                 |
| packages/tsconfig      | 🛠 Monorepo 공통 TypeScript 설정                                    |

✅ 개발 방식 요약

---

🌐 1. frontend (Next.js)

---

- View 페이지 (pages/)와 상태 관리 (store/)를 관리
- API 요청 (services/)은 axios 또는 react-query 사용
- 공통 UI는 packages/ui에서 가져와서 사용
- 백엔드에서 만든 DTO와 유틸 함수를 @genome-editing-lab/shared에서 가져와 사용

🛠 2. backend (NestJS)

---

- API 엔드포인트 (controllers/)에서 요청 처리
- 비즈니스 로직 (services/)과 데이터베이스 연동 (repositories/)
- 공통 DTO, 유틸, API 요청 모듈을 @genome-editing-lab/shared에서 가져와 사용

🔗 3. packages/shared (DTO, API 요청, 유틸)

---

- Zod DTO를 정의하여 프론트 & 백엔드에서 동일한 데이터 검증 로직 사용
- API 요청 공통 모듈을 정의 (ex. axios 인스턴스)
- 프론트 & 백엔드에서 공통으로 사용할 유틸 함수 관리
