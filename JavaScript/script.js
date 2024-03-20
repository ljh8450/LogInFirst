const loginForm = document.querySelector("#loginForm");
const loginID = document.createElement("input");
const loginPW = document.createElement("input");
const loginBtn = document.createElement("button");
const loginService = document.querySelector("#loginService");
const makeID = document.createElement("a");
const findID = document.createElement("a");
const findPW = document.createElement("a");

function createInputID(){
    loginID.id = 'loginID';
    loginID.name = 'loginID';
    loginID.placeholder = 'ID';
    loginID.required = true;
    loginForm.appendChild(loginID);
}
function createInputPW(){
    loginPW.id = 'loginPW';
    loginPW.name = 'loginPW';
    loginPW.placeholder = 'PW';
    loginPW.required = true;
    loginForm.appendChild(loginPW);
}
function createInputBTN(){
    loginBtn.id = 'loginBTN';
    loginBtn.innerText = 'LogIn!';
    loginForm.appendChild(loginBtn);
}

function loginClick(click){
    click.preventDefault();
    document.location.href = './HTML/home.html';
}

function createMakeID(){
    makeID.id = 'makeID';
    makeID.innerText = 'Create new ID!'
    makeID.href = "HTML/createID.html";
    loginService.appendChild(makeID);
}

function createFindID(){
    findID.id = 'FindID';
    findID.innerText = 'Find your ID!'
    findID.href = "HTML/findID.html";
    loginService.appendChild(findID);
}

function createFindPW(){
    findPW.id = 'findPW';
    findPW.innerText = 'Find your PW!'
    findPW.href = "HTML/findPW.html";
    loginService.appendChild(findPW);
}

createInputID();
createInputPW();
createInputBTN();
createMakeID();
createFindID();
createFindPW();
loginBtn.addEventListener('click', loginClick);