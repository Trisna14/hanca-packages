export class Error_App {

    err404 = function (source) {
        
        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = () => {
    
            if (xhr.readyState === 4) {
                
                if (xhr.status === 200) {
                    
                    // console.log(xhr.responseText);
                    source(xhr.responseText);
                }
            }
        }
    
        xhr.open('GET','./markup/404.html', true);
        xhr.send();
        
    }

}