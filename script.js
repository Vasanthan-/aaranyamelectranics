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



// Interactive Form
async function selection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    
    let request = new Request("./pcComponents.json");
    const responce = await fetch(request);
    const products = await responce.json();

    s2.innerHTML = "";
    if (s1.value == "amd") {
        var optionArray = products.amd;
    } else if (s1.value == "intel") {
        var optionArray = products.intel;
    } else if (s1.value == "ryzen 5000") {
        var optionArray = products.ryzen5000;
    } else if (s1.value == "5000") {
        var optionArray = ["select motherboard|Select Motherboard","ram2|b550","ram4|Z570"]
    } else if (s1.value == "nvidia") {
        var optionArray = ["select gpu series|Select GPU Series", "rtx 3050|RTX 3050", "rtx 3060|RTX 3060"];
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}