# hanca.packages
#### this is a semi-finished program that I use to help work on the website on the front end.

**what's there**
- [x] Fetch data From Rest API
- [x] Ajax By Modal

```html

<link rel="stylesheet" href="css/main.css">
<script type="text/javascript" src="js/package.app.js"></script>

```

**For Example : Fetch Data Form Rest** :joy:.


| All Results |
| :---        |


```javascript

// All Results
var init = new Pen;

var REQUEST_CONFIG = {
   
    URL_API     : 'https://',   // url API

    HTTP_Request    : 'GET'      // type Request

}

init.caller(REQUEST_CONFIG,(API) => { 
    
    console.log(JSON.parse(API));
    
});

```
 | Results By Keyword |
 | :---        |
```javascript

// Results By Keywords
var init = new Pen;

 var REQUEST_CONFIG = {

    URL_API : 'https://',   // url API
        
    HTTP_Request    : 'GET' ,   // type Request

    ID_INPUT    : '',   // ID input
    ID_BUTTON   : ''   // ID button
        
}

init.caller_by(REQUEST_CONFIG, (API) => {console.log(JSON.parse(API))});

```

**For Example : Modal By Ajax** 
<details>
    <summary>Sample Usage Modal</summary>
  <p>

```js

let init = new Modal;
let REQUEST = {
    "URL"   :   "", // Find a URL File
    "BUTTON_ID" :   '' // button id in html 
}
init.crt_modal(REQUEST);

```

</p>
</details>