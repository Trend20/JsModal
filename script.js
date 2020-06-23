const joinBtn = document.getElementById('btn');

joinBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
    document.querySelector('body').style.backgroundColor = 'red';
}