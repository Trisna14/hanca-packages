# hutAPI

* Contoh sederhana penggunaan function

```javascript

var init = new Pen;

var REQUEST_CONFIG = {
   
    URL_API     : 'https://',   // url API

    HTTP_Request    : 'GET'      // type Request

}

init.caller(REQUEST_CONFIG,(API) => { 
    
    console.log(JSON.parse(API));
    
});

```