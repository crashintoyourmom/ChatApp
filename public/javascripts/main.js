let expandsidebar = document.querySelector("#expand-sidebar");
expandsidebar.addEventListener("click", (e) => {
    if (expandsidebar.setAttribute("data-expanded", true)){
        
    }

    document.querySelector("#main").classList.add("d-none");
    document.querySelector("#sidebar").classList.remove("d-none");

    document.querySelector("#sidebar").classList.add("d-none");
    document.querySelector("#main").classList.remove("d-none");
})
