function hasDownloaded(value) {
    const promise = new Promise(function (allow, reject) {
        if (value === "true") {
            allow("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    });

    promise.then(function (message) {
        console.log(message);
    }).catch(function (message) {
        console.log(message);
    });

    return promise;
}

