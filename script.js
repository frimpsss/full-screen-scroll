const sections = document.querySelectorAll("section")

window.addEventListener("scroll", (e) => {
    let scrollHeight = window.pageYOffset
    console.log(scrollHeight)
    let active = ""

    for(let i = 1; i < sections.length; ++i){
        const sectionTop = sections[i].offsetTop;
        const sectionHeight = sections[i].clientHeight
        if(scrollHeight >= (sectionTop- sectionHeight/5)){
            if(sections[i].getAttribute("class") != "first-page"){
                active = sections[i].getAttribute("class")
                sections[i].style.visibility = "visible"
            }
        }
        else{
            if(sections[i].getAttribute("class") != "first-page"){
            sections[i].classList.add("not-active")
            }
        }
    }
    console.log(active)
})

