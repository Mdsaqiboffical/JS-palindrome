function palindromeCheck() {
    let userInput = document.getElementById("user-id").value;
    let splitMethod = userInput.split("");
    let reverseMethod = splitMethod.reverse();
    let joinMethod = reverseMethod.join("");

    if (userInput === "") {
        alert("invalid")
    } if (joinMethod === userInput) {
        // alert(userInput + " Is Palindrome")
        let newid = document.getElementById("check-input").innerText = userInput + " Is palindrome";
    } else {
        // alert(userInput + " Is Not Palindrome")
        let newid = document.getElementById("check-input").innerText = userInput + " Is not palindrome";
        // userInput2 + " is not palindrome";
    }
    // console.log(userInput, splitMethod, reverseMethod, joinMethod);
}
