const dzialanie = document.getElementById("dzialanie");
const historia = document.getElementById('historia-zawartosc');
const symbole = ['+', '–', '×', '÷', '√'];
const listaLiczb = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
let potega = false;

const wyczysc = dane1 => {
    dzialanie.value = dane1;
    potega = false;
}

const wylicz = () => {
    potega = false;
    try {
        let tekst = `Dzialanie: ${dzialanie.value}`;
        dzialanie.value = kalkulator(dzialanie.value);
        let tekst2 = ` = ${dzialanie.value}`;
        let koncowyTekst = tekst + tekst2;
        const pElement = document.createElement('p');
        pElement.textContent = koncowyTekst;
        historia.appendChild(pElement);
    }
    catch (error) {
        console.log(dzialanie.value);
        dzialanie.value = "Error";
    }
}

const dodajPotega = () => {
    potega = true;
}

const dodaj = (liczba1, gornaLiczba) => {
    if (listaLiczb.includes(gornaLiczba) && potega) {
        dzialanie.value += gornaLiczba;
    }
    else if (symbole.includes(liczba1) && potega) {
        potega = false;
        dzialanie.value += liczba1;
    }
    else {
        dzialanie.value += liczba1;
    }
}

const obliczPotege = dzialanie => {
    const tabelaPoteg = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
    let szukanie = dzialanie.match(/\d+[⁰¹²³⁴⁵⁶⁷⁸⁹]+/);
    let malaPotega = szukanie[0].split("");
    let liczba = "";
    let potega = "";

    for (i in malaPotega) {
        if (tabelaPoteg.includes(malaPotega[i])) {
            let liczbaPotega = tabelaPoteg.indexOf(malaPotega[i]);
            potega += liczbaPotega;
            continue;
        }
        liczba += malaPotega[i];
    }
    let wynik = Math.pow(parseFloat(liczba), parseFloat(potega));
    return dzialanie = dzialanie.replace(szukanie[0], wynik);
}

const obliczPierwiastek = dzialanie => {
    let szukanie = dzialanie.match(/√(\d*\.?\d+)/);
    let malyPierwiastek = szukanie[0].split("");
    let liczba = "";

    for (i in malyPierwiastek) {
        if (malyPierwiastek[i] != '√') {
            liczba += malyPierwiastek[i];
        }
    }

    let wynik = Math.sqrt(parseFloat(liczba));
    return dzialanie = dzialanie.replace(szukanie[0], wynik);
}

const znajdzOperator = (tekst, operator) => {
    let regex = new RegExp(`\\d*\\.?\\d+\\${operator}\\d*\\.?\\d+`);
    let wynik = tekst.match(regex);

    if (wynik != null) {
        return wynik;
    } else {
        return [];
    }
}

const robienieDzialan = (string, znak) => {
    let wzor = znajdzOperator(string, znak);
    let wynik = 0;
    let operator = "0";
    let liczba1 = "";
    let liczba2 = "";

    if (wzor == []) {
        return string;
    }

    for (i = 0; i < wzor[0].length; i++) {
        let char = wzor[0].at(i);
        if (char == znak) {
            operator = char;
            continue;
        } else if (operator != "0") {
            liczba2 += char;
            continue;
        }
        liczba1 += char;
    }

    switch (operator) {
        case "+":
            wynik = parseFloat(liczba1) + parseFloat(liczba2);
            break;
        case "–":
            wynik = parseFloat(liczba1) - parseFloat(liczba2);
            break;
        case "×":
            wynik = parseFloat(liczba1) * parseFloat(liczba2);
            break;
        case "÷":
            wynik = parseFloat(liczba1) / parseFloat(liczba2);
            break;
        case "√":
            let potega = Math.sqrt(parseFloat(liczba2));
            wynik = parseFloat(liczba1) * potega;
            break;
        default:
            return "Coś nie pykło";
    }

    string = string.replace(wzor[0], wynik);
    return string;
}

const kalkulator = wzor => {
    const operatorzy = ['+', '–', '×', '÷', '√', '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

    while (operatorzy.some(operator => wzor.includes(operator))) {//Ważna pętla która używa funkcji some dopóki wzor posiada operator z listy while się nie skończy

        for (let i = 5; i < operatorzy.length; i++) {
            if (wzor.indexOf(operatorzy[i]) > 0) {
                wzor = obliczPotege(wzor);
                break;
            }
        }

        if (wzor.indexOf("√") > 0) {
            wzor = robienieDzialan(wzor, "√");
        }

        if (wzor.indexOf("√") >= 0) {
            wzor = obliczPierwiastek(wzor);
        }

        if (wzor.indexOf("×") >= 0) {
            wzor = robienieDzialan(wzor, "×");
        }

        if (wzor.indexOf("÷") >= 0) {
            wzor = robienieDzialan(wzor, "÷");
        }

        if (wzor.indexOf("+") >= 0) {
            wzor = robienieDzialan(wzor, "+");
        }

        if (wzor.indexOf("–") > 0) { // > 0 musi zostać!!!
            wzor = robienieDzialan(wzor, "–");
        }
    }
    return wzor;
}

//Ta funkcja jest do wpisywania liczb itp. za pomocą klawiatury
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case '1':
            dodaj('1', '¹');
            break;
        case '2':
            dodaj('2', '²');
            break;
        case '3':
            dodaj('3', '³');
            break;
        case '4':
            dodaj('4', '⁴');
            break;
        case '5':
            dodaj('5', '⁵');
            break;
        case '6':
            dodaj('6', '⁶');
            break;
        case '7':
            dodaj('7', '⁷');
            break;
        case '8':
            dodaj('8', '⁸');
            break;
        case '9':
            dodaj('9', '⁹');
            break;
        case '0':
            dodaj('0', '⁰');
            break;
        case '.':
            dodaj('.', '.');
            break;
        case '=':
            wylicz();
            break;
        case 'r':
            wyczysc('');
            break;
        case '-':
            dodaj('–', '-');
            break;
        case '+':
            dodaj('+', '+');
            break;
        case '*':
            dodaj('×', '*');
            break;
        case '/':
            dodaj('÷', '/');
            break;
        case 'h':
            stany('block');
            break;
        case 'x':
            stany('none');
            break;
    }
});

const stany = stan => {
    document.getElementById("historia").style.display = stan;
};

const wyczyscHistorie = () => {
    historia.innerHTML = "";
}

const zapiszDoLocalStorage = () => {
    localStorage.setItem('historia', historia.innerHTML);
}

const odtwarzajZLocalStorage = () => {
    historia.innerHTML = localStorage.getItem('historia') || '';
}

window.onload = odtwarzajZLocalStorage;

window.onbeforeunload = zapiszDoLocalStorage; 
