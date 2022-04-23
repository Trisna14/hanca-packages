
class Divider {

    find_err = function () {
        import ('./error_app.js').then ( module => {

        var init = new module.Error_App;

           init.err404((source) => { 

                document.body.innerHTML = source;
                // console.log(source)
            });
        });
    }


    // ---------------------------- //


}
// let data = new Divider
// data.find_err();

// APP
class App extends Divider{
    
    warmup = (REQUEST,URL, source) => {

        // console.log(REQUEST);

        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = () => {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
    
                    source(xhr.response);

                } else if (xhr.status === 404 ) {

                    this.find_err();
                }
            }
        }
    
        xhr.open(REQUEST,URL, true);
        xhr.send();

    }

    //      |||||   |||||   |||||
    pretend = function () {
        this.error_code;
    }

}

// init =  new App;
// init.pretend();

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

        // console.log(REQUEST);
        const button = document.getElementById(REQUEST.ID_BUTTON);
        button.onclick = () => {
            
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