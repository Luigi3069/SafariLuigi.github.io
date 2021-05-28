const storageInput = document.querySelector('.tab');
const storedInput = localStorage.getItem('tabinput');

function swap1() {
    console.log('test');
    if(document.getElementById('menu1').onclick) {
        console.log('I LIVE');
        document.getElementById('notes').style.display = 'block';
        document.getElementById('rolls').style.display = 'none';
        document.getElementById('guardians').style.display = 'none';
        document.body.style.backgroundColor = "white";
    }
}
function swap2() {
    console.log('test');
    if(document.getElementById('menu2').onclick) {
        console.log('I LIVE');
        document.getElementById('rolls').style.display = 'block';
        document.getElementById('notes').style.display = 'none';
        document.getElementById('guardians').style.display = 'none';
        document.body.style.backgroundColor = "white";
    }
}
function swap3() {
    console.log('test');
    if(document.getElementById('menu3').onclick) {
        console.log('I LIVE');
        document.getElementById('guardians').style.display = 'block';
        document.getElementById('rolls').style.display = 'none';
        document.getElementById('notes').style.display = 'none';
        document.body.style.backgroundColor = "black";
    }
}
const savetolocalstorage = () => {
    localStorage.setItem('tabinput')
}
//tab.addEventListener('click', savetolocalstorage)

