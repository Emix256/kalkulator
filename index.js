let x="";
let y="";
let z="";
let v="";
let kolejne=false;

document.getElementById("reset").onclick = function(){
    x=""
    y=""
    z=""
    v=""
    kolejne=false
    document.getElementById("liczba").innerHTML = "0";
    document.getElementById("znak").innerHTML = y;
    document.getElementById("liczba2").innerHTML = z;
    document.getElementById("rownanie").innerHTML = "";
    document.getElementById("wynik").innerHTML = "";
    }

document.getElementById("rowna").onclick = function(){
    if(z!="")
    {
    x=Number(x)
    z=Number(z)
    document.getElementById("rownanie").innerHTML = "=";
    }
    if(y=="+" && z!="")
    {
    v=x+z
    document.getElementById("wynik").innerHTML = v;
    }

    if(y=="-" && z!="")
    {
    v=x-z
    document.getElementById("wynik").innerHTML = v;
    }

    if(y=="×" && z!="")
    {
    v=x*z
    document.getElementById("wynik").innerHTML = v;
    }

    if(y=="÷" && z!="")
    {
    v=x/z
    document.getElementById("wynik").innerHTML = v;
    }
    if(y=="×" && z=="0")
    {
    document.getElementById("wynik").innerHTML = 0;
    }
    if(y=="÷" && z=="0")
    {
    document.getElementById("wynik").innerHTML = "error";
    }
    if(y=="+" && z=="0" || y=="-" && z=="0")
    {
    document.getElementById("wynik").innerHTML = x;
    }
}
    

document.getElementById("zero").onclick = function(){
    if(kolejne==true && z!="0")
    {
    z+="0"
    document.getElementById("liczba2").innerHTML = z;
    }
    if(kolejno==true && x!=0)
    {
    x+="0"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("jeden").onclick = function(){
    if(kolejne==true)
    {
    z+="1"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="1"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("dwa").onclick = function(){
    if(kolejne==true)
    {
    z+="2"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="2"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("trzy").onclick = function(){
    if(kolejne==true)
    {
    z+="3"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="3"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("cztery").onclick = function(){
    if(kolejne==true)
    {
    z+="4"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="4"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("piec").onclick = function(){
    if(kolejne==true)
    {
    z+="5"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="5"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("szesc").onclick = function(){
    if(kolejne==true)
    {
    z+="6"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="6"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("siedem").onclick = function(){
    if(kolejne==true)
    {
    z+="7"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="7"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("osiem").onclick = function(){
    if(kolejne==true)
    {
    z+="8"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="8"
    document.getElementById("liczba").innerHTML = x;
    }
}
document.getElementById("dziewiec").onclick = function(){
    if(kolejne==true)
    {
    z+="9"
    document.getElementById("liczba2").innerHTML = z;
    }
    else
    {
    x+="9"
    document.getElementById("liczba").innerHTML = x;
    }
} 
document.getElementById("plus").onclick =  function(){
    y="+"
    kolejne=true
    document.getElementById("znak").innerHTML = y;
}
document.getElementById("minus").onclick = function(){
    y="-"
    kolejne=true
    document.getElementById("znak").innerHTML = y;
}
document.getElementById("mnozenie").onclick = function(){
    y="×"
    kolejne=true
    document.getElementById("znak").innerHTML = y;
}
document.getElementById("dzielenie").onclick = function(){
    y="÷"
    kolejne=true
    document.getElementById("znak").innerHTML = y;
}