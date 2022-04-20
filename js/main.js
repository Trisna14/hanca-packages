// import { Call_Api } from "./app.js";    // import file app.js
// let initialization_call_api = new Call_Api;

// console.log('start');
// initialization_call_api.call();
// console.log('end');
// import { App } from "./app.disabled.js";
// App.call_api();

import { Pen } from "./app.js";
let init_Pen = new Pen;

var URL = {
   // keys      &   values
    in_url      :   'https://www.googleapis.com/youtube/v3/channels?',
    in_key      :   'AIzaSyCX2FZdrCPbQ24t8Ah6eTPF69xXOPFgmIM',
    in_id       :   'UCJFeg4cV7kM4QsECKcx_eEA',
    in_part     :   'snippet,status',

    // second key
    middle_key  :   'key=',
    middle_id   :   '&id=',
    middle_part :   '&part=',

}

init_Pen.caller(URL);

let init_Pen2 = new Pen;
init_Pen2.caller({in_url : 'json/fake.json'});