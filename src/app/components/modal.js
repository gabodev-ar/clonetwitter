const textArea    = document.getElementById('input-tweet');
const modal       = document.querySelector('.modal');
const modalHeader = document.querySelector('.modal__header');

//Auto-resize input Tweet
const autoResize = ()=>{
    textArea.style.height = 0;
    textArea.style.height = `${textArea.scrollHeight}px`;
};

textArea.addEventListener('input', autoResize);

//Scroll Background Header

const scrollBackground = ()=>{

    console.log(modal.scrollTop);

    (modal.scrollTop > 0) ? 
        modalHeader.classList.add('modal__header--active') :
        modalHeader.classList.remove('modal__header--active');

};

modal.addEventListener('scroll', scrollBackground); 