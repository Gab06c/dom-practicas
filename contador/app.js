// inicializando nuestro contador

let count = 0

let value = document.getElementById('contador')

function increment() {
    value = count++
    document.getElementById('contador').innerHTML = value
}

function decrement() {
    value = count--
    document.getElementById('contador').innerHTML = value
}

/* function incDec() {
    switch (document.getElementsByClassName(.'button-container')){
        case document.getElementsByClassName('btn increase'):
            value = count++;
            document.getElementById('contador').innerHTML = value;
        break;

        case document.getElementsByClassName('btn decrease'):
            value = count--;
            document.getElementById('contador').innerHTML = value;
        break;

        default:
            alert('Por favor, da click en un botón');
        break; 
    }
} */