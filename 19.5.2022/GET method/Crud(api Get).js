const apiurl = "https://jsonplaceholder.typicode.com/users";


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