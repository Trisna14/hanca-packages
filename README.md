# Hanca.packages
## hanca.packages is a semi-finished program that I use to help work on the website on the front end.

**For Example** :joy:.

```javascript

<script type="text/javascript" src="js/package.app.js"></script>

```

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

...