function passingExam(myPoints) {
    return new Promise(function (resolve, reject) {
        if (myPoints >= 90) {
            resolve("You are enrolled!");
        } else {
            reject("Sorry, you haven't passed the Math exam");
        }
    });
}
