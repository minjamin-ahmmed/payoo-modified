document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault()

    const cashOutAmount = getInputValueById('cash-out-amount');
    const cashOutPin = getInputValueById('cash-out-pin');

    if(cashOutPin === 1234){
        let balance = getTextValueByID('balance')
        let newBalance = balance - cashOutAmount;

        document.getElementById('balance').innerText = newBalance;  

        document.getElementById('cash-out-pin').value = ''
        document.getElementById('cash-out-amount').value = ''


    }else{
    alert("❌ Wrong Pin Number")
}

    
})