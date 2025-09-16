function fetchData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success = true; // Simulate success or failure
            if(success) {
                resolve("Request still pending...");
            } else {
                reject("Error fetching data.");
            }
        }, 1000);
    });
}

// fetchData()
//     .then((data)=>{console.log(data);})
//     .catch((error)=>{console.error(error);});


fetchData() // Multiple .then() chaining
    .then((data)=>{
        console.log(data);
        return "Saraswati";
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.error(error);
    })