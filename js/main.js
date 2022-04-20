import { Pen } from "./app.js";     // import

let  google = new Pen;
var REQUEST = {
   
    URL_API     : 'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCX2FZdrCPbQ24t8Ah6eTPF69xXOPFgmIM&id=UCJFeg4cV7kM4QsECKcx_eEA&part=snippet,status',

    HTTP_Request    : 'GET'      // type Request

}

google.caller(REQUEST,(API) => { 
    
    console.log(JSON.parse(API));
});