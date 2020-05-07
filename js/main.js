const chatList = document.querySelector(".chat-list");
const chatBtn = document.querySelector(".chatBtn");
let chatText = document.querySelector(".chatText");
const ul = document.createElement("ul");
const headerSearch = document.querySelector(".header-search");
const headerSearchNone = document.querySelector(".header-searchNone");
const searchNoneFirstItem = document.querySelector(".searchNone-firstItem");
let id = 0;

const chatAdd = () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const button = document.createElement("button");
  span.className = "userId";
  span.innerText = "ljtaek2";
  span.style.marginRight = "7px";
  button.type = "button";
  button.innerText = "X";
  div.append(span);
  div.append(chatText.value);
  div.style.display = "flex";
  li.appendChild(div);
  li.appendChild(button);
  button.id = id;
  li.id = id;
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  ul.appendChild(li);
  chatList.appendChild(ul);
  chatText.value = "";
  id++;
};

// 댓글 추가
chatBtn.addEventListener("click", chatAdd);

// 버튼이 아니라 chatText에 이벤트를 한 이유는 button태그가 아니라 input태그에서 키보드를 인식하기 때문에
chatText.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    chatAdd();
  }
});

// 게시 버튼 활성화
chatText.addEventListener("keyup", () => {
  chatBtn.classList.add("chatBtnHover");
  if (chatText.value.length === 0) {
    chatBtn.classList.remove("chatBtnHover");
  }
});

// 검색창 바뀌는 부분
headerSearchNone.style.display = "none";
headerSearch.addEventListener("click", () => {
  headerSearch.style.display = "none";
  headerSearchNone.style.display = "inline-flex";
  searchNoneFirstItem.childNodes[3].focus();
});

// input 포커스 주기
headerSearchNone.addEventListener("focusout", () => {
  headerSearch.style.display = "inline-flex";
  headerSearchNone.style.display = "none";
});

// 댓글 삭제
ul.addEventListener("click", (e) => {
  console.log(e.target.parentElement.id);
  console.log(e.target.id);
  e.target.parentElement.remove();
});
