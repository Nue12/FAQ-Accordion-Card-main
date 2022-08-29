const qAndAContainerTag = document.querySelectorAll(".qAndA-container");

qAndAContainerTag.forEach((question) => {
    question.addEventListener("click", () => {
        if(question.classList.contains("active")) {
            question.classList.remove("active");
        } else {
            qAndAContainerTag.forEach((question) => {
                question.classList.remove("active");
            })
            question.classList.add("active");
        }
        
    })
})
