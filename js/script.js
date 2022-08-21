const openModalButton = document.querySelector("#open-btn")
const closeModalButton = document.querySelector("#close-btn")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"))
}
// class toggle realiza alternacia de estados

[openModalButton, closeModalButton, fade].forEach((el) =>{
    el.addEventListener("click", () => toggleModal())
})