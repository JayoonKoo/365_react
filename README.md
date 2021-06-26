# 365_react

> 오늘 해야할 일을 정하고 완료한 일을 볼 수 있는 to do list 웹 애플리케이션

배포: 

react, JavaScript, github Pages, react-hook

## 주요 기능
### 사용자 이름 저장
브라우저에 localstorage를 이용하여 사용자의 이름을 저장합니다. 
만약 localstorage에 사용자의 이름이 없으면 이름을 물어보고 사용자로부터 이름 정보를 얻어서 localstorage에 저장합니다. 
만약 loscalsotrage에 사용자의 이름이 있으면 사용자의 이름을 이용해서 인사해 줍니다. 

### todo list
사용자로부터 해야할 일을 입력 받아서 localsotrage에 저장합니다. localstorage에 해야할 일이 있으면 화며에 출력합니다. 
사용자가 목록에 일을 완료해서 complete 버튼을 누르면 todo list에 해당 항목을 localsotrage에 complete list로 저장합니다. 

### complete list
그동안에 완료했던 일에 기록을 보여줍니다. 각각 항목 옆에 delete 버튼을 누르면 해당 항목을 삭제 하고 상단의 all delte 버튼을 누르면 모두 삭제합니다. 


### 로그아웃
메뉴를 열어서 로그 아웃 버튼을 누르면 사용자의 이름 정보를 localstorage 에서 삭제 합니다. 

### todo list all clear
메뉴를 열어서 all clear 버튼을 누르면 todo list에 모든 할일 목록을 삭제합니다.
