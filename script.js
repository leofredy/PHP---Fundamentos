const navbarComponent = document.querySelector('nav');
const tableComponent = document.querySelector('table');
const lightSwitchComponent = document.querySelector('.light-switch');

lightSwitchComponent.addEventListener('click', event => {
    
    navbarComponent.classList.toggle('navbar-dark');
    navbarComponent.classList.toggle('bg-dark');
    navbarComponent.classList.toggle('navbar-light');
    navbarComponent.classList.toggle('bg-light');

    tableComponent.classList.toggle('table-dark');
    if (tableComponent.classList.length === 1) {
        tableComponent.style.backgroundColor = '#FFF';
    } else {
        tableComponent.style.backgroundColor = '#343a40';
    }

    
    lightSwitchComponent.classList.toggle('btn-dark');
    lightSwitchComponent.classList.toggle('btn-light');

    lightSwitchComponent.blur();
    console.log(document.activeElement)
});