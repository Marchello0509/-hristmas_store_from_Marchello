const modalEl = {
    btnCont1: document.querySelector('#btnCont1'),
    inpGift: document.querySelector('#inpGift'),
    block: document.querySelector('#block'),
    content: document.querySelector('#content'),
}
console.log(modalEl)

const clearContent = () => {
    modalEl.content.innerHTML = ''
}

export const Continue = () => {
    modalEl.inpGift.value

    modalEl.block.classList.toggle('expanded')
    setTimeout(clearContent, 500)
}