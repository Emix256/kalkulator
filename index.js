const dzialanie = document.getElementById("dzialanie");
const dzialanie2 = document.getElementById("dzialanie2");

function plus(x){
    dzialanie.value += x;
}

function plus2(x){
    dzialanie2.value += x;
}

function czy(x){
    dzialanie.value = x;
}

function czy2(x){
    dzialanie2.value = x;
}


function count(){
    try{
        dzialanie.value = Function("return " + dzialanie.value)();
    }
    catch(error){
        dzialanie.value = "Error";
    }
}

function pierwiastek(){
    dzialanie2.value = Math.sqrt(dzialanie2.value);
}

function przeniesc(){
    dzialanie.value += "+" + dzialanie2.value
}