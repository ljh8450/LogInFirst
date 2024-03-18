const createForm = document.querySelector("#findPWForm");
const createID = document.createElement('input');
const createPW = document.createElement('input');
const createInputEmail = document.createElement('input');
const sendEmailBTN = document.createElement('button');
const checkEmailInput = document.createElement('input');
const emailTime = document.createElement('p');
const extendTime = document.createElement('button');
const checkEmailBTN = document.createElement('button');
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
    createInputEmail.placeholder = 'Write your E-Mail';
    createInputEmail.required = true;
    createForm.appendChild(createInputEmail);
}
function createEmailBTN(){
    sendEmailBTN.id = 'sendEmail';
    sendEmailBTN.innerText = 'Send E-Mail';
    createForm.appendChild(sendEmailBTN);
}
function createCheckEmail(){
    checkEmailInput.id = 'checkEmailInput';
    checkEmailInput.name = 'checkEmailInput';
    checkEmailInput.placeholder = 'Input code!(check your E-Mail)';
    createForm.appendChild(checkEmailInput);
}
function createDisplayTime(){
    emailTime.id = 'emailTime';
    emailTime.innerText = '00:00';
    extendTime.id = 'extendTime';
    extendTime.innerText = 'Extend Time!';
    createForm.appendChild(emailTime);
    createForm.appendChild(extendTime);
}
function createCheckEmailBTN(){
    checkEmailBTN.id = 'checkEmailBTN';
    checkEmailBTN.innerText = 'checkEmailBTN';
    createForm.appendChild(checkEmailBTN);
}
function createIDInputBTN(){
    createBtn.id = 'loginBTN';
    createBtn.innerText = 'Create new ID!';
    createForm.appendChild(createBtn);
}

createIDInputID();
// createIDInputPW();
createIDInputEmail();
createEmailBTN();
createCheckEmail();
createDisplayTime();
createCheckEmailBTN();
// createIDInputBTN();