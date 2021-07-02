const sideBar = document.querySelector('.sidebar');
const btn = document.querySelector('.toggle_btn');

function toggleSidebar(){
  sideBar.classList.toggle('show')
}

btn.addEventListener('click', toggleSidebar)