# React開發


## 專案安裝與下載
```shell=
git clone https://github.com/kimlin20011/React-SPA-design.git
npm install
yarn start
```


## 開發環境
* 安裝react 快速建制工具
```
npm install create-react-app
```
* 建立react 專案
```
create-react-app hello-react-app
```

* 啓動開發環境
```
cd hello-react-app
npm start
```

## 認識react
* js-DOM屬性
* css-DOM樣式
* html
* 底層：DOM
* CDD 設計概念
    * component driven development
* 透過JSX實現虛擬DOM tree


## ECMAScript介紹
* var ：函數範圍
* let：區塊範圍
* const : 常數 - 與let效能沒有差異，但有語法上的意義
* 樣板字串：``
* 短路求值
    * 可以回傳真的或假的值，或後面的函數
* 結構賦值
* pollyfill
    * 填充技術
    * 有些瀏覽器不支援ES6
* babel工具
    * 講程式碼翻譯成另外一種程式碼
* webpack工具
    * 將程式碼打包
    * 開發程式下的打包與發布的打包不同
* 上述工具都已經設定在create-react-app裡面了


## React
* JSX
    * javascrpit能夠使用XML的語法
    * 讓開發中能夠輕易描述元件的長相
* 屬性、狀態
* 建構式
* 物件即將載入
* 繪製
* 物件已載入

## 012
* 不能以index當作key


## 013開始實戰
* 到2分49～
* 在react src資料夾中新增components資料夾
    * 在components資料夾中新增title.js物件
* 要共用的資料應該要放在元件上層/用屬性state傳遞

## 014

![](https://i.imgur.com/jRpIKHL.png)

* 下載

![](https://i.imgur.com/3y8Gznf.png)

* 在vscode打`rcc` + tab可以直接印出component段程式碼

* 在vscode打`rpc` + tab可以直接印出purecomponent段程式碼

* 直接打`imp` + tab 可以輸出import 檔案的程式碼

* 繼承的class都要有構造函式
    * constructor
* 傳屬性：上層用state傳給下層
* 陣列可以用map的方法
* map可以迭代整個整列
    * 透過函式內回傳的值組成心得陣列
* react的list render後必須要給key
* 14:53
* 傳遞陣列，用state
* createTodo
    * 每當執行的時候把傳進來的東西他當作參數(text)
    * 讓下層組件接受上層組件傳的東西
    * todos: [...this.state.todos, text] //展開運算符
![](https://i.imgur.com/HZAGg9i.png)
* 使用bind寫 
    * 將宣告完的function重新包裹並宣告
    * 使用套件的`bnd`關鍵字
* event.keyCode
    * enter事件 => input要等於13
* 使用array filter
    * 迭代整個陣列並比對

![](https://i.imgur.com/7Gh9CMM.png)

* 不要讓人家在你的github專案中看到react 送你的logo.svg等等


## 015 React與樣式
* css 使用方式
    * 行內樣式
    * 外部檔案
* css前置處理器
    * Stylus、Less或是Sass
    * 問題：檔案大小
* 以畫面元件驅動開發 
```shell=
npm install --save styled-components
```

```javascript=
import styled from 'styled-components';
const Clickable = styled.span  
cursor: pointer;
```

* 使用`styled-components`中的`styled` , `{keyframes }`
    * keyframes為動畫

* 響應式網頁設計(RWD)
    * `@media `
    * css中，透過不同的螢幕長寬來達到不同的效果

```
@media (max-width: 700px) {
  background: palevioletred;
}
```
###### tags: `課程筆記`