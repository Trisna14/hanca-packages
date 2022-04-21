// console.log(new Pen)

// var google = new Pen;

// var REQUEST = {
   
//     URL_API     : 'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCX2FZdrCPbQ24t8Ah6eTPF69xXOPFgmIM&id=UCJFeg4cV7kM4QsECKcx_eEA&part=snippet,status',

//     HTTP_Request    : 'GET'      // type Request

// }

// google.caller(REQUEST,(API) => { 
    
//     // console.log(JSON.parse(API));
//     const GOOGLE_API = JSON.parse(API)
    
//     // templates
//     const templates = `<div class="youtube_channel">
//                             <div class="thumb">
//                                 <img src="" alt="">
//                             </div>
//                             <div class="channel_data">
//                                 <ul>
//                                     <li>Nama Channel : ${GOOGLE_API.items[0].snippet.title}</li>
//                                     <li>Deskripsi Channel : ${GOOGLE_API.items[0].snippet.description}</li>
//                                     <li>ID Channel : ${GOOGLE_API.items[0].id}</li>
//                                 </ul>
//                             </div>
//                         </div>`;

//     document.getElementsByClassName('call_youtube')[0].innerHTML = templates;
// });

let omdb = new Pen;

const knob = document.getElementById('by_search');


knob.addEventListener ('click', function () {

    var SEARCH_ID = document.getElementById('input_search').value;

    var REQUEST = {

        URL_API : 'https://www.omdbapi.com?apikey=a97702a5&s=',

        HTTP_Request    : 'GET' 

    }

    omdb.caller_by(SEARCH_ID,REQUEST, (API) => {console.log(JSON.parse(API))});

});
