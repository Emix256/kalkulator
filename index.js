let x="";
let y="";
let li="";
let z="";
let v="";
let p="";
let g="";
let dot=false;
let doto=false;
let pj=false;
let pd=false;
let kolejne=false;
let kolej=false;
let klj=false;
let nast=false;
let nstp=false;

setInterval(linia, 2000);

function linia(){
    setTimeout(function(){
        li+="|"
        dodajdoid("po", li)
    }, 1000); 
    li=""
    dodajdoid("po", li)
}

document.getElementById("reset").onclick = function(){
    x=""
    y=""
    z=""
    v=""
    p=""
    g=""
    dot=false;
    doto=false;
    pj=false
    pd=false
    kolejne=false
    kolej=false
    klj=false
    nast=false
    nstp=false
    dodajdoid("liczba", "0")
    dodajdoid("znak", y)
    dodajdoid("liczba2", z)
    dodajdoid("rownanie", "")
    dodajdoid("wynik", "")
    dodajdoid("prz", "")
    dodajdoid("prz2", "")
    dodajdoid("gora", "")
    dodajdoid("gora2", "")
}

document.getElementById("rowna").onclick = function(){
    if(kolejne==true || z!="")
    {
    x=Number(x)
    z=Number(z)
    p=Number(p)
    g=Number(g)
    dodajdoid("rownanie", "=")
    }
    if(pj==true)
    {
    pj=false
    x=Math.pow(x, p)
    }
    if(pd==true)
    {
    pd=null
    z=Math.pow(z, g)
    }
    if(kolej==true && nast==false)
    {
    nast=true
    x=Number(x)
    dodajdoid("rowananie", "=")
    dodajdoid("wynik", x)
    }
    if(klj==true && nstp==false)
    {
    nstp=true
    z=Number(z)
    dodajdoid("wynik", z)
    }
    if(y=="+" && z!="")
    {
    v=x+z
    dodajdoid("wynik", v)
    }
    if(y=="-" && z!="")
    {
    v=x-z
    dodajdoid("wynik", v)
    }
    if(y=="×" && z!="")
    {
    v=x*z
    dodajdoid("wynik", v)
    }
    if(y=="÷" && z!="")
    {
    v=x/z
    dodajdoid("wynik", v)
    }
    if(y=="×" && z=="0")
    {
    dodajdoid("wynik", 0)
    }
    if(y=="÷" && z=="0")
    {
    dodajdoid("wynik", "error")
    }
    if(y=="+" && z=="0" || y=="-" && z=="0")
    {
    dodajdoid("wynik", x)
    }
}

document.getElementById("zero").onclick = function(){
    if(kolejne==true && z!="0" && klj==false && pd==false)
    {
    z+="0"
    dodajdoid("liczba2", z)
    }
    if(kolejne==false && x!="0" && kolej==false && pj==false)
    {
    x+="0"
    dodajdoid("liczba", x)
    }
    if(pj==true && kolejne==false && p!="")
    {
    p+="0"
    dodajdoid("gora", p)
    }
    if(pd==true && kolejne==true && g!="")
    {
    g+="0"
    dodajdoid("gora2", g)
    }
}

liczby("jeden", "1");
liczby("dwa", "2");
liczby("trzy", "3");
liczby("cztery", "4");
liczby("piec", "5");
liczby("szesc", "6");
liczby("siedem", "7");
liczby("osiem", "8");
liczby("dziewiec", "9");

function liczby(dane, licz){
    document.getElementById(dane).onclick = function(){
        if(pj==true && kolejne==false)
        {
        p+=licz
	dodajdoid("gora", p);
        }
	if(pd==true && kolejne==true)
        {
        g+=licz
	dodajdoid("gora2", g);
        }
	if(x=="0" && kolejne==false && kolej==false && pj==false)
	{
	x=""
	dodajdoid("liczba", x);
        }
        if(z=="0" && kolejne==true && klj==false && pd==false)
	{
        z=""
	dodajdoid("liczba2", z);
	}
        if(kolejne==true && klj==false && pd==false)
        {
        z+=licz
	dodajdoid("liczba2", z);
        }
    	if(kolejne==false && kolej==false && pj==false)
    	{
    	x+=licz
	dodajdoid("liczba", x);
    	}
    }
}


document.getElementById("pierwiastek").onclick = function(){
    switch(true) {
        case kolej==false && kolejne==false:
	    kolej=true;
            x = Math.sqrt(x);
	    dodajdoid("prz", "√");
	    break;
	case kolej==true && kolejne==false:
	    kolej=false;
            nast=false;
    	    x = Math.pow(x, 2);
            dodajdoid("prz", "");
	    break;
	case klj==false && kolejne==true:
	    klj=true;
            z = Math.sqrt(z);
            dodajdoid("prz2", "√");
	    break;
	case klj==true && kolejne==true:
	    klj=false;
            nstp=false;
            z = Math.pow(z, 2);
	    dodajdoid("prz2", "");
    }
}


document.getElementById("potega").onclick = function(){
    if(pj==false && kolejne==false)
    {
    pj=true
    dodajdoid("gora", "0");
    }
    if(pd==false && kolejne==true)
    {
    pd=true
    dodajdoid("gora2", "0");
    }
}

document.getElementById("przecinek").onclick = function(){
    if(x=="" && kolejne==false && kolej==false && pj==false && doto==false)
    {
    doto=true
    x+="0."
    dodajdoid("liczba", x);
    }
    if(z=="" && kolejne==true && klj==false && pd==false && dot==false)
    {
    dot=true
    z+="0."
    dodajdoid("liczba2", z);
    }
    if(kolejne==true && klj==false && pd==false && dot==false)
    {
    dot=true
    z+="."
    dodajdoid("liczba2", z);
    }
    if(kolejne==false && kolej==false && pj==false && doto==false)
    {
    doto=true
    x+="."
    dodajdoid("liczba", x);
    }
}

znaki("plus", "+");
znaki("minus", "-");
znaki("mnozenie", "×");
znaki("dzielenie", "÷");

function znaki(zn, spzn){
    document.getElementById(zn).onclick = function(){
        y=spzn
	kolejne=true
        dodajdoid("znak", y);
        if(z=="")
        {
        dodajdoid("liczba2", "0");
        }
    }
}

function dodajdoid(id, wart){
    document.getElementById(id).innerHTML = wart;
}