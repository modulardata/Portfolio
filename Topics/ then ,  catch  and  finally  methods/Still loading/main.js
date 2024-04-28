function loader(value) {
    const promise = new Promise(function (resolve, reject) {
        if (value === "true") {
            resolve("The info has loaded.");
        } else {
            reject("Please, try again later.");
        }
    });

    promise.then(function (result) {
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("Hello, Mr. Smith!");
    });

    return promise;
}
