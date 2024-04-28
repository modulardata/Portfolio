// write your function here
const myFriendHasApprovedMyPosition = false;

let dataLoader = new Promise(function(resolve, reject) {
  if (myFriendHasApprovedMyPosition){
    resolve("Hooray! Now I'm a true programmer!");
  } else {
    // reject(new Error("Whoops! Have to study more =("));
      console.log('An error occurred');
 }
});
