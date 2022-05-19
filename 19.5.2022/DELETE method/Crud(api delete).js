fetch("https://jsonplaceholder.typicode.com/todos/1",
{
    // Adding method type
    method: "DELETE",
     headers:{'content-type': 'application/json'},
})
 
// Converting to JSON
.then(response => response.json())
 
//console
.then(json => console.log(json));