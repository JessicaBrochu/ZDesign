
class Main{
    constructor() {
        this.init();
    }

    init(){
        const buttonElement = document.querySelector("#hamburger")
        const navElement = document.querySelector("nav")
        buttonElement.addEventListener("click", (event) => {
            buttonElement.classList.toggle("open")
            navElement.classList.toggle("menu-open")

        })
    }
}

new Main();