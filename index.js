import "./src/js/modal_script1"
import { Continue } from "./src/js/modal_script1"

const htmlEl = {
    btnCont1: document.querySelector('#btnCont1'),
    inpGift: document.querySelector('#inpGift'),
    block: document.querySelector('#block'),
    content: document.querySelector('#content')
}

htmlEl.btnCont1.addEventListener('click', () => {
    const InpGift = htmlEl.inpGift.value
    Continue()
    htmlEl.block.innerHTML = `
    <div id="content2" class="main_block_content2">
    <div class="main_block_content2_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="43" viewBox="0 0 41 43" fill="none">
                    <path d="M20.5 11.2222V37.9444M20.5 11.2222H13.625C12.612 11.2222 11.6405 10.7891 10.9243 10.0181C10.208 9.24712 9.80556 8.20144 9.80556 7.11111C9.80556 6.02078 10.208 4.9751 10.9243 4.20412C11.6405 3.43313 12.612 3 13.625 3C18.9722 3 20.5 11.2222 20.5 11.2222ZM20.5 11.2222H27.375C28.388 11.2222 29.3595 10.7891 30.0758 10.0181C30.7919 9.24712 31.1944 8.20144 31.1944 7.11111C31.1944 6.02078 30.7919 4.9751 30.0758 4.20412C29.3595 3.43313 28.388 3 27.375 3C22.0277 3 20.5 11.2222 20.5 11.2222ZM6.88889 21.5H34.1111V33.4222C34.1111 35.7246 34.1111 36.876 33.6872 37.7553C33.3145 38.5288 32.7195 39.1578 31.9878 39.5519C31.1559 40 30.0669 40 27.8889 40H13.1111C10.9331 40 9.84413 40 9.01226 39.5519C8.28051 39.1578 7.68559 38.5288 7.31276 37.7553C6.88889 36.876 6.88889 35.7246 6.88889 33.4222V21.5ZM6.11111 21.5H34.8889C35.978 21.5 36.5224 21.5 36.9383 21.2759C37.3043 21.0788 37.6016 20.7645 37.7881 20.3777C38 19.938 38 19.3624 38 18.2111V14.5111C38 13.3599 38 12.7843 37.7881 12.3446C37.6016 11.9578 37.3043 11.6433 36.9383 11.4463C36.5224 11.2222 35.978 11.2222 34.8889 11.2222H6.11111C5.02212 11.2222 4.47762 11.2222 4.06169 11.4463C3.69582 11.6433 3.39836 11.9578 3.21192 12.3446C3 12.7843 3 13.3599 3 14.5111V18.2111C3 19.3624 3 19.938 3.21192 20.3777C3.39836 20.7645 3.69582 21.0788 4.06169 21.2759C4.47762 21.5 5.02212 21.5 6.11111 21.5Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>  
                <div class="main_block_content2_logo_forp">
                    <p class="main_block_content2_logo_forp_p1">Christmas site from:</p>
                    <p class="main_block_content2_logo_forp_p2">Marchello</p>
                </div>         
            </div>
            <div class="main_block_content2_forboxsize">
                <div class="main_block_content2_forboxsize_boxsize">
                    <p class="main_block_content2_forboxsize_boxsize_p">Box size:</p>
                    <div class="main_block_content2_forboxsize_boxsize_forbl1">
                        <div class="main_block_content2_forboxsize_boxsize_forbl1_bl1">
                            <img class="main_block_content2_forboxsize_boxsize_forbl1_bl1_img" src="./src/img/kisspng-christmas-gift-gift-wrapping-clip-art-small-present-cliparts-5a7581b644a597.1319396515176503582812.png" alt="">
                            <div class="main_block_content2_forboxsize_boxsize_forbl1_bl1_inpts">
                                <input id="Small" type="checkbox">
                                <p class="main_block_content2_forboxsize_boxsize_forbl1_bl1_inpts_p">Small</p>
                            </div>
                        </div>
                    </div>
                    <div class="main_block_content2_forboxsize_boxsize_forbl2">
                        <div class="main_block_content2_forboxsize_boxsize_forbl2_bl1">
                            <img class="main_block_content2_forboxsize_boxsize_forbl2_bl1_img" src="./src/img/kisspng-christmas-gift-gift-wrapping-clip-art-small-present-cliparts-5a7581b644a597.1319396515176503582812.png" alt="">
                            <div class="main_block_content2_forboxsize_boxsize_forbl2_bl1_inpts">
                                <input id="Medium" type="checkbox">
                                <p class="main_block_content2_forboxsize_boxsize_forbl2_bl1_inpts_p">Medium</p>
                            </div>
                        </div>
                    </div>
                    <div class="main_block_content2_forboxsize_boxsize_forbl3">
                        <div class="main_block_content2_forboxsize_boxsize_forbl3_bl1">
                            <img class="main_block_content2_forboxsize_boxsize_forbl3_bl1_img" src="./src/img/kisspng-christmas-gift-gift-wrapping-clip-art-small-present-cliparts-5a7581b644a597.1319396515176503582812.png" alt="">
                            <div class="main_block_content2_forboxsize_boxsize_forbl3_bl1_inpts">
                                <input id="Big" type="checkbox">
                                <p class="main_block_content2_forboxsize_boxsize_forbl3_bl1_inpts_p">Big</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main_block_content2_forbtn">
                <button id="btnCont2" class="main_block_content2_forbtn_btn">Continue</button>
            </div>
        </div>
    ` 
    let btnCont2 = document.querySelectorAll('#btnCont2')
    console.log(btnCont2)
    let input1 = document.querySelector("#Small")
    let input2 = document.querySelector("#Medium")
    let input3 = document.querySelector("#Big") 
    input1.addEventListener('click', () => {
        let small = input1.id
        console.log(small)
    })
    input2.addEventListener('click', () => {
        let medium = input2.id
        console.log(medium)
    })
    input3.addEventListener('click', () => {
        let big = input3.id
        console.log(big)
    })
    btnCont2.forEach(btn => {
        btn.addEventListener('click', () => {
            let content2 = document.querySelectorAll('#content2')
            const Continue2 = () => {
                htmlEl.block.classList.toggle('expanded')
                setTimeout(content2.innerHTML= '', 500)
            }
            Continue2()
            htmlEl.block.innerHTML = `
            <div id="content3" class="main_block_content3">
            <div class="main_block_content3_logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="43" viewBox="0 0 41 43" fill="none">
                    <path d="M20.5 11.2222V37.9444M20.5 11.2222H13.625C12.612 11.2222 11.6405 10.7891 10.9243 10.0181C10.208 9.24712 9.80556 8.20144 9.80556 7.11111C9.80556 6.02078 10.208 4.9751 10.9243 4.20412C11.6405 3.43313 12.612 3 13.625 3C18.9722 3 20.5 11.2222 20.5 11.2222ZM20.5 11.2222H27.375C28.388 11.2222 29.3595 10.7891 30.0758 10.0181C30.7919 9.24712 31.1944 8.20144 31.1944 7.11111C31.1944 6.02078 30.7919 4.9751 30.0758 4.20412C29.3595 3.43313 28.388 3 27.375 3C22.0277 3 20.5 11.2222 20.5 11.2222ZM6.88889 21.5H34.1111V33.4222C34.1111 35.7246 34.1111 36.876 33.6872 37.7553C33.3145 38.5288 32.7195 39.1578 31.9878 39.5519C31.1559 40 30.0669 40 27.8889 40H13.1111C10.9331 40 9.84413 40 9.01226 39.5519C8.28051 39.1578 7.68559 38.5288 7.31276 37.7553C6.88889 36.876 6.88889 35.7246 6.88889 33.4222V21.5ZM6.11111 21.5H34.8889C35.978 21.5 36.5224 21.5 36.9383 21.2759C37.3043 21.0788 37.6016 20.7645 37.7881 20.3777C38 19.938 38 19.3624 38 18.2111V14.5111C38 13.3599 38 12.7843 37.7881 12.3446C37.6016 11.9578 37.3043 11.6433 36.9383 11.4463C36.5224 11.2222 35.978 11.2222 34.8889 11.2222H6.11111C5.02212 11.2222 4.47762 11.2222 4.06169 11.4463C3.69582 11.6433 3.39836 11.9578 3.21192 12.3446C3 12.7843 3 13.3599 3 14.5111V18.2111C3 19.3624 3 19.938 3.21192 20.3777C3.39836 20.7645 3.69582 21.0788 4.06169 21.2759C4.47762 21.5 5.02212 21.5 6.11111 21.5Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>  
                <div class="main_block_content3_logo_forp">
                    <p class="main_block_content3_logo_forp_p1">Christmas site from:</p>
                    <p class="main_block_content3_logo_forp_p2">Marchello</p>
                </div>         
            </div>
            <div class="main_block_content3_forinput">
                <div class="main_block_content3_forinput_blinp">
                    <p class="main_block_content3_forinput_blinp_p">Enter your wishes:</p>
                    <textarea id="inpWish" class="main_block_content3_forinput_blinp_input"></textarea>
                </div>
            </div>
            <div class="main_block_content3_forbtn">
                <button id="btnCont3" class="main_block_content3_forbtn_btn">Continue</button>
            </div> 
            </div>
            `
            let btnCont3 = document.querySelectorAll('#btnCont3')
            console.log(btnCont3)
            btnCont3.forEach(btn2 => {
                btn2.addEventListener('click', () => {
                    let inpWish = document.querySelector('#inpWish')
                    console.log(inpWish)
                    const inp = inpWish.value
                    let boxSize
                    if (input1.checked) {
                        boxSize = 'Small'
                    } else if (input2.checked) {
                        boxSize = 'Medium'
                    } else if (input3.checked) {
                        boxSize = 'Big'
                    } else {
                        boxSize = 'Not chosen'
                    }
                    htmlEl.block.innerHTML = `
                    <div class="main_block_content4">
                    <div class="main_block_content4_logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="43" viewBox="0 0 41 43" fill="none">
                            <path d="M20.5 11.2222V37.9444M20.5 11.2222H13.625C12.612 11.2222 11.6405 10.7891 10.9243 10.0181C10.208 9.24712 9.80556 8.20144 9.80556 7.11111C9.80556 6.02078 10.208 4.9751 10.9243 4.20412C11.6405 3.43313 12.612 3 13.625 3C18.9722 3 20.5 11.2222 20.5 11.2222ZM20.5 11.2222H27.375C28.388 11.2222 29.3595 10.7891 30.0758 10.0181C30.7919 9.24712 31.1944 8.20144 31.1944 7.11111C31.1944 6.02078 30.7919 4.9751 30.0758 4.20412C29.3595 3.43313 28.388 3 27.375 3C22.0277 3 20.5 11.2222 20.5 11.2222ZM6.88889 21.5H34.1111V33.4222C34.1111 35.7246 34.1111 36.876 33.6872 37.7553C33.3145 38.5288 32.7195 39.1578 31.9878 39.5519C31.1559 40 30.0669 40 27.8889 40H13.1111C10.9331 40 9.84413 40 9.01226 39.5519C8.28051 39.1578 7.68559 38.5288 7.31276 37.7553C6.88889 36.876 6.88889 35.7246 6.88889 33.4222V21.5ZM6.11111 21.5H34.8889C35.978 21.5 36.5224 21.5 36.9383 21.2759C37.3043 21.0788 37.6016 20.7645 37.7881 20.3777C38 19.938 38 19.3624 38 18.2111V14.5111C38 13.3599 38 12.7843 37.7881 12.3446C37.6016 11.9578 37.3043 11.6433 36.9383 11.4463C36.5224 11.2222 35.978 11.2222 34.8889 11.2222H6.11111C5.02212 11.2222 4.47762 11.2222 4.06169 11.4463C3.69582 11.6433 3.39836 11.9578 3.21192 12.3446C3 12.7843 3 13.3599 3 14.5111V18.2111C3 19.3624 3 19.938 3.21192 20.3777C3.39836 20.7645 3.69582 21.0788 4.06169 21.2759C4.47762 21.5 5.02212 21.5 6.11111 21.5Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                        <div class="main_block_content4_logo_forp">
                            <p class="main_block_content4_logo_forp_p1">Christmas site from:</p>
                            <p class="main_block_content4_logo_forp_p2">Marchello</p>
                        </div>         
                    </div>
                    <div class="main_block_content4_forb">
                        <div class="main_block_content4_forb_b">
                            <p class="main_block_content4_forb_b_p">Here is your gift, should you continue?</p>
                            <div class="main_block_content4_forb_b_forp2">
                                <p class="main_block_content4_forb_b_forp2_p">Gift:</p>
                                <p class="main_block_content4_forb_b_forp2_p2">${InpGift}</p>
                            </div>
                            <div class="main_block_content4_forb_b_forp3">
                                <p class="main_block_content4_forb_b_forp3_p">Box size:</p>
                                <p id="bSize" class="main_block_content4_forb_b_forp3_p2">${boxSize}</p>
                            </div>
                            <div class="main_block_content4_forb_b_forp4">
                                <p class="main_block_content4_forb_b_forp4_p">Your wishes:</p>
                                <p class="main_block_content4_forb_b_forp4_p2">${inp}</p>
                            </div>
                        </div>
                    </div>
                    <div class="main_block_content4_forbtn">
                        <button id="btnCont4" class="main_block_content4_forbtn_btn">Continue</button>
                    </div> 
                    </div>
                    `
                })
            })
        })
    })
})