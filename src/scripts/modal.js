import { popupImage, img, imgTitle } from "./const.js";

export function openModal(popupName) {
  popupName.classList.add("popup_is-opened");
  window.addEventListener("keydown", popupEscClose);
}

export function closeModal() {
  if (document.querySelector(".popup_is-opened")) {
    const openedModal = document.querySelector(".popup_is-opened");
    openedModal.classList.remove("popup_is-opened");
  }
  window.removeEventListener("keydown", popupEscClose);
}

export function closeModalOver(evt) {
  if (evt.target.classList.contains("popup")) {
    evt.target.classList.remove("popup_is-opened");
    window.removeEventListener("keydown", popupEscClose);
  }
}

export function setOverlayCloseListener(popup) {
  popup.addEventListener("mousedown", closeModalOver);
}

export function popupEscClose(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

export function showImage(evt) {
  openModal(popupImage);

  img.setAttribute("src", evt.target.src);
  img.setAttribute("alt", evt.target.alt);
  imgTitle.textContent = evt.target.alt;
}
