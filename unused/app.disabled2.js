class Combined_Url {

    // keys      &   values
    in_url      =   'https://www.googleapis.com/youtube/v3/channels?'
    in_key      =   'AIzaSyCX2FZdrCPbQ24t8Ah6eTPF69xXOPFgmIM'
    in_id       =   'UCJFeg4cV7kM4QsECKcx_eEA'
    in_part     =   'snippet,status'

    // second key
    middle_key  =   'key='
    middle_id   =   '&id='
    middle_part =   '&part='

    combined_uri    = function () {

        const final_key = (this.in_key.length > 0) ? this.middle_key+this.in_key : '';
        const final_id = (this.in_id.length > 0) ? this.middle_id+this.in_id : '';
        const final_part = (this.in_part.length > 0) ? this.middle_part+this.in_part : '';

        return this.in_url+final_key+final_id+final_part;
    }

}

class App extends Combined_Url {

    call_be = function () {

        var results;

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {

            // console.log(this);

            if (this.readyState == 4 && this.status == 200 ) {

                // const results_api = Object.entries(JSON.parse(this.responseText));
                const results_api = this.responseText;

                // return results_api;
                // console.log(results_api);
                // results_api.forEach(e => {
                //     results.push(e);
                // });
                // console.log(results.push(results_api[0]));
                results = results_api;

                // this.results.push('satu','dua');

            }

        }


        xhr.open("GET", this.combined_uri(), true);
        xhr.send();

        // return results;
        console.log(JSON.parse(results));

    }

    callback = function get_data_class (url, success, error) {

        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
    
                    success(xhr.response);
                } else if (xhr.status === 404) {
                    
                    error(xhr.status);
                }
            }
        }
    
        xhr.open('GET',url, true);
        xhr.send();
    
    }


}

export class Call_Api extends App {

   call = function () {
        // return this.call_be();
        return this.callback(this.combined_uri(),
        (results) => { 
            // console.log(JSON.parse(results));
            var results_api = JSON.parse(results);
            console.log(results_api.items[0].snippet.title);

            // templates
            const templates = `<div class="youtube_channel">
                                    <div class="thumb">
                                        <img src="" alt="">
                                    </div>
                                    <div class="channel_data">
                                        <ul>
                                            <li>Nama Channel : ${results_api.items[0].snippet.title}</li>
                                            <li>Deskripsi Channel : </li>
                                            <li>ID Channel : </li>
                                        </ul>
                                    </div>
                                </div>`;

            document.getElementsByClassName('call_youtube')[0].innerHTML = templates;
        }, 
        (e) => {console.log(e)}
    );
        // return this.coba();
    //    console.log(data);

   }

}