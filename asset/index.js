document.getElementById('menu').addEventListener('click', () => {
    let x = document.querySelector('.drop-down');
    if (x.style.right === '-5rem') {
        x.style.right = '0px';
        x.style.opacity = '1';
    } else {
        x.style.right = '-5rem';
        x.style.opacity = '0';
    }
});

const x = localStorage.getItem('name');

if (x === null) {
    alert('please fill out the guest book first');
    location.assign('./register.html');
}
