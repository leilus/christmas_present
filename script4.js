document.addEventListener("DOMContentLoaded", function() {
    var main = document.querySelector("main");

    main.addEventListener("animationend", function() {
        var items = document.querySelectorAll(".item");
        items.forEach(function(item) {
            item.style.display = "none";
            document.getElementById("container").style.display = "flex";
        });
    });
});