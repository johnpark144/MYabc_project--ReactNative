---------- <a href="README_KOR.md">한글로 보기(KOR)</a> ----------
# MYabc_project--ReactNative

- Backend (firebase for me) : https://console.firebase.google.com/project/myabc-97f03/overview?hl=ko

- Creater : Yeonghwan Park (John Park)
- Main Tools : React Native (Expo)
- CSS : Nativewind(Tailwind Css)
- Sub Tools : TypeScript, Context API, Dictionary API, FireBase, PhotoShop
- Router : Expo Router (Folder-based routing)
- Idea or Not : Idea 85%, Clone 15%
- Explantion :
  This is English study app named 'MYabc' that I built to study with vocablary to memrize, dictionary, video and grammar.
- Reason of creation :
  When I came to states for the first time, I found it hard to do everything due to language barrier.
  I remember how my English get improved going through many trials and errors, that is studying context of frequent word and sentences,
  and also checking meaning of words in English was helpfull a lot to feel the true meaning,
  that's why I used to use Eng/Eng Dictionary and Youglish site in bookmark in actuality.
  retrospecting that time, I came to think that would be good to develop the website or application for English study based on my experience.
  and put them into practice. and I already created 'MYabc' website, so I also created this app like the website
  
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
- Memorize
- Dictionary
- Video
- Grammar
- Login

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
