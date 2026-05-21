const navLinks=document.getElementById('navLinks');
function toggleMenu(){navLinks.classList.toggle('open')}document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

document.getElementById('year').textContent=new Date().getFullYear();
