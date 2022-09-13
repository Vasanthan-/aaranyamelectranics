// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}


//Form selection
function openForm(formName) {
    var i;
    var x = document.getElementsByClassName("pcform");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(formName).style.display = "block";
}



// Interactive Form
async function cpuSelection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    let request = new Request("./json/pcComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    switch (s1.value) {
        case "amd":
            var optionArray = products.amd;
            break;
        case "intel":
            var optionArray = products.intel;
            break;
        case "ryzen 5000":
            var optionArray = products.ryzen5000;
            break;
        case "ryzen 5000 pro":
            var optionArray = products.ryzen5000pro;
            break;
        case "ryzen 5000g":
            var optionArray = products.ryzen5000g;
            break;
        case "ryzen 7000":
            var optionArray = products.ryzen7000;
            break;
        case "ryzen threadripper":
            var optionArray = products.ryzenthreadripper;
            break;
        case "ryzen threadripper pro":
            var optionArray = products.ryzenthreadripperpro;
            break;
        case "core x":
            var optionArray = products.corex;
            break;
        case "core i9 12th":
            var optionArray = products.corei912th;
            break;
        case "core i9 11th":
            var optionArray = products.corei911th;
            break;
        case "core i9 10th":
            var optionArray = products.corei910th;
            break;
        case "core i9 9th":
            var optionArray = products.corei99th;
            break;
        case "core i7 12th":
            var optionArray = products.corei712th;
            break;
        case "core i7 11th":
            var optionArray = products.corei711th;
            break;
        case "core i7 10th":
            var optionArray = products.corei710th;
            break;
        case "core i7 9th":
            var optionArray = products.corei79th;
            break;
        case "core i7 8th":
            var optionArray = products.corei78th;
            break;
        case "core i7 7th":
            var optionArray = products.corei77th;
            break;
        case "core i7 6th":
            var optionArray = products.corei76th;
            break;
        case "core i5 12th":
            var optionArray = products.corei512th;
            break;
        case "core i5 11th":
            var optionArray = products.corei511th;
            break;
        case "core i5 10th":
            var optionArray = products.corei510th;
            break;
        case "core i5 9th":
            var optionArray = products.corei59th;
            break;
        case "core i5 8th":
            var optionArray = products.corei58th;
            break;
        case "core i5 7th":
            var optionArray = products.corei57th;
            break;
        case "core i5 6th":
            var optionArray = products.corei56th;
            break;
        case "core i3 12th":
            var optionArray = products.corei312th;
            break;
        case "core i3 10th":
            var optionArray = products.corei310th;
            break;
        case "core i3 9th":
            var optionArray = products.corei39th;
            break;
        case "core i3 8th":
            var optionArray = products.corei38th;
            break;
        case "core i3 6th":
            var optionArray = products.corei36th;
            break;
        default:
            console.log("error " + s1.value);
    }
    /*
    } else if (s1.value == "5000") {
        */
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

async function motherboardSelection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
    var s4 = document.getElementById(s4);

    let request = new Request("./json/motherboardComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    switch (s1.value) {
        case "5000":
            var optionArray = ["select motherboard|Select Motherboard", "ram2|b550", "ram4|Z570"];
            break;
        default:
            console.log("error " + s1.value);
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

function socketcoolerSelection (s1, s2, s3) {
    motherboardSelection(s1, s2);
    coolerSelection(s1, s3);
}

async function ramSelection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    let request = new Request("./json/ramComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    switch (s1.value) {
        case "5000":
            var optionArray = ["select motherboard|Select Motherboard", "ram2|b550", "ram4|Z570"];
            break;
        default:
            console.log("error " + s1.value);
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

async function coolerSelection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    let request = new Request("./json/coolerComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    switch (s1.value) {
        case "5000":
            var optionArray = ["select motherboard|Select Motherboard", "ram2|b550", "ram4|Z570"];
            break;
        default:
            console.log("error " + s1.value);
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

async function gpuSelection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    let request = new Request("./json/gpuComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    switch (s1.value) {
        case "nvidia":
            var optionArray = products.nvidia;
            break;
        case "amdradeon":
            var optionArray = products.amdradeon;
            break;
        default:
            console.log("error " + s1.value);
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}