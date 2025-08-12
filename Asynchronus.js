try{
    const jsonData = '{"name": "alice", "age": 25}' // good JSON
    const user = JSON.parse(jsonData);
    console.log(`User data: ${user.name}`)

    const badJson = '{"name": "Bob}' // there is a missing quote
    // the next line will fail beacause this is a bad JSON
    const bad = JSON.parse(badJson);
    console.log(bad.name);
}
catch(error){
    console.error("an error occured! Details: ", error.message);
}
console.log("The program continues running")
