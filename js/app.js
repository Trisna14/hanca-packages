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

    caller = function () {

        // keys      &   values
        const in_url      =   'https://www.googleapis.com/youtube/v3/channels?';
        const in_key      =   'AIzaSyCX2FZdrCPbQ24t8Ah6eTPF69xXOPFgmIM';
        const in_id       =   'UCJFeg4cV7kM4QsECKcx_eEA';
        const in_part     =   'snippet,status';

         // second key
        const middle_key  =   'key=';
        const middle_id   =   '&id=';
        const middle_part =   '&part=';

        const final_key = (in_key.length > 0) ? middle_key+in_key : '';
        const final_id = (in_id.length > 0) ? middle_id+in_id : '';
        const final_part = (in_part.length > 0) ? middle_part+in_part : '';

        const URL =  in_url+final_key+final_id+final_part;

        this.warmup (

            URL
            , 
            (API) => {
            
                // console.log(API.items[0].id);
                
                // templates
                const templates = `<div class="youtube_channel">
                                        <div class="thumb">
                                            <img src="" alt="">
                                        </div>
                                        <div class="channel_data">
                                            <ul>
                                                <li>Nama Channel : ${API.items[0].snippet.title}</li>
                                                <li>Deskripsi Channel : ${API.items[0].snippet.description}</li>
                                                <li>ID Channel : ${API.items[0].id}</li>
                                            </ul>
                                        </div>
                                    </div>`;

                document.getElementsByClassName('call_youtube')[0].innerHTML = templates;
            }
            
        );
    }

}