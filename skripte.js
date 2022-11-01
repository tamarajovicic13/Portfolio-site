const navSlide = () =>{
    const minimeni = document.querySelector('.minimeni');
    const nav = document.querySelector('.nav-links') ;
    const navLinks = document.querySelectorAll('.nav-links li');

    minimeni.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

    })
}

navSlide();