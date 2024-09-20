function getInputValueById(id){

    let inputValue = Number(document.getElementById(id).value)
    // console.log("From utilities Function")
    return inputValue;
}


function getTextValueByID(id){
    let textValue = Number(document.getElementById(id).innerText)
    // console.log("From utilities Function")
    return textValue;
}

function showHiddenForm(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}