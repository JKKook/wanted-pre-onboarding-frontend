## wanted-pre-onboarding-frontend

### 지원자의 성명 : 이종국

### 사용 라이브러리

-   React Router Dom
-   uuidv4

### 기능 설명

#### App.js

-   각각의 페이지로 라우팅
-   로그인 생성된 토큰 받고, 자식 컴포넌트에 props로 전달

#### component/Home.js

-   Root 페이지에서 보여지는 UI로 '회원가입, 로그인, 투두리스트'로 구성

#### component/NotFound.js

-   404페이지

#### component/sign/SignUp.js

-   회원가입 페이지
-   유효성 검사 : 이메일 '@' 포함, 비밀번호 8자 이상
-   회원가입 성공 시, 알러트 창과 함께 로그인 페이지로 이동

#### component/sign/SignIn.js

-   로그인 페이지
-   로그인 시, JWT 토큰 발급
-   토큰 유무와 경로에 따른 지정된 주소로 리다이렉팅

1. 토큰 존재 + /signin 경로 시 => /todos 페이지로 이동

2. 1번과 반대인 경우 /signin 페이지로 이동

#### component/todo/TodoApp.js

-   투두리스트 로컬스토리지에 저장
-   토큰을 통한 비동기 통신

#### component/todo/AddTodo.js

-   투두리스트 리스트 추가

#### component/todo-item/TodoItem.js

-   체크 박스 상태 변화 관리
-   수정, 삭제 기능 관리

### 프로젝트의 실행 방법

```bash
git clone https://github.com/JKKook/wanted-pre-onboarding-frontend.git
cd wanted-pre-onboarding-frontend
npm install
npm start
```

### 배포 사이트

https://wanted-pre-onboarding-frontend-sepia-one.vercel.app/
