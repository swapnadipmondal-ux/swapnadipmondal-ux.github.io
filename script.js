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
    <script>
// COUNTER ANIMATION
document.querySelectorAll('[data-count]').forEach(counter => {
  let target = +counter.dataset.count;
  let count = 0;
  let step = Math.ceil(target / 60);

  let interval = setInterval(() => {
    count += step;
    if (count >= target) {
      counter.innerText = target + '+';
      clearInterval(interval);
    } else {
      counter.innerText = count;
    }
  }, 30);
});

// SCROLL REVEAL
function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', reveal);
reveal();

// WHATSAPP POPUP
setTimeout(() => {
  document.getElementById('waPopup').style.display = 'block';
}, 4000);

function closeWA() {
  document.getElementById('waPopup').style.display = 'none';
}

// THEME TOGGLE
function toggleTheme() {
  document.body.classList.toggle('light');
}

// ADMIN TESTIMONIALS
const list = document.getElementById("testimonialList");

function loadReviews() {
  list.innerHTML = "";
  (JSON.parse(localStorage.getItem("reviews")) || []).forEach(r => {
    const div = document.createElement("div");
    div.className = "testimonial";
    div.innerText = r;
    list.appendChild(div);
  });
}

function addReview() {
  const input = document.getElementById("reviewText");
  if (!input.value) return;
  const data = JSON.parse(localStorage.getItem("reviews")) || [];
  data.push(input.value);
  localStorage.setItem("reviews", JSON.stringify(data));
  input.value = "";
  loadReviews();
}

loadReviews();
</script>
<script>
  if (window.innerWidth > 768) {
    const items = document.querySelectorAll('.parallax-item');

    document.addEventListener('mousemove', (e) => {
      const x = window.innerWidth / 2 - e.clientX;
      const y = window.innerHeight / 2 - e.clientY;

      items.forEach((item) => {
        let depth = 0.03;

        if (item.classList.contains('depth-1')) depth = 0.06; // closest
        if (item.classList.contains('depth-2')) depth = 0.04;
        if (item.classList.contains('depth-3')) depth = 0.02; // farthest

        gsap.to(item, {
          x: -x * depth,
          y: -y * depth,
          rotationX: y * 0.008,
          rotationY: -x * 0.008,
          duration: 0.9,
          ease: "power3.out"
        });
      });
    });
  }

  /* Floating motion */
  gsap.to(".depth-1", {
    y: "+=20",
    duration: 4,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  gsap.to(".depth-2", {
    y: "-=25",
    duration: 5,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  gsap.to(".depth-3", {
    y: "+=15",
    duration: 6,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });
</script>
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}






    
