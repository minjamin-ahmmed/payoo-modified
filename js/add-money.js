document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    let amount = getInputValueById('amount')
    console.log(amount)

    let pinNumber = getInputValueById('pin-number')

    if(pinNumber === 1234){

        let totalBalance = getTextValueByID('balance')
        let newBalance = totalBalance + amount;

        document.getElementById('balance').innerText = newBalance;

        document.getElementById('pin-number').value = ''
        document.getElementById('amount').value = ''


    }else{
        alert("❌ Wrong Pin Number")
    }


})