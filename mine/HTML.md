## 공부한 것  
1. 명령어  
    1) [!DOCTYPE HTML]  
    2) [title] 헤드부분 타이틀 입력 [/title]  
    3) [h1~6] 글자크기조정 [/h#] 숫자가 작을수록 크기가 크다  
    4) [p] 문단나누기 [/p]  
    5) [img src="이미지url" /] 사진 삽입하기  
    6) [a href="url"] 텍스트에하이퍼링크걸기 [/a]  
    7) 정렬리스트만들기(ordered list 의 준말)  
      자동으로 문단번호를 매겨준다  
          [ol]  
            [li]첫번째내용[/li]  
            [li]두번째내용[/li]  
          [/ol]  
    8) 비정렬리스트만들기(숫자가 아닌 기호로 정렬)  
        [ul] (unordered list 의 준말, 나머지 방법 7번과 동일)  
        [/ul]  
    그리고 정렬과 비정렬을 섞을 수 있다  
    9) 주석 만들기  
    해당 부분 클릭 후 Ctrl + /  
    {{{{[[[[이하 style 속성 이용]]]]}}}}    
  10) 글씨 크기 조정  
        [아무태그 style="font-size: 숫자px;"] [/닫기]  
  11) 글씨 색 조정  
      style="color:원하는색"  
  둘 다 바꾸고 싶으면  
      color:색 ; font-size: 숫자px  
  처럼 중간에 세미콜론 삽입하면 됨!  
  12) 글씨체 변경  
      font-family:아무글씨체  
  13) 배경색 변경  
      background-color:색  
  14) 텍스트 정렬  
      text-align:left/center/right  
      {{{{{[[[[[[[이하 style 속성 안씀]]]]]]]}}}}}  
  15) 단어 굵게 [strong]
      style 안쓰고 [strong]원하는텍스트[/strong] 태그 생성  
  16) 이텔릭체 강조 [em]
      style 안쓰고 [em]원하는텍스트[/em]  
  17) 표 삽입 [table]  
        [table] [/table]  
  18) 표 행 삽입 [tr]  
        [table] [tr]  [/tr] [/table]  
  19) 표 열 삽입 [td]  
        `[table] [tr] [td] [/td] [/tr] [/table]`  
  20) 표도 head 와 바디가 있다! [thead]&[tbody]  
        [table] 여기 넣어야 [thead] [/thead] [tbody] [tr] [td] [/td] [/tr] [/tbody] [/table]  
  21) 표 이름 넣기 [th colspan="열갯수"]  
        [thead] [tr] [th] 이름 [/th] [/tr] [/thead]  
  22) 원하는 특정 부위 꾸밀 때 [span]  
      이렇게 문장이 있다면 [span style="원하는스타일"]꾸미고[/span] 싶은 부분에 추가하면 됨  

2. CSS  
  .css라는 확장명으로 파일을 만들어서 그 안에 작성. 그리고 {중괄호}를 씀  
        span {
        	font-family:cursive;
        }  
  이런 형태로 작성, span을 가리키는 말을 선택자(selector)라고 부름.  
  style 명령어를 바로 쓰면 효과가 나옴. "" 안씀  
  1) style 태그를 HTML 헤드에 넣어도 됨  
  2) 보통의경우 css파일은 따로 작성하는데 그러면 HTML에 연결해줘야함  
    head 에 넣어줌  
        [link type="text/css" rel="stylesheet" href="stylesheet.css"/]  
  3) css의 주석처리  
    선택자 앞에 (슬래시+별) 그리고 닫은 중괄호} 뒤에 (별+슬래시) 로 닫음  
  4) 색은 단어로도 8진법 16진법으로도 표현 가능하다.  
      네이버에서 "16진수 색상표"나 구글에서 "hex color paette", "hex color picker"를 검색  
  5) px 말고 em  
    1em 기준으로 배수em 으로 작성, 상대적인 폰트 크기  
  6) 글씨체 우선순위  
    font-family: 1순위, 2순위, 3순위, ...;  
    이렇게 컴마로 작성하면 컴퓨터에 있는 폰트로 우선순위로 적용함  
  7) 표 수식 시 border 사용가능  
      border: 숫자px 선종류(solid,dashed등) 색 등;  
        selector {
                  height:50px;
                  border: 1px dashed blue;
        }  
  8) 둥근테두리 (border-radious: 숫자px)  
  9) 정렬 (보통 버튼)  
    margin:auto  
    양 쪽 여백을 동일하게 해라  
  10) 여러 동일한 태그에 쌓여있는 태그를 수식하고 싶으면  
    div div div h1 {css수식어} 이렇게 쓰면 됨  
  11) 하이퍼링크 걸린 텍스트 밑줄 제거  
    text-decoration:none  
  12) div > p {  Some CSS  }  
    이렇게 하면 div에 직접 싸인 p 만들 꾸밈, div 안에 다른 태그로 싸여있는 p는 건드리지 않음  
  13) tag < id < class  
    id 는 selector로 #id 로 불러오고  
    class는 selector로 .class 로 불러온다.


3. 용어  
1) 속성 : 요소의 특징 혹은 설명 ex) img src 에서 src가 속성임   
2) 태그 : 내가 흔히 명령어라 부르는 맨 앞의 것  
3) px : pixel  
