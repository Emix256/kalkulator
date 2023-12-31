const wys = document.getElementById("dzialanie");

function plus(x){
    wys.value += x;
}

function czy(x){
    wys.value = x;
}

function count(){
    try{
        wys.value = Function("return " + wys.value)();
    }
    catch(error){
        wys.value = "Error";
    }
}
