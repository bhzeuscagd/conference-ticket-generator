const UploadArea = document.querySelector(".upload-area"); // Selector Padre con las clases a cambiar
const previewImage = document.getElementById("PreviewImg"); // Selector de la imagen de previsualización
const input = document.getElementById("file-upload"); // Selector del input de archivo

let currentFile = null; // Variable para almacenar el archivo actual

input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  //limpiamos memoria de la URL anterior si existe
  if (currentFile) {
    URL.revokeObjectURL(currentFile);
  }
  // Creamos una URL para el archivo seleccionado y la asignamos a la imagen de previsualización
  currentFile = URL.createObjectURL(file);
  previewImage.src = currentFile;
  // Agregamos las clases del padre para cambiar el estilo
  UploadArea.classList.add("is-uploaded");
});

const removeBtn = document.getElementById("remove-btn"); // Selector del botón de eliminar
const changeBtn = document.getElementById("change-btn"); // Selector del botón de cambiar

removeBtn.addEventListener("click", () => {
  // Limpiamos la URL creada y reseteamos el input y la imagen de previsualización
  input.value = "";

  if (currentFile) {
    URL.revokeObjectURL(currentFile); // Liberamos la memoria
    currentFile = null; // Reseteamos la variable
  }
  // Reseteamos la imagen de previsualización a la imagen por defecto
  previewImage.src = "assets/images/icon-upload.svg";
  UploadArea.classList.remove("is-uploaded");
});

// Evento para el botón de cambiar archivo
changeBtn.addEventListener("click", () => {
  input.click();
});
