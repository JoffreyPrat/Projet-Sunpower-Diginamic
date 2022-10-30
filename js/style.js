// Nav bar burger menu

const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Mettre la taille a 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* mettre la taille a 0px */
function closeNav() {
  sidenav.classList.remove("active");
}

// Fin nav bar burger menu 