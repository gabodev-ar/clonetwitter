const textArea = document.getElementById('input-tweet');
const modal    = document.querySelector('.modal');




// console.log(textArea.rows);

const autoResize = ()=>{
    textArea.style.height = 0;
    textArea.style.height = `${textArea.scrollHeight}px`
}

textArea.addEventListener('input', autoResize);