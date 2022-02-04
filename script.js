
// Elementos DOM -----------------------------------------
const spaceGrey = document.getElementById("space-grey")
const pink = document.getElementById("pink")
const lightGrey = document.getElementById("light-grey")
const colorNm = document.getElementById("color")
const clickBtn1 = document.querySelector(".clickBtn1")
const clickBtn2 = document.querySelector(".clickBtn2")
const countItem = document.getElementById("count-item")
const minusBtn = document.getElementById("minusBtn")
// Elementos DOOM -----------------------------------------

// Contadores da quantidade de produto------------------------
minusBtn.addEventListener("click", () => {
  if(countItem.textContent === "0") {
    minusBtn.disabled = true
  } else if (countItem.textContent >= 0) {
    minusBtn.disabled = false
    countItem.textContent--
  }
})
const plusBtn = document.getElementById("plusBtn").addEventListener("click", () => countItem.textContent++)
// Contadores da quantidade de produto------------------------

// Troca do nome com os botões -----------------


spaceGrey.addEventListener("click", () => colorNm.textContent = "Space Gray")
pink.addEventListener("click", () => colorNm.textContent = "Salmon")
lightGrey.addEventListener("click", () => colorNm.textContent = "Light Gray")
// Troca do nome com os botões -----------------



// Zoom na imagem notebook-------------------
const box = document.getElementById("box-note")
const img = document.querySelector(".note-img")
box.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft
  const y = e.clientY - e.target.offsetTop;

  console.log(x,y);

  img.style.transformOrigin = `${x}px ${y}px`
  img.style.transform = "scale(2)"
})

box.addEventListener("mouseleave", () => {
  img.style.transformOrigin = "center center"
  img.style.transform = "scale(1)"
})

// Zoom na imagem notebook-------------------






