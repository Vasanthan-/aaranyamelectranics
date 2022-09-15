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