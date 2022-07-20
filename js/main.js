
var openBtn = document.getElementsByClassName('open-btn')[0];
var closeBtn = document.querySelector('.modal_close-btn');
var closeIcon = document.querySelector('.modal_header-closeBtn');
var modalElement = document.querySelector('.modal');
var modalInner = document.querySelector('.modal_inner')

openBtn.addEventListener('click',function(){
    modalElement.classList.toggle('hide');
})

closeBtn.addEventListener('click',function(){
    modalElement.classList.toggle('hide');
})

closeIcon.addEventListener('click',function(){
    modalElement.classList.toggle('hide');
})

modalElement.addEventListener('click',function(event){
    modalElement.classList.toggle('hide');
})
 
modalInner.addEventListener('click', function(e){
    e.stopPropagation();
})
