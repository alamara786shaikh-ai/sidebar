const cl = console.log;

const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
const sideBarOpen = document.getElementById('sideBarOpen')
const sideBarClose = document.getElementById('sideBarClose')


function toggleSideBar(){
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

sideBarOpen.addEventListener('click', toggleSideBar)
sideBarClose.addEventListener('click', toggleSideBar)
overlay.addEventListener('click', toggleSideBar)