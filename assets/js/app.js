const cl = console.log;

const tabheads = [...document.querySelectorAll('.tabhead li')];

function onTabHandler(eve) {
    const targetId = eve.target.dataset.id
    document.querySelector('.tabhead .active').classList.remove('active');
    eve.target.classList.add('active');
    let visibleDiv = document.querySelector('.tab-content.active');
    visibleDiv.classList.remove('active');
    let selectedDiv = document.getElementById(targetId);
    selectedDiv.classList.add('active');
}


tabheads.forEach(li => {
    li.addEventListener('click', onTabHandler)
})