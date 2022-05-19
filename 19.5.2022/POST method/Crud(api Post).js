fetch("https://jsonplaceholder.typicode.com/posts",
{
    // Adding method type
    method: "POST",
     
    // Contents to send
    body: JSON.stringify({
        title: "gugu",
        body: "bar",
        userId: 1
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results
.then(json => console.log(json));


// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function()
// {
//     if (xhr.readyState === 4)
//     {
//         if (xhr.status === 200)
//         {
//             dummy = JSON.parse(xhr.response);
//             console.log(xhr.response);
//         } else
//             {
//                 console.log("error")
//             }
        
//     }
// }
// xhr.open("GET", apiUrl);
// xhr.send();