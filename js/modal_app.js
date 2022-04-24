export class Modal_App {

    call_modal = function (REQUEST,source) {

        console.log(REQUEST);

        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = () => {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
                    
                    // console.log(xhr.responseText);
                    source(xhr.responseText);
                }
            }
        }
    
        xhr.open('GET',REQUEST, true);
        xhr.send();
    }

}