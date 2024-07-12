const header=documnent.querySelector("header");
window.addEventListener("scroll",function())
{
    header.classlist.toggle("sticky",window.scrollY>0);
}
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
document.getElementById('menu-icon').onclick = function() {
    const navlist = document.querySelector('.navlist');
    if (navlist.style.display === 'flex') {
        navlist.style.display = 'none';
    } else {
        navlist.style.display = 'flex';
    }
};
