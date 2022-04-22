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

    //      |||||   |||||   |||||
    pretend = function () {
        console.log('pretend!!');
    }

}

class Pen extends App {

    // full data
    caller = function (REQUEST,success) {

        if (typeof REQUEST == 'object') {
            
            var FINAL_URL = REQUEST.URL_API;

        } else {

            var FINAL_URL = REQUEST;
        }
        
        // console.log(this);
        
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

    // 
    // BY SEARCH
    caller_by = function (REQUEST,success) {

        // console.log(REQUEST.ID_INPUT);
        // console.log(SEARCH_ID);

        const btn = document.getElementById(REQUEST.ID_BUTTON);
        btn.onclick = () => {
            
            var SEARCH_ID = document.getElementById(REQUEST.ID_INPUT).value;

            // console.log(this);
    
            if (SEARCH_ID.length < 0) {
    
                var FINAL_URL = REQUEST.URL_API+0;
            } else {
    
                var FINAL_URL = REQUEST.URL_API+SEARCH_ID;
            }
    
            // console.log(FINAL_URL);
    
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

}