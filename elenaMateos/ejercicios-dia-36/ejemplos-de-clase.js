/* -- Necesitaremos:
---- EDITAR Y BORRAR ---
*/
// Selectores
var slcTarea = document.getElementById("tarea")
var slcLista = document.getElementById("lista")
var slcTextInfo = document.getElementById("txt-info")

// Funciones
function updateList(value){
  var currentTasks = JSON.parse(localStorage.getItem("tareas")) || [];
  currentTasks.push(value)
  localStorage.setItem("tareas", JSON.stringify(currentTasks))
  updateHtml(value);
}

function updateHtml(item){
  slcTextInfo.style.display = "none";
  slcLista.innerHTML += `<li>${item}</li>`;
}

// Eventos
slcTarea.addEventListener("keypress", function(e){
  if(e.keyCode === 13){
    updateList(slcTarea.value.trim())
    slcTarea.value = "";
  }
} )

// Arranque
var items = JSON.parse(localStorage.getItem("tareas"))
if(Array.isArray(items)){
  items.forEach(function(item){
    updateHtml(item)
  })
} else {
  slcTextInfo.style.display = "block"
}
