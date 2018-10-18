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
                if(euro.className === 'currency') {
                   euro.className += ' active';
                }else {
                    euro.classList.remove('active');
                    euro.className === ' currency';
                }
            }
        );
        
        dollar.addEventListener(
            'click',
            () => {
                bitcoin_current_value.innerHTML = d.symbol + " " + d.rate;
                if(dollar.className === 'currency') {
                    dollar.className += ' active';
                 }else {
                     dollar.classList.remove('active');
                     dollar.className === ' currency';
                 }
            }
        );
        
        pound.addEventListener(
            'click',
            () => {
                bitcoin_current_value.innerHTML = p.symbol + " " + p.rate;
                if(pound.className === 'currency') {
                    pound.className += ' active';
                 }else {
                     pound.classList.remove('active');
                     pound.className === ' currency';
                 }
            }
        );
        
    }
}

xhr.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json");
xhr.send();
