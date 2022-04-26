function f()
{

    const element = document.getElementsByTagName("p");

    document.getElementById("paragraph").innerHTML = 'First paragraph (index 0) is:' + element[0].innerHTML;

    const element_y = document.getElementsByClassName("gugu");

    document.getElementById("paragraph2").innerHTML = 'Second paragraph (index 0) with class="gugu" is:' + element_y[0].innerHTML;
}
