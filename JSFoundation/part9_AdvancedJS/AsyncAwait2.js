function fetchPostData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Posts fetched successfully!");
        },1000);
    });
}

function fetchCommentsData() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("Comments fetched successfully!");
        },2000)
    })
}

function fetchLikesdata() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Likes fetched successfully!");
        },3000)
    })
}

function fetchBlogData() {
    return new Promise((resolve,reject)=>{
        reject("BlogData fetching failed...!!!")
    })
}

async function fetchData() {
    try{
        const [PostData,CommentsData,LikesData] = await Promise.all([fetchPostData(),fetchCommentsData(),fetchLikesdata()]);
        console.log(PostData);
        console.log(CommentsData);
        console.log(LikesData);
    }
    catch(error){
        console.log("Error fetching data: ",error);
    }

    try{
        const BlogData = await fetchBlogData();
        console.log(BlogData);
    }
    catch(error)
    {
        console.log("Error fetching data: ",error)
    }
}

// fetchData();


async function trialFn() {
    try{
        let trialData = await new Promise((resolve,reject)=>{
            // resolve("Trial data fetched successfully");
            reject("Data couldn't be fetched")
        })
        console.log(trialData);
    }
    catch(error){
        console.log(error);
    }
}
trialFn();