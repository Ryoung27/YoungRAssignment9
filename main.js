/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

//Crete an async function
async function getAllPosts(){
    //Make a fetch call to the api.
    return await fetch('https://jsonplaceholder.typicode.com/posts')
    //Return the response after converting to json object.
    .then((response) => response.json());
}

//console.log(await getAllPosts());

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

//Crete an async function
async function getAllUsers(){
    //Make a fetch call to the api.
    return await fetch('https://jsonplaceholder.typicode.com/users')
    //Return the response after converting to json object.
    .then((response) => response.json());
}


// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

async function getComments(postID){
    //Make a fetch call to the api.
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    //Return the response after converting to json object.
    .then((response) => response.json());
}

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.

async function getUser(userID){
    //Make a fetch call to the api.
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`)
    //Return the response after converting to json object.
    .then((response) => response.json());
}

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

async function getTodosForUser(userID){
    //Make a fetch call to the api.
    return await fetch(`https://jsonplaceholder.typicode.com/users/${userID}/todos`)
    //Return the response after converting to json object.
    .then((response) => response.json());
}