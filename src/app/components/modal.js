const textArea   = document.getElementById('inputTweet'),
    modal        = document.getElementById('modal'),
    modalCover   = document.getElementById('modalCover'),
    modalHeader  = document.getElementById('modalHeader'),
    modalClose   = document.getElementById('modalClose'),
    modalCircle  = document.getElementById('modalCircleCheck'),
    modalButton  = document.getElementById('modalButton'),
    modalWarning = document.getElementById('modalWarning'),
    twittearBtn  = document.getElementById('twittearBtn');
    body         = document.querySelector('.body');

//Auto-resize input Tweet
const autoResize = ()=>{
    textArea.style.height = 0;
    textArea.style.height = `${textArea.scrollHeight}px`;
};

textArea.addEventListener('input', autoResize);

//Scroll Background Header
const scrollBackground = ()=>{

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
    modal.classList.add('modal--active');
    body.style = 'overflow : hidden';
}

const hiddenModal = ()=>{
    modalCover.classList.remove('cover--active');
    modal.classList.remove('modal--active');
    body.style = 'overflow : auto';
}

twittearBtn.addEventListener('click', showModal);
modalClose.addEventListener('click', hiddenModal);
modalCover.addEventListener('click', hiddenModal);


//Spinner Function

const updateCircleCheck = ()=>{

    let characters = textArea.value.length;
    let pathlength = characters * 100 / 280; 
    modalCircle.style = `stroke-dasharray: ${pathlength} 100;`;

    if(characters > 259){
        modalCircle.style.stroke = "#f9e793";
        modalWarning.style.display = "block";
        modalWarning.innerText = `${280 - characters}`;
        
    }
    
    if(characters > 280){
        modalCircle.style.stroke = "#bc333e";
        modalWarning.style.color = "#bc333e";
    }

    (characters > 0) ? modalButton.disabled=false : modalButton.disabled=true;

    console.log(characters);

}

textArea.addEventListener('input', updateCircleCheck);


modalButton.addEventListener('click', ()=>{
    console.log('OK')
})





