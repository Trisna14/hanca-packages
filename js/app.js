class App {
    
    warmup = (URL, success) => {

        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
    
                    success(JSON.parse(xhr.response));
                }
            }
        }
    
        xhr.open('GET',URL, true);
        xhr.send();

    }

}

export class Pen extends App {

    caller = function (URL) {

        console.log(URL);

        // const KEY = (URL.in_key.length > 0 && URL.middle_key.length > 0) ? URL.middle_key+URL.in_key : '';
        // const ID = (URL.in_id.length > 0 && URL.middle_id.length > 0) ? URL.middle_id+URL.in_id : '';
        // const PART = (URL.in_part.length > 0 && URL.middle_part.length > 0) ? URL.middle_part+URL.in_part : '';

        // console.log(PART);

        // console.log(URL.in_url+URL.middle_key+URL.in_key+URL.middle_id+URL.in_id+URL.middle_part+URL.in_part);
        // const FINAL_URL = URL.in_url+KEY+ID+PART;
        // this.warmup (

        //     FINAL_URL
        //     , 
        //     (API) => {
            
        //         console.log(API);
                
        //         // templates
        //         const templates = `<div class="youtube_channel">
        //                                 <div class="thumb">
        //                                     <img src="" alt="">
        //                                 </div>
        //                                 <div class="channel_data">
        //                                     <ul>
        //                                         <li>Nama Channel : ${API.items[0].snippet.title}</li>
        //                                         <li>Deskripsi Channel : ${API.items[0].snippet.description}</li>
        //                                         <li>ID Channel : ${API.items[0].id}</li>
        //                                     </ul>
        //                                 </div>
        //                             </div>`;

        //         document.getElementsByClassName('call_youtube')[0].innerHTML = templates;
        //     }
            
        // );
    }

}