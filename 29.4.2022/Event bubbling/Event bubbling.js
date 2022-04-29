//let p= document.querySelector("#parent");
//let s = document.querySelector("#child");
document.getElementById('parent')

    .addEventListener('click', 
            function () {
                alert('parent Clicked!');
            });
document.getElementById('child')

    .addEventListener('click',
            function () {
                alert('child clicked!');
            });            
