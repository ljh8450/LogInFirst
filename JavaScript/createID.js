const createForm = document.querySelector("#createForm");
const createID = document.createElement('input');
const createPW = document.createElement('input');
const createBtn = document.createElement('button');

function createIDInputID(){
    createID.id = 'createID';
    createID.name = 'createID';
    createID.placeholder = 'ID';
    createID.required = true;
    createForm.appendChild(createID);
}
function createIDInputPW(){
    createPW.id = 'createPW';
    createPW.name = 'createPW';
    createPW.placeholder = 'PW';
    createPW.required = true;
    createForm.appendChild(createPW);
}
function createIDInputBTN(){
    createBtn.id = 'loginBTN';
    createBtn.innerText = 'LogIn!';
    createForm.appendChild(createBtn);
}

createIDInputID();
createIDInputPW();
createIDInputBTN();