function palindromeCheck() {
    // get the id
    let userInput = document.getElementById("user-id").value;
    // split the string
    let splitMethod = userInput.split("");
    // Reverse the string
    let reverseMethod = splitMethod.reverse();
    // join the string
    let joinMethod = reverseMethod.join("");
    // condition
    if (userInput === "") {
        alert("invalid")
    } if (joinMethod === userInput) {
        let newid = document.getElementById("check-input").innerText = userInput + " Is palindrome";
    } else {
        let newid = document.getElementById("check-input").innerText = userInput + " Is not palindrome";
    }
    // 
    // console.log(userInput, splitMethod, reverseMethod, joinMethod);
}
