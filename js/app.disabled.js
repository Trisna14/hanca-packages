App = {

    // keys      &   values
    in_url      :   'https://www.googleapis.com/youtube/v3/channels?',
    in_key      :   'AIzaSyCX2FZdrCPbQ24t8Ah6eTPF69xXOPFgmIM',
    in_id       :   'UCJFeg4cV7kM4QsECKcx_eEA',
    in_part     :   'snippet,status',

    // second key
    middle_key  :   'key=',
    middle_id   :   '&id=',
    middle_part :   '&part=',

    combined_url    : function () {

        const final_key = (this.in_key.length > 0) ? this.middle_key+this.in_key : '';
        const final_id = (this.in_id.length > 0) ? this.middle_id+this.in_id : '';
        const final_part = (this.in_part.length > 0) ? this.middle_part+this.in_part : '';

        return this.in_url+final_key+final_id+final_part;
    },

    call_api    :   function () {

        var xhr = new XMLHttpRequest();

        let door = xhr.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200 ) {

                const results_api = Object.entries(JSON.parse(this.responseText));

                // console.log(results_api[3][1][0].snippet.thumbnails.high.url);

                // return results_api;

                // templates
                const templates = `<div class="youtube_channel">
                                        <div class="thumb">
                                            <img src="${results_api[3][1][0].snippet.thumbnails.high.url}" alt="">
                                        </div>
                                        <div class="channel_data">
                                            <ul>
                                                <li>Nama Channel : ${results_api[3][1][0].snippet.title}</li>
                                                <li>Deskripsi Channel : ${results_api[3][1][0].snippet.description}</li>
                                                <li>ID Channel : ${results_api[3][1][0].id}</li>
                                            </ul>
                                        </div>
                                    </div>`;

                document.getElementsByClassName('call_youtube')[0].innerHTML = templates;

            }

        }

        xhr.open("GET", this.combined_url(), true);
        xhr.send();

        console.log(xhr.onreadystatechange);

    }
    
}

export var App;
