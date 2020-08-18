const joinBtn = document.getElementById('btn');

joinBtn.addEventListener('click', showModal);

function showModal(){
    document.querySelector('#modal').style.visibility = 'visible';
}

const response = document.getElementById('response');
response.addEventListener('click', hideModal);


function hideModal(){
    document.querySelector('#modal').style.visibility = 'hidden';
}