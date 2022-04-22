# .....

**For Example** :joy:.
| All Results | Results By Keyword |

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

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