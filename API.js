const fetch = require('node-fetch');

async function fetchPosts() {
    console.log("Fetching posts from API...");
    const url = "https://jsonplaceholder.typicode.com/posts";
    try{
        // use await to wait for the network request to complete
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // use await for the response body to be passed as JSON
        const posts = await response.json();

        console.log("Sucessfully fetched posts");
        // log the titles of the first post
        posts.slice(0, 5).forEach(post => {
            console.log(`${post.title}`)
        });
    }
    catch(error){
        // this will catch both newtwork and HTTP errors
        console.error("failed to fetch posts", error);
    }
}
fetchPosts();