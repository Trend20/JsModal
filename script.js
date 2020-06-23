const joinBtn = document.getElementById('btn');

joinBtn.addEventListener('click', showModal);

function showModal(){
    document.querySelector('#modal').style.visibility = 'visible';
}