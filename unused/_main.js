// import { Pen } from "./app.js";     // import

// var google = new Pen;

// var REQUEST = {
   
//     URL_API     : 'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCX2FZdrCPbQ24t8Ah6eTPF69xXOPFgmIM&id=UCJFeg4cV7kM4QsECKcx_eEA&part=snippet,status',

//     HTTP_Request    : 'GET'      // type Request

// }

// google.caller(REQUEST,(API) => { 
    
//     console.log(JSON.parse(API));
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