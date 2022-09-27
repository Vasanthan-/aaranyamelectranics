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

// FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//Form submit
window.addEventListener("load", function () {
    const form = document.getElementById('bform');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Success!");
            })
    });
});

window.addEventListener("load", function () {
    const form = document.getElementById('cform');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Success!");
            })
    });
});

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
function cleanField(c1, c2, c3, c4, c5, c6, c7, c8, c9) {
    var c1 = document.getElementById(c1);
    var c2 = document.getElementById(c2);
    var c3 = document.getElementById(c3);
    var c4 = document.getElementById(c4);
    var c5 = document.getElementById(c5);
    var c6 = document.getElementById(c6);
    var c7 = document.getElementById(c7);
    var c8 = document.getElementById(c8);
    var c9 = document.getElementById(c9);

    if (c1 != null) {
        c1.innerHTML = "";
    }
    if (c2 != null) {
        c2.innerHTML = "";
    }
    if (c3 != null) {
        c3.innerHTML = "";
    }
    if (c4 != null) {
        c4.innerHTML = "";
    }
    if (c5 != null) {
        c5.innerHTML = "";
    }
    if (c6 != null) {
        c6.innerHTML = "";
    }
    if (c7 != null) {
        c7.innerHTML = "";
    }
    if (c8 != null) {
        c8.innerHTML = "";
    }
    if (c9 != null) {
        c9.innerHTML = "";
    }
}


// Interactive Form
async function cpuSelection(s1, s2, c1, c2, c3, c4, c5, c6) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    cleanField(c1, c2, c3, c4, c5, c6);
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

async function cpuToMotherboard(s1, s2, s3) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    let request = new Request("./json/motherboardComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    var socket = products[s1.value];
    motherboardToCooler(socket, s3);
    var optionArray = products[socket];

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

function socketcoolerSelection(s1, s2, s3, s4) {
    cpuSelection(s1, s2)
    cpuToMotherboard(s1, s3, s4);
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

async function motherboardToCooler(s1, s2) {
    var s2 = document.getElementById(s2);

    let request = new Request("./json/coolerComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    var optionArray = products[s1];

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