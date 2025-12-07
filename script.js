const UploadArea = document.querySelector(".upload-area");
const previewImage = document.getElementById("PreviewImg");
const input = document.getElementById("file-upload");
const pesoInfoError = document.getElementById("peso-info-error");
const pesoInfo = document.getElementById("peso-info");
const emailInfoError = document.getElementById("email-info-error");
const photoUploadError = document.getElementById("upload-info-error");
const email = document.getElementById("email-address");
const textInfo = document.getElementById("text-info");
const actionButtons = document.getElementById("action");
let currentFile = null;

// ---------------------------
// Subida de imagen
// ---------------------------
input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // Validación tamaño 500KB
  if (file.size > 500 * 1024) {
    pesoInfoError.style.display = "flex";
    pesoInfo.style.display = "none";
    photoUploadError.style.display = "none";
    input.value = "";
    return;
  }

  // Ocultar errores
  pesoInfoError.style.display = "none";
  photoUploadError.style.display = "none";
  pesoInfo.style.display = "flex";

  // Eliminar URL previa
  if (currentFile) URL.revokeObjectURL(currentFile);

  currentFile = URL.createObjectURL(file);
  previewImage.src = currentFile;

  UploadArea.classList.add("is-uploaded");

  // Mostrar botones y ocultar texto
  textInfo.style.display = "none";
  actionButtons.style.display = "flex";
});

// ---------------------------
// Botón Remove
// ---------------------------
const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", () => {
  input.value = "";

  if (currentFile) {
    URL.revokeObjectURL(currentFile);
    currentFile = null;
  }

  previewImage.src = "assets/images/icon-upload.svg";
  UploadArea.classList.remove("is-uploaded");

  // Reset de mensajes
  pesoInfoError.style.display = "none";
  photoUploadError.style.display = "none";
  pesoInfo.style.display = "flex";

  // UI por defecto
  textInfo.style.display = "flex";
  actionButtons.style.display = "none";
});

// ---------------------------
// Botón Change
// ---------------------------
const changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", () => input.click());

// ---------------------------
// Validación Email en vivo
// ---------------------------
email.addEventListener("input", () => {
  const value = email.value.trim();

  if (value === "") {
    emailInfoError.style.display = "none";
    email.classList.remove("error");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    emailInfoError.style.display = "flex";
    email.classList.add("error");
  } else {
    emailInfoError.style.display = "none";
    email.classList.remove("error");
  }
});

// ---------------------------
// Submit del formulario
// ---------------------------
document.getElementById("ticket-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("full-name").value.trim();
  const emailValue = email.value.trim();
  let githubUsername = document.getElementById("github-username").value.trim();

  // Forzar @
  if (!githubUsername.startsWith("@")) {
    githubUsername = "@" + githubUsername;
  }

  // Tomar 2 nombres máximo
  const nameParts = fullName.split(" ").filter(Boolean);
  const displayName = nameParts.slice(0, 2).join(" ");

  const randomTicketNumber = "#" + Math.floor(100000 + Math.random() * 900000);

  // ---------------------------
  // Validar que haya imagen subida
  // ---------------------------
  if (!currentFile) {
    photoUploadError.style.display = "flex";

    // Ocultar TODOS los demás mensajes para evitar duplicados
    pesoInfoError.style.display = "none";
    pesoInfo.style.display = "none";

    // Restaurar estado visual
    actionButtons.style.display = "none";
    textInfo.style.display = "flex";

    return;
  }

  photoUploadError.style.display = "none";

  // ---------------------------
  // Llenar ticket
  // ---------------------------
  document.getElementById("yourname").textContent = displayName;
  document.getElementById("Email").textContent = emailValue;

  document.getElementById("ticket-photo").src =
    currentFile || "assets/images/image-avatar.jpg";

  document.getElementById("name-userticket").textContent = displayName;
  document.getElementById("github-userticket").textContent = githubUsername;
  document.getElementById("number-ticket").textContent = randomTicketNumber;

  // Mostrar ticket
  document.querySelector(".generated-tickets").style.display = "flex";
  document.querySelector(".form").style.display = "none";
});
