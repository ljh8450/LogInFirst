const id = document.getElementById('id')
const pw = document.getElementById('pw')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
  if (id.value == 'abcd'){
    if (pw.value == '0000'){
      location.href = "welcome.html";
    }
    else {
      alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
      errStack++;
    }
  }
  else {
    if (id.value == ''){
      alert('아이디를 입력해주세요!')
    }
    else if (pw.value == ''){
      alert('비밀번호를 입력해주세요!')
    }
    else {
      alert('존재하지 않는 계정입니다.')
    }
  }
  if (errStack >= 5){
    alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.')
  }
})
