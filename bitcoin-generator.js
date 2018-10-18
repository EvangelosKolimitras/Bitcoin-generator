const xhr = new XMLHttpRequest();

const disc = document.querySelector('#disclaimer');
const bitcoin_current_value = document.querySelector('#bitcoin_value');

const crnc = document.querySelector("#currencies");

let euro = document.querySelectorAll(".currency")[0];
let dollar = document.querySelectorAll(".currency")[1];
let pound = document.querySelectorAll(".currency")[2];

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);

        const disclaimer = data.disclaimer;
        disc.innerHTML = disclaimer;

        const e = data.bpi.EUR;
        const d = data.bpi.USD;
        const p = data.bpi.GBP;
        euro.innerHTML =  e.code;
        dollar.innerHTML = d.code;
        pound.innerHTML = p.code;
        
        bitcoin_current_value.innerHTML = e.rate + " " + e.symbol;
        
        euro.addEventListener(
            'click',
            () => {
                bitcoin_current_value.innerHTML = e.rate + " " + e.symbol;
            }
        );
        dollar.addEventListener(
            'click',
            () => {
                bitcoin_current_value.innerHTML = d.symbol + " " + d.rate;
            }
        );
        pound.addEventListener(
            'click',
            () => {
                bitcoin_current_value.innerHTML = p.symbol + " " + p.rate;
            }
        );
    }
}

xhr.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json");
xhr.send();
