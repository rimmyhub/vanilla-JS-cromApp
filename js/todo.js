const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input") 위와 같음
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//업데이트가 가능하게 let으로변경
let toDos = [];

//투두리스트 저장하기 스트링으로 전환 todo array를 local storage에 넣는 것
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//부모에 접근해서 버튼 선택 시 사라지게 하기
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//엘리먼트 이벤트로 바디 안에 요소를 추가하기
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  // {text: "i", id:"1021921"}텍스트와 랜덤한 숫자를 제공
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
//배열로 바꾸기 단순한 string을 살아있는 array로 변환

//배열로 변환한걸 forEach로 돌리기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //todo를 복원해서 다시 이전의 todo 정보를 가져옴
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)
}
