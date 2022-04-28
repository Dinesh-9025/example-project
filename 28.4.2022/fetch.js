const apiurl = "https://jsonplaceholder.typicode.com/users";

async function fetchdata(){
    try {
        const response = await fetch(apiurl);


        if (response.status !== 200) throw new error ("not okie");


            const data = await response.json();
            console.log(data);
        
        } catch (err) {
        console.log(err.message);
        }
}

fetchdata();


/*
fetch(apiurl)
    .then(function (res){
        if (res.status === 200)
            return res.json();
        else throw error ("something wrong");   
    })
    .then(function(){
        console.log(data);
    })
    .catch(function(err){
        console.log(err.message);
    });
*/
/*
const xhr = new XMLHttpRequest();

xhr.onload = function (){
    if (xhr.status === 200){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }else{
        console.log("SOMETHING WRONG");
    }
};

xhr.open("GET", apiurl);
xhr.send();
*/