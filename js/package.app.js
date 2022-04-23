
class Divider {

    whistle = function (error_code) {
        import ('./error_app.js').then ( module => {

        // console.log(new module.Error_App)
        var init = new module.Error_App;

        // init.not_found();
            error_code(init.Not_Found());
        });
    }

    Not_Found_404 = function () {
        this.whistle((C) => {
        
            document.body.innerHTML = C;
        });
    }

}
// let data = new Divider
// data.Not_Found_404();

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

                    // console.log(this.Not_Found_404());
                    this.Not_Found_404();
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