const sections = document.querySelectorAll("section")

window.addEventListener("scroll", (e) => {
    let scrollHeight = window.pageYOffset
    console.log(scrollHeight)
    let active = ""
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight
        if(scrollHeight >= (sectionTop- sectionHeight)/5 && section.getAttribute("class") != "first-page"){
            active = section.getAttribute("class")
            section.style.visibility = "visible"
        }
        else{
            section.classList.add("not-active")
        }
    })
    console.log(active)
})

