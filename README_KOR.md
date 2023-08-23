# MYabc_project--ReactNative

- 백엔드  (파이어베이스 for me) : https://console.firebase.google.com/project/myabc-97f03/overview?hl=ko

- 만든이 : 박영환(John Park)
- 주요 도구 : React Native (Expo)
- CSS : Nativewind(Tailwind Css)
- 보조 도구 : TypeScript, Context API, Dictionary API, FireBase, PhotoShop
- 라우터 : Expo Router (Folder-based routing)
- 아이디어 여부 : Idea 85%, Clone 15% 
- 설명  :
  이 앱은 제가 만든 MYabc이라는 영어 공부앱 입니다. 암기 하기위한 Memrize 파트, 영/영 사전을 위한 dictionary 파트, 실 생활 영어 사용빈도를 위한 video 파트, 문법 공부를 위한 grammar 파트로 구성되어 있습니다.
- 만든 이유 :
  제가 처음 미국에 왔을 때, 언어 장벽 때문에 모든 것이 어렵게만 느껴졌습니다. 그리고 많은 시행착오를 겪으면서 영어실력이 향상 되었던 것을 기억합니다. 이는 자주 사용하는 단어와 문장의 맥락을 공부하는 것이였습니다. 그리고 또한 영어로 영어의 단어의 의미를 확인하는 것은 단어의 진정한 의미를 알기 위해 도움이 많이 되었고, 그래서 제가 실제로 영영 사전과 영어 동영상을 주로 사용했습니다. 저는 그 경험을 바탕으로 영어 공부를 위한 웹사이트나, 애플리케이션을 개발하는 것이 좋을 것 같다고 생각하게 되었고 이를 실천에 옮기게 되었습니다. 그리고 이미 'MYabc' 웹 사이트는 이미 만들어서 그 웹사이트와 똑같은 백엔드 서버가 연동되는 어플을 React Native를 이용하여 만들게 되었습니다.
  
- 어려웠던점 및 해결책  :
1. 리액트 네이티브에서 파이어베이스를 사용하면서, 로그인을 위해 OAuth를 구현하고 있었는데, 처리하는 방법이 일반 리액트로 웹 사이트를 만들때와는 전혀 다르다는 것을 알게되었습니다. 그래서 프로젝트 중간에 그것을 해결하기 위해 열심히 연구했고 결국 이를 해결하고 앱에 적용하였습니다.
2. 'Day'를 삭제하려고 할 때마다 잘 작동했다 안했다를 반복하였는데, 데이터가 삭제될 준비가 될때 비동기식으로 준비가 되어 준비되기 이전에 삭제를 하면 진행이 되지 않았습니다. 그래서 로딩 처리하기 보단 삭제 준비 시간을 벌기 위해 'Home' 페이지에서 부터 미리 삭제 준비를 마치도록 데이터를 설정하고 'Context API'를 통해 'Delete Day' 모달에 전달하게 하였습니다.
3. 'Video'와 'Grammar' 파트를 구현하면서, 이전에 웹 사이트 만들때 사용했던 API들이 애플리케이션용이 아닌 웹 사이트용 이라는 것을 알게 되었습니다. 그래서 고민한 끝에 WebView로 대체하였습니다.
4. 이 앱을 만들면서 안드로이드와 IOS 차이가 많드는 것을 알게되었습니다. 특정 OS에서 사용할 수 없는 도구들이 있었고, 혹은 둘 다 사용할 순 있지만 사용되는 규모, 정도, 범위가 달랐습니다. 그래서 각 OS의 더 나은 솔루션과 UI를 적용하기 위해 이 두 OS를 비교하여 크로스 브라우징했습니다.

- 고쳐야 하거나 개선이 필요한 점 (CI/CD) : 단어 편집 기능, Swr 나 React query 도입하기, 이미지 최적화, 'AuthContext'파일 부분 코드 정리하기

- 로그인 필수 ? : Yes (가입하거나, SNS로그인(Oauth))
- 프로젝트 이름 이유 : "ABC"는 알파벳의 시작이지만 때론 영어 공부의 시작을 의미하기 때문에 저는 그것을 MYabc라고 이름 지었습니다

- 주석 언어 : 한국어

- 만든기간 : 2023년 7월 27일 ~ 8월 21일
- 디버깅기간  : 2023년 8월 21일 ~ 8월 23일 (클린코드, 오류 점검, 주석)

# 기능
- 스플래시 스크린
- 반응형 앱
- 로그인, 로그아웃, 회원 가입
- 구글, 깃허브, 페이스북 아이디로 로그인 (Oauth)
- 네비게이션 탭바
- 캐러셀
- 웹 버전으로 링크 걸기
- 로딩중 플레이스 홀더 (데이타 존재 여부 상관없이)
- Days 추가 및 제거 (하루에 외울 단어를 넣기 위해)
- Words 추가 및 제거
- 단어 가리기 및 보이기 (단어 외우기 위해)
- 표 안에 회색 줄 (외운 단어들 표시)
- day마다 넘어가기
- 영영 사전 (Dictionary API)
- WebView (Video, Grammar)
- 동영상 보면서 단어 저장
- 버튼을 손동작으로 옮기기

# 샘플 사진 (아직 공사중)
- Home
![Home](https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/820c02fd-fa96-4fdf-be75-729b848adb4b)

- Memorize
![Memorize](https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/e15b3b4f-25db-4983-85b4-9f477aa20303)
  
- Dictionary

- Video
  
- Grammar

- Login
![Login](https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/9bd7d089-532c-49b5-bad5-f32775424e04)


# 샘플 비디오 (아직 공사중)
<h3> ---- 갤럭시 23으로 촬영 (안드로이드) ---- </h3>

<h3> 1. Home, Memorize('Days' 추가 및 제거, 'Words' 추가): </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/e085283b-0395-4a8f-83b4-bad5d1e87f75"></video>

<h3> 2. Memorize(단어 가리기 및 보이기, 외운것 회색 줄, 'Words' 추가 및 제거, Day마다 넘어가기): </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/3d7fbcad-ffc1-4b95-b667-eca6a963ad7f"></video>

<h3> 3. Dictionary, Video, Grammarly </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/e4563ebe-ffd9-4ab3-bbe7-d6fc25abea2d"></video>

<h3> 4. 스플래시 스크린, 로그인, 로그아웃, google,github,facebook로 로그인: </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/d1d776a1-d0a2-4a51-b270-38ae52afda64"></video>

<h3> ---- 아이패드 프로로 촬영 (IOS) ---- </h3>
<h3> 5.  </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/212d095f-c5f5-409a-a768-8c10dd10173c"></video>
