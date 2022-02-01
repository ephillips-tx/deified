// get user string
function getValue(){
    // remove prev msg in case of multiple checks
    document.getElementById("alert").classList.remove("invisible");
    //get user string
    let uVal = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = palinCheck(uVal);
    //display out message to screen
    showMessage(returnObj);
}

// check if string is palindrome
function palinCheck(uString){
    //make lower case
    uString = uString.toLowerCase();

    // ** Remove special chars/spaces **
    // Will only return values a through z & 0 through 9
    let regex = /[^a-z0-9]/gi;
    uString = uString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for(let i = uString.length -1; i >= 0; i--){
        revString += uString[i];
    }

    if(revString == uString){
        returnObj.msg = "Well done! You entered a palindrome!";
        document.getElementById("alert").classList.add("alert-success");
    } else {
        returnObj.msg = "Sorry! You didn't enter a palindrome.";
        document.getElementById("alert").classList.remove("alert-success");
        document.getElementById("alert").classList.add("alert-danger");
    }

    returnObj.reversed = revString;

    return returnObj;
}

//display a message to the user
function showMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}