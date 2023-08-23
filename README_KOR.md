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
  
- Hard Part and Solution :
1. Whlile using firebase with React Native, I realize the way to handle the OAuth for login is totally different from creating web site with regular React. so I've researched hard to work it out in the middle of project, and after all I solved it and applied these in my app
2. Whenever I try to delete "Day", sometime it worked well but sometime an error happened, but It turned out that whenever the data is not ready in async and I try to delete, the error came out. so in order to buy time, I set datas to delete even from 'home' page and deliver it to 'delete Day' modal thru 'Context API'
3. While I was implementing 'video' and 'Grammar' part, I found it hard because The APIs that I used for these parts of website are only for Website not for Application, so I replaced these with WebView
4. Creating this app, I faced so many difference between Android and Ios, There are something not available in certain OS or Although both are available, but the scale, degree and range of it are so different. so I did cross-browsing comparing these two OS to apply better solutions and UI for each OS.

- Things To Fix or Improve (CI/CD) : Funtionality for word to be edited, introducing Swr or React query, optimization for Images, shortening the codes in 'AuthContext'

- Login Must ? : Yes (Sign-up or Oauth)
- Name why : "ABC" is begining of Alphabet but that sometimes indicate begining of English study so I named it MYabc

- Comment language : Korean

- Date of creation : Jul 27th ~ Aug 21st 2023
- Date of debugging : Aug 21st ~ Aug 23rd 2023  (clean code, fix error, comment)

# Functions
- Splash Screen
- Responsive App
- Login, Logout, Signup
- Login with Google, GitHub, FaceBook (Oauth)
- Navigation Tab bar
- Carousel
- Linking to Web Version
- PlaceHolder Loading (despite no any data)
- Add and Remove 'Days' (to create vocabulary in a day)
- Add and Remove 'Words'
- Hide and Show 'Words' (to memorize vocabulary)
- Gray row (When memorized words)
- Move link day to day
- Eng/Eng Dictionary (Dictionary API)
- Web View (Video, Grammar)
- Save word watching video
- Move button's location with touch

# Sample pictures

- Home
![Home](https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/820c02fd-fa96-4fdf-be75-729b848adb4b)

- Memorize
![Memorize](https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/e15b3b4f-25db-4983-85b4-9f477aa20303)
  
- Dictionary

- Video
  
- Grammar

- Login
![Login](https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/9bd7d089-532c-49b5-bad5-f32775424e04)


# Sample videos
<h3> ---- with Galaxy 23 (Android) ---- </h3>

<h3> 1. Home, Memorize(Add and Remove 'Days', Add 'Words'): </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/e085283b-0395-4a8f-83b4-bad5d1e87f75"></video>

<h3> 2. Memorize(Hide and Show Words, Gray row, Add and Remove 'Words', Move link day to day): </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/3d7fbcad-ffc1-4b95-b667-eca6a963ad7f"></video>

<h3> 3. Dictionary, Video, Grammarly </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/e4563ebe-ffd9-4ab3-bbe7-d6fc25abea2d"></video>

<h3> 4. Splash Screen, Login, Logout, login with google,github,facebook: </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/d1d776a1-d0a2-4a51-b270-38ae52afda64"></video>

<h3> ---- with Ipad Pro (IOS) ---- </h3>
<h3> 5.  </h3>
<video src="https://github.com/johnpark144/MYabc_project--ReactNative/assets/106279616/212d095f-c5f5-409a-a768-8c10dd10173c"></video>
