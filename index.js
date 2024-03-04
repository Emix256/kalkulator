const dzialanie = document.getElementById("dzialanie");
const dzialanie2 = document.getElementById("dzialanie2");
const dzialanie3 = document.getElementById("dzialanie3");

function plus(x, dzial){
    dzial.value += x;
}

function czy(x, dzial){
    dzial.value = x;
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

function potega(){
    dzialanie2.value = Math.pow(dzialanie2.value, dzialanie3.value)
}