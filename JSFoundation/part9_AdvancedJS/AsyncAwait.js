function fetchUserData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(
                {
                    name: "John Doe",
                    age: 30,
                    email: "john.doe@example.com"
                }
            )
        }, 1000);
    });
}

// One way to handle promises
fetchUserData()
    .then()
    .catch();

/*
- But if the promise operations are time consuming,it can lead to "callback hell" or "pyramid of doom".
  To avoid this, we can use async/await syntax.
- Callback hell : When we have multiple nested callbacks, making the code hard to read and maintain.
- Pyramid of Doom : When we have multiple nested callbacks, leading to a pyramid-like structure in the code.
*/
async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User Data fetched successfully!");
        console.log("User Data:", userData);
    }
    catch(error){
        console.error("Error fetching user data:", error);
    }
}
getUserData();
// Note : Async functions always return a promise.
// If the function returns a value, the promise will be resolved with that value. 
// If the function throws an error, the promise will be rejected with that error.
