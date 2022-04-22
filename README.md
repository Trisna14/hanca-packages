# hutAPI

## Contoh sederhana penggunaan function

```java

var init = new Pen;

var REQUEST = {
   
    URL_API     : 'https://.....',

    HTTP_Request    : 'GET'      // type Request

}

init.caller(REQUEST,(API) => { 
    
    console.log(JSON.parse(API));
    
});

init.caller({},(API) => { console.log(API); });

```