document.querySelectorAll('.next-btn, .prev-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target = document.querySelector(btn.dataset.target);
    target.scrollIntoView({behavior:'smooth'});
  });
});

// Highlight nav on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll',()=>{
  let current = '';
  sections.forEach(sec=>{
    const sectionTop = sec.offsetTop - 150;
    if(scrollY >= sectionTop){
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href').includes(current)){
      link.classList.add('active');
    
