function Replace() {
    var x = document.getElementById("reg");
    var y = document.getElementById("neon");

    if (x.style.display == "none") {
        x.style.display = "";
        y.style.display = "none";
    }
    else {
        x.style.display = "none";
        y.style.display = "block";
    }
}