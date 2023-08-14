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
        addtoid("po", li);
    }, 1000); 
    li=""
    addtoid("po", li);
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
    pj=false;
    pd=false;
    kolejne=false;
    kolej=false;
    klj=false;
    nast=false;
    nstp=false;
    addtoid("liczba", "0");
    addtoid("znak", y);
    addtoid("liczba2", z);
    addtoid("rownanie", "");
    addtoid("wynik", "");
    addtoid("prz", "");
    addtoid("prz2", "");
    addtoid("gora", "");
    addtoid("gora2", "");
}

document.getElementById("rowna").onclick = function(){
    if(kolejne==true || z!="")
    {
    x=Number(x)
    z=Number(z)
    p=Number(p)
    g=Number(g)
    addtoid("rownanie", "=");
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
    addtoid("rowananie", "=");
    addtoid("wynik", x);
    }
    if(klj==true && nstp==false)
    {
    nstp=true
    z=Number(z)
    addtoid("wynik", z);
    }
    if(y=="+" && z!="")
    {
    v=x+z
    addtoid("wynik", v);
    }
    if(y=="-" && z!="")
    {
    v=x-z
    addtoid("wynik", v);
    }
    if(y=="×" && z!="")
    {
    v=x*z
    addtoid("wynik", v);
    }
    if(y=="÷" && z!="")
    {
    v=x/z
    addtoid("wynik", v);
    }
    if(y=="×" && z=="0")
    {
    addtoid("wynik", 0);
    }
    if(y=="÷" && z=="0")
    {
    addtoid("wynik", "error");
    }
    if(y=="+" && z=="0" || y=="-" && z=="0")
    {
    addtoid("wynik", x);
    }
}

document.getElementById("zero").onclick = function(){
    if(kolejne==true && z!="0" && klj==false && pd==false)
    {
    z+="0"
    addtoid("liczba2", z);
    }
    if(kolejne==false && x!="0" && kolej==false && pj==false)
    {
    x+="0"
    addtoid("liczba", x);
    }
    if(pj==true && kolejne==false && p!="")
    {
    p+="0"
    addtoid("gora", p);
    }
    if(pd==true && kolejne==true && g!="")
    {
    g+="0"
    addtoid("gora2", g);
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
	addtoid("gora", p);
        }
	if(pd==true && kolejne==true)
        {
        g+=licz
	addtoid("gora2", g);
        }
	if(x=="0" && kolejne==false && kolej==false && pj==false)
	{
	x=""
	addtoid("liczba", x);
        }
        if(z=="0" && kolejne==true && klj==false && pd==false)
	{
        z=""
	addtoid("liczba2", z);
	}
        if(kolejne==true && klj==false && pd==false)
        {
        z+=licz
	addtoid("liczba2", z);
        }
    	if(kolejne==false && kolej==false && pj==false)
    	{
    	x+=licz
	addtoid("liczba", x);
    	}
    }
}


document.getElementById("pierwiastek").onclick = function(){
    switch(true) {
        case kolej==false && kolejne==false:
	    kolej=true;
            x = Math.sqrt(x);
	    addtoid("prz", "√");
	    break;
	case kolej==true && kolejne==false:
	    kolej=false;
            nast=false;
    	    x = Math.pow(x, 2);
            addtoid("prz", "");
	    break;
	case klj==false && kolejne==true:
	    klj=true;
            z = Math.sqrt(z);
            addtoid("prz2", "√");
	    break;
	case klj==true && kolejne==true:
	    klj=false;
            nstp=false;
            z = Math.pow(z, 2);
	    addtoid("prz2", "");
    }
}


document.getElementById("potega").onclick = function(){
    if(pj==false && kolejne==false)
    {
    pj=true
    addtoid("gora", "0");
    }
    if(pd==false && kolejne==true)
    {
    pd=true
    addtoid("gora2", "0");
    }
}

document.getElementById("przecinek").onclick = function(){
    if(x=="" && kolejne==false && kolej==false && pj==false && doto==false)
    {
    doto=true
    x+="0."
    addtoid("liczba", x);
    }
    if(z=="" && kolejne==true && klj==false && pd==false && dot==false)
    {
    dot=true
    z+="0."
    addtoid("liczba2", z);
    }
    if(kolejne==true && klj==false && pd==false && dot==false)
    {
    dot=true
    z+="."
    addtoid("liczba2", z);
    }
    if(kolejne==false && kolej==false && pj==false && doto==false)
    {
    doto=true
    x+="."
    addtoid("liczba", x);
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
        addtoid("znak", y);
        if(z=="")
        {
        addtoid("liczba2", "0");
        }
    }
}

function addtoid(id, wart){
    document.getElementById(id).innerHTML = wart;
}