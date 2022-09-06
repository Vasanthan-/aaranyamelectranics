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
function selection(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";
    if (s1.value == "AMD") {
        var optionArray = ["select cpu|Select CPU", "am4|Ryzen 3", "am4|Ryzen 5"];
    } else if (s1.value == "Intel") {
        var optionArray = ["select cpu|Select CPU", "core i3|Core i3", "core i5|Core i5"];
    } else if (s1.value == "am4") {
        var optionArray = ["select motherboard|Select Motherboard", "am4|AM4", "b550|B550"];
    } else if (s1.value == "nvidia") {
        var optionArray = ["select gpu series|Select GPU Series","rtx 3050|RTX 3050","rtx 3060|RTX 3060"];
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}