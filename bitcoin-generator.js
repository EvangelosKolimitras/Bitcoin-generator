const p = document.querySelector('#disclaimer');
const bitcoin_current_value = document.querySelector('#bitcoin_value');
const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        const disclaimer = data.disclaimer;
        p.innerHTML = disclaimer;
        console.info(disclaimer);
        const bcv = data.bpi.EUR.rate;
        console.info(bcv);
        bitcoin_current_value.innerHTML = bcv + " " + data.bpi.EUR.code;
        
    }
}

xhr.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json");
xhr.send();