const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// hidden이라는 값을 중복되게 쓰일때, 대문자로 쓴다 변수로 고정시킬 수 있따.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  //브라우저의 기본동작을 막아줄거고 그건 페이지 새로고침
  event.preventDefault();
  // from을 숨겨줄 것
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //키 값쪽으로 사용자 이름 정보를 넣어주기
  localStorage.setItem(USERNAME_KEY, username);
  painGreetings(username)
}


//중복된 기능을 사용하는 경우 뭉텅이로 쓸 수 있음
function painGreetings(username){
  //이름 입력 후 사용자 이름을 텍스트로 보여주기
  greeting.innerText = `Hello ${username}`
  //이름 입력 후 인풋 박스 검색 사라지게 하기
  greeting.classList.remove(HIDDEN_CLASSNAME)
}



const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  painGreetings(savedUsername)
}