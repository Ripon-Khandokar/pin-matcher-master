
//// Generate Pin Button /////
function generatePin(){
    const randomNumber = Math.random()*9999;
    const randomDigit = Math.round(randomNumber);
    const display = document.getElementById("display").value = randomDigit;
}

//// Generate Calculator Number /////
function cal_Number (number){
    document.getElementById("cal_display").value += number;

}

/// Back-Space Button Event Handler////
function back() {
    var value = document.getElementById("cal_display").value;
    document.getElementById("cal_display").value = value.substr(0, value.length - 1);
}

/// Clear Button Event Handler ////
function deleteAll(){
    document.getElementById("cal_display").value = '';

}

//// Submit Button Event Handler /////
function submit(){
    if(cal_display.value == ''){
        document.getElementById("dont-match").style.display = "block";
        document.getElementById("match").style.display = "none";
        tryNumberValue("try");

    }

    else if(cal_display.value === display.value){
        document.getElementById("match").style.display = "block";
        document.getElementById("dont-match").style.display = "none"

    }

    else{
        document.getElementById("dont-match").style.display = "block"
        document.getElementById("match").style.display = "none";
        tryNumberValue("try");
        

    }

    document.getElementById("display").value = '';
    document.getElementById("cal_display").value = '';

}

//// Try Button Event Handler/////
function tryNumberValue(id){
    let tryNumber = document.getElementById(id);
        let number = parseFloat(tryNumber.innerText);
        number--;
        if(number >= 0){
         document.getElementById("try").innerText = number;
             if(number == 0){
                 document.getElementById("submit").style.display = "none"
             }
        }
}

        
