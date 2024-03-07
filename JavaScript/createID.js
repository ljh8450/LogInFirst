const createForm = document.querySelector("#createForm");
const createID = document.createElement('input');
const createPW = document.createElement('input');
const createInputEmail = document.createElement('input');
const sendEmailBTN = document.createElement('button');
const createCheckBirthForm = document.createElement('div');
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
function createIDInputEmail(){
    createInputEmail.id = 'createEmail';
    createInputEmail.name = 'createEmail';
    createInputEmail.placeholder = 'Write your e-mail';
    createInputEmail.required = true;
    createForm.appendChild(createInputEmail);
}
function createEmailBTN(){
    sendEmailBTN.id = 'sendEmail';
    sendEmailBTN.innerText = 'Send e-mail';
    createForm.appendChild(sendEmailBTN);
}
function createIDInputBTN(){
    createBtn.id = 'loginBTN';
    createBtn.innerText = 'Create new ID!';
    createForm.appendChild(createBtn);
}

createIDInputID();
createIDInputPW();
createIDInputEmail();
createEmailBTN();
createIDInputBTN();