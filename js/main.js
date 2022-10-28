let newValue = document.createElement('h4');
let output = 0;

function amountCurrency() {

    let input = document.querySelector('#input');
    let inputValue = Number(input.value);
    let btnCurrency = document.querySelectorAll('.exchange__button');
    for (let elem of btnCurrency) {
        elem.addEventListener('click', () => {
            exchangeRate(elem);
        })
        
        let rateCurrency = elem.getAttribute('data-rate');
        let exchange = document.querySelector('.exchange');
    
        exchange.append(newValue);
        newValue.innerHTML = `You can buy: ${output}`;
    
        function exchangeRate(elem){
    
            output = Math.floor(inputValue / rateCurrency);
            newValue.replaceWith(newValue);
            newValue.innerHTML = `You can buy: ${output} ${elem.textContent}`;
        }
    }
}

amountCurrency();
