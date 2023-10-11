const closeBtn = document.querySelector('.closed-btn')
//console.log(closeBtn);
const popUp = document.querySelector('.pop-up')
//console.log(popUp)

closeBtn.addEventListener('click', function(){
    popUp.style.display="none";
})