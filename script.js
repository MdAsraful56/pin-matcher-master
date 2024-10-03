function Generate(){
    let randomNumber = 1000 + Math.random() * 9000;
    // let floor = Math.floor(1000 + randomNumber); 
    let result = Math.round(randomNumber);
    document.getElementById("generateInput").value = result;
    // console.log(result);
}


function submitFunction(){
    let generateInput = document.getElementById("generateInput").value;
    let Input = document.getElementById("Input").value;
    if (generateInput == Input) {
        document.getElementById("Right").innerText = "✅ Pin Matched... Secret door is opening for you";
        document.getElementById("Wrong").innerText = "";
        // console.log('Right Number')
    }
    else{
        document.getElementById("Wrong").innerText = "❌ Pin Didn't Match, Please try again";
        document.getElementById("Right").innerText = "";
    }
}


function submitClick(){
    document.getElementById("Input").value = "";
    document.getElementById("generateInput").value = "";
}





//     let Right = document.getElementById("Right").innerText = "";
//     let Wrong = document.getElementById("Wrong").innerText = "";
//     Right.addEventListener('click',hideData);
//     Wrong.addEventListener('click',hideData);
// // document.getElementById("submitClick()")