///смена цвета
var colorArray = ["#1b1d1e", "#2d3037", "#373a53","#3a4280"];
var i = 0;

function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}

////modal
const openModal = (triggerSelector, modalDataSelector) => {
    const trigger = document.querySelector(triggerSelector)
    const modal = document.querySelector(modalDataSelector)
    if (!trigger || !modal) return
    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.classList.add('modal_active')
    })
}
openModal('.buttons__button_one', '.modal[data-modal="one"]')
openModal('.buttons__button_two', '.modal[data-modal="two"]')

const closeModal = () => {
    const modals = document.querySelectorAll('.modal')
    if (!modals) return
    modals.forEach(el => {
        el.addEventListener('click', e => {
            if (e.target.closest('.modal__close')) {
                el.classList.remove('modal_active')
            }
            if (!e.target.closest('.modal__body')) {
                el.classList.remove('modal_active')
            }
        })
    })
}
closeModal()
