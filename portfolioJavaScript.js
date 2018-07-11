function Replace() {
    var x = document.getElementById("pic");
    var y = document.getElementById("gif");

    if (x.style.display == "none") {
        x.style.display = "";
        y.style.display = "none";
    }
    else {
        x.style.display = "none";
        y.style.display = "flex";
    }
}

function ReplaceTV() {
    var x = document.getElementById("TVpic");
    var y = document.getElementById("TVgif");

    if (x.style.display == "none") {
        x.style.display = "";
        y.style.display = "none";
    }
    else {
        x.style.display = "none";
        y.style.display = "flex";
    }
}