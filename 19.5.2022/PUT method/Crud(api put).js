fetch("https://jsonplaceholder.typicode.com/todos/5",
{
    // Adding method type
    method: "PUT",
     headers:{'content-type': 'application/json'},
    //content
    body: JSON.stringify({
        userId : 1,
        id:5,
        title:"hello fetch",
        completed : false
    }),
})
 

.then(response => response.json())
 
.then(json => console.log(json));