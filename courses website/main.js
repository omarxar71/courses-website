//change navbar style when scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll' , window.scrollY > 100)
})


// open and close faqs questions 
var faqs = document.querySelectorAll('.box')
faqs.forEach(box =>{
    box.addEventListener('click',()=>{
        box.classList.toggle('open')
        
        
        
        //change the icon to minus when open
        let minus=
        var icon = box.querySelector('.container_freq =.box i');
        nav.addEventListener('click',()=>{
            nav.style.display="flex";
        })
        if (icon.className==='fa-solid fa-plus'){
            className ='fa-solid fa-minus'
        }
    })
})
//////////////nav bar show on click ///////////////////////////////
let menuBtn=document.querySelector('#open-menu-btn');
let closeBtn=document.querySelector('#close-menu-btn');
let nav =document.querySelector(".nav_menu");
nav.addEventListener('click',()=>{
    nav.style.display="flex";
})