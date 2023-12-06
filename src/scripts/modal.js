export function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePressEscapeModal);
  popup.addEventListener("mousedown", closeOnOverlayModal);
}

export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePressEscapeModal);
  popup.removeEventListener("mousedown", closeOnOverlayModal);
}

function closeOnOverlayModal(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

function closePressEscapeModal(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}
