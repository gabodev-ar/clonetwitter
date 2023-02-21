const textArea    = document.getElementById('input-tweet'),
      modal       = document.querySelector('.modal'),
      modalCover  = document.getElementById('modalCover'),
      modalHeader = document.querySelector('.modal__header'),
      modalClose  = document.getElementById('modalClose'),
      twittearBtn = document.getElementById('twittearBtn');


//Auto-resize input Tweet
const autoResize = ()=>{
    textArea.style.height = 0;
    textArea.style.height = `${textArea.scrollHeight}px`;
};

textArea.addEventListener('input', autoResize);

//Scroll Background Header
const scrollBackground = ()=>{

    console.log(modal.scrollTop);

    if(modal.scrollTop > 0){
        modalHeader.classList.add('modal__header--active');
    }else {
        modalHeader.classList.remove('modal__header--active');
    };

};

modal.addEventListener('scroll', scrollBackground); 

//Action button Twittear
const showModal = (e)=>{
    e.preventDefault();
    modalCover.classList.add('cover--active');
    modal.classList.add('modal--active')
}

const hiddenModal = ()=>{
    modalCover.classList.remove('cover--active');
    modal.classList.remove('modal--active');
}

twittearBtn.addEventListener('click', showModal);
modalClose.addEventListener('click', hiddenModal);
modalCover.addEventListener('click', hiddenModal);