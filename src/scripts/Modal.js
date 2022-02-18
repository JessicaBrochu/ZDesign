export default class Modal{
    
    constructor() {
        this.init();
    }

    init(){

        const imagesContainer = document.querySelectorAll(".work__content")
        let imgSrc;

        imagesContainer.forEach((divList) => {
            divList.addEventListener("click", (e) => {
                divList = e.target.childNodes[1].src;
                console.log(divList);
                imgSrc = (divList = e.target.childNodes[1].src);
                imgModal(imgSrc);
            });
        });

        
        let imgModal = (src) => {
            const modal = document.createElement("div");
            modal.setAttribute("class", "modal");
            document.querySelector(".main").append(modal);
            const newImage = document.createElement("img");
            newImage.setAttribute("src", imgSrc);
            modal.append(newImage)

            const closeBtn = document.createElement("i");
            closeBtn.setAttribute("class", "fas fa-times closeBtn");
            closeBtn.onclick = () => {
                modal.remove();
            };
            modal.append(newImage, closeBtn);
        };
    }
    
}

new Modal();

