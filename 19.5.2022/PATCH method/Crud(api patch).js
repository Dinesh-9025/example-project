fetch("https://jsonplaceholder.typicode.com/todos/1",
{
    // Adding method type
    method: "PATCH",
    headers:{'content-type': 'application/json'},
    // Contents to send
    body: JSON.stringify({

        title:"hello fetch API",
        completed : true
    }),
})
 
// Converting
.then(response => response.json())
 
.then(json => console.log(json));