let likes = 0;
let dislikes = 0;

const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const likesSpan = document.getElementById("likes");
const dislikesSpan = document.getElementById("dislikes");

likeBtn.addEventListener("click", () => {
  likes++;
  likesSpan.textContent = likes;
});

dislikeBtn.addEventListener("click", () => {
  dislikes++;
  dislikesSpan.textContent = dislikes;
});

const comentarBtn = document.getElementById("comentarBtn");
const comentarioInput =
  document.getElementById("comentarioInput");
const listaComentarios =
  document.getElementById("listaComentarios");

comentarBtn.addEventListener("click", () => {
  const texto = comentarioInput.value.trim();

  if (texto === "") {
    alert("Digite um comentário.");
    return;
  }

  const div = document.createElement("div");
  div.classList.add("comentario-item");
  div.textContent = texto;

  listaComentarios.prepend(div);

  comentarioInput.value = "";
});
