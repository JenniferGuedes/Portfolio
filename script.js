/*Abrir e fechar menu hambúrguer*/
function showsidebar(){
  const sidebar = document.querySelector(".sidebar");
  const menu = document.querySelector(".menu");
  sidebar.style.display = "flex";
  menu.classList.add("oculta");
}

function hidesidebar(){
  const sidebar = document.querySelector(".sidebar");
  const menu = document.querySelector(".menu");
  sidebar.style.display = "none";
  menu.classList.remove("oculta");
}

/*Cursor de Abelhinha*/
const cursorAbelha = document.querySelector('.cursor');
const offsetX = 10; // distância do ponto de clique na horizontal
const offsetY = 15; // distância do ponto de clique na vertical

document.addEventListener('mousemove', (e) => {
  cursorAbelha.style.left = `${e.clientX - offsetX}px`;
  cursorAbelha.style.top = `${e.clientY - offsetY}px`;
});
