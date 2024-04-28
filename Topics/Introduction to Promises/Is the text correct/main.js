const isCorrectText = true;
// write your function here

let checkingText = new Promise(function (resolve) {
    if (isCorrectText) {
        resolve("Your text is correct");
    }
});
