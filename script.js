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

//Form field cleaning
function cleanField(s1, s2, s3, s4, s5, s6, s7, s8, s9) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
    var s4 = document.getElementById(s4);
    var s5 = document.getElementById(s5);
    var s6 = document.getElementById(s6);
    var s7 = document.getElementById(s7);
    var s8 = document.getElementById(s8);
    var s9 = document.getElementById(s9);

    if (s1 != null) {
        s1.innerHTML = "";
    }
    if (s2 != null) {
        s2.innerHTML = "";
    }
    if (s3 != null) {
        s3.innerHTML = "";
    }
    if (s4 != null) {
        s4.innerHTML = "";
    }
    if (s5 != null) {
        s5.innerHTML = "";
    }
    if (s6 != null) {
        s6.innerHTML = "";
    }
    if (s7 != null) {
        s7.innerHTML = "";
    }
    if (s8 != null) {
        s8.innerHTML = "";
    }
    if (s9 != null) {
        s9.innerHTML = "";
    }
}


// Interactive Form
async function cpuSelection(s1, s2, s3, s4, s5, s6, s7, s8, s9) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    cleanField(s3, s4, s5, s6, s7, s8, s9);
    let request = new Request("./json/pcComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    var optionArray = products[s1.value];

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

    let request = new Request("./json/motherboardComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    var optionArray = products[s1.value];

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

function socketcoolerSelection(s1, s2, s3) {
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
    var optionArray = products[s1.value];

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
    var optionArray = products[s1.value];

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
    var optionArray = products[s1.value];

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

async function storageSelection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    let request = new Request("./json/storageComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    var optionArray = products[s1.value];

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

async function cabinetSelection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    let request = new Request("./json/cabinetComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    var optionArray = products[s1.value];

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

async function psuSelection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    let request = new Request("./json/psuComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    var optionArray = products[s1.value];

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}