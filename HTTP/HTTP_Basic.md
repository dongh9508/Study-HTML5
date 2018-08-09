﻿## HTTP란?
 
* HTTP는 HyperText Transfer Protocol의 약자이다.

* HTTP는 인터넷에서 가장 중요한 통신규칙이다.

* HTTP는 웹을 넘어서 인터넷이 동작하는 근간이 된다.

* HTTP라고 하는 것은 결과적으로 웹 브라우저와 웹 서버가 주고받는 Request(요청)와 Response(응답)를 나타낸다. 

* HTML, JS, CSS, 이미지 와 같은 파일들은 서로가 주고받는 컨텐츠라면 이러한 컨텐츠를 주고받기 위해서는 서버와 클라이언트가 서로가 알아들을 수 있는 공통의 약속된 메세지가 필요한데, 이 메세지를  HTTP라고 한다. 

* HTTP는 크게 리퀘스트와 리스폰스를 위한 메세지로 구분되어 있다.

* 웹 브라우저가 웹 서버에게 HTTP 리퀘스트(요청) 메세지를 보내면 웹 서버가 웹 브라우저에게 그에 맞게 리스폰(응답) 메세지를 보내준다.

* 리퀘스트 메세지가 성공적으로 가고 리스폰 메세지가 성공적으로 브라우저에게 가면 리퀘스트 메세지에 해당하는 정보를 브라우저에게 제공해준다. 
웹 브라우저는 웹 서버로부터 받은 리스폰(응답) 메세지를 토대로 웹 브라우저에 그 정보들을 그려준다. 

* HTTP 메세지들은 크롬 같은 브라우저에서 확인을 할 수가 있는데, 크롬의 경우 크롬 DevTools를 이용해서 웹 브라우저와 웹 서버가 주고받은 파일들과 메세지를 볼 수 있다.

* 크롬의 개발자도구를 켜고 (마우스 오른쪽으로 클릭하고 검사라는 탭을 클릭한다.) Elements, Console, Sources 등 다양한 탭이 보일텐데, 그 중에서 Netowrk 탭을 클릭하면 Name 부분에 여러 파일들이 보일텐데, 웹 서버와 웹 브라우저가 주고받은 파일들에 해당된다. 

* 그 파일을 클릭하면 오른쪽 부분에 Headers, Preview 등의 탭이 나올텐데,
Headers 라는 탭을 클릭하면 위에서 차례대로 General과 Responese Headers와 Request Headers가 있는 것을 볼 수 있다.

* 이 Responese Headers와 Request Headers가 웹 서버와 웹 브라우저가 주고받은 HTTP 메세지에 해당된다.

* Response Headers와 Request Headers의 옆에 view source 라는 것이 보이는데, 그것을 클릭하면 자세한 메세지를 볼 수 있다.

* Response 메세지가 성공적으로 왔을경우 메세지의 상단에 HTTP/(해당 통신 넘버) 200 OK 라고 적혀있다.

* 이것은 즉, 나도 너와 같은 HTTP로 통신하고 있고 너의 요청을 잘 받았고, 그 요청을 토대로 나도 응답 메세지를 보낸다라는 의미라고 보면 된다.

* 즉, 웹 브라우저와 웹 서버가 클라이언트와 서버의 역할을 하면서 브라우저가 필요한 정보(HTML,CSS,JS, 비디오, 이미지, 오디오 파일 등등)을 요청하면
웹 서버는 웹 브라우저가 원하는 정보를 리스폰 메세지를 통해서 전달하게 되고 리스폰 메세지를 전달받은 웹 브라우저는 리스폰 메세지를 토대로 웹 브라우저에 표시해야할 것을 표시하고 띄우면서 우리에게 보여주게 된다.