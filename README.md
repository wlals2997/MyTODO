# Todolist by Vanilla JS
***
###순수 자바스크립트로 만든 투두리스트 크롬 앱 입니다.
👉🏼[웹페이지 링크](https://wlals2997.github.io/MyTODO/)

####목차
1. [구현목록](#1-%EA%B5%AC%ED%98%84%EB%AA%A9%EB%A1%9D)
2. [특징](#2-%ED%8A%B9%EC%A7%95)
3. [화면](#3-%ED%99%94%EB%A9%B4)

***
## 1. 구현목록
##### 로그인,로그아웃
* input에 사용자의 이름을 기입하고 버튼을 누르면 input은 사라지고 사용자의 이름이 화면에 나타나게 됩니다.
* localstorage에 username을 저장하도록 하였습니다.
* 새로고침시 localstorage에 username이 남아있기 때문에 초기화되지 않습니다.
* 로그아웃시 localstorage에 있는 username은 removeItem메소드를 사용하여 삭제하도록 하였고 화면을 reload하도록 하였습니다.

##### 시계
- 현재 시간과 날짜를 표현하기 위해 new Date() 객체를 사용하였습니다.
- setInterval 함수를 이용하여 매초마다 getClock이라는 함수를 실행하도록 하였습니다.
- getDay 메소드를 활용하여 현재 요일을 화면에 나타나도록 하였습니다.

#### 명언, 배경이미지
- Math.random과 Math.floor  을 이용하여 랜덤으로 보여지게하였습니다.
#### 투두리스트 작성
- input 에 할일을 작성하여 enter을 누르면 form 안에 createElement 메서드를 사용하여 li와 span, 투두리스트 당 삭제 button이 생성되도록 하였습니다.
- 이름과 마찬가지로 작성한 투두는  Json.stringfy메서드를 사용하여 객체인 투두를  문자열로 변환하여 localstorge에 id(랜덤숫자)와  투두를 저장하도록 하였습니다.
- 배열에 담긴 투두의 아이디(숫자)와 삭제할 아이디(사용자가 클릭한 아이디)를 fillter함수를 사용하여 삭제하도록 하였습니다.
#### 현재 위치 기준 날씨 알림
- openWeatherMap API 를 받아와 위치, 날씨, 온도 아이콘을 받아 오도록 하였습니다.

## 2. 특징
- 화면을 새로고침 하더라도 localstorage에 사용자의 db를 저장하였기 때문에 초기화 되지 않습니다.
- 작성한 투두는 사용자가 클릭한 이벤트를 받아와 삭제할 수 있습니다.
- weather api를 받아와 현재위치의 날씨 온도를 알 수 있습니다.
- 로그인과 로그아웃이 가능합니다.
## 3. 화면
#### 초기화면
<img src="https://postfiles.pstatic.net/MjAyMjAyMjJfMjQ5/MDAxNjQ1NTE0NzcyNjk5.89MFV4PMjIDDWBvzOw3j0IazUOzqetxsKeHJAWHDNUMg.cZVOhtsHqJU4ijbUw3yomDfmB7Hat2mR-hdL8eC_w-Mg.JPEG.wlals2997/%ED%88%AC%EB%91%90%ED%99%94%EB%A9%B4.JPG?type=w966">

#### 로그인, 투두작성
<img src="https://postfiles.pstatic.net/MjAyMjAyMjJfMjM4/MDAxNjQ1NTE0Nzg3OTk0.uMPqLRlXTScKttWLNCqRWHg25dONVf724jdBiAdeWtwg.93b_IY0d02wVQpUj8Hgl6fqMw0yzOX9BZ4Qd01DsHw0g.JPEG.wlals2997/%ED%88%AC%EB%91%90%ED%99%94%EB%A9%B42.JPG?type=w966">

