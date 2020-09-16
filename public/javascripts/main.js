let expandsidebar = document.querySelector("#expand-sidebar");
expandsidebar.addEventListener("click", (e) => {
    if (expandsidebar.getAttribute("data-expanded") === "false") {
        document.querySelector("#sidebar").classList.add("d-none");
        document.querySelector("#main").classList.remove("d-none");
        expandsidebar.setAttribute("data-expanded", "true");
    } else {
        document.querySelector("#sidebar").classList.remove("d-none");
        document.querySelector("#main").classList.add("d-none");
        expandsidebar.setAttribute("data-expanded", "false");
    }
    
})

var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};