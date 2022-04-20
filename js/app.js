class App {
    
    warmup = (REQUEST,URL, source) => {

        // console.log(REQUEST);

        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
    
                    source(xhr.response);
                }
            }
        }
    
        xhr.open(REQUEST,URL, true);
        xhr.send();

    }

}

export class Pen extends App {

    caller = function (REQUEST,success) {

        if (typeof REQUEST == 'object') {
            
            var FINAL_URL = REQUEST.URL_API;

        } else {

            var FINAL_URL = REQUEST;
        }
        
        
        this.warmup (
            REQUEST.HTTP_Request
            ,
            FINAL_URL
            , 
            (API) => {
            
                // console.log(API);
                success( API);
            }
            
        );
    }

}