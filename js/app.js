function getPin() {
    const pin = Math.round(Math.random() * 10000);
    // for getting the length of pin
    const pinString = pin + '';
    //condition
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // if it's doesn't find 4 digit then again call 
        return getPin();
    }
}

function generatePin(){
    let pin = getPin()
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
}


document.getElementById('key-pad').addEventListener('click',function(event){
   const selectedNumber = event.target.innerText;
   const calcInput = document.getElementById('typed-numbers');

    if(isNaN(selectedNumber)){
        if(selectedNumber == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber  = calcInput.value;
        calcInput.value = previousNumber + selectedNumber;
    }
})
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if(pin == typedNumbers){
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}