import { popupImage, popupModal, img, imgTitle } from "./const.js";

export function openModal(popupName) {
  popupName.classList.add("popup_is-opened");
  window.addEventListener("keydown", popupEscClose);
}

export function closeModal(popupName) {
  popupName.classList.remove("popup_is-opened");
  window.removeEventListener("keydown", popupEscClose);
}

export function closePopupOnCross() {
  for (let i = 0; i < popupModal.length; i++) {
    if (popupModal[i].classList.contains("popup_is-opened")) {
      popupModal[i].classList.remove("popup_is-opened");
    }
  }
}

export function closeModalOver(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

export function setOverlayCloseListener(popup) {
  popup.addEventListener("mousedown", closeModalOver);
}

export function popupEscClose(evt) {
  if (evt.key === "Escape") {
    const modalIsOpen = document.querySelector(".popup_is-opened");
    modalIsOpen.classList.remove("popup_is-opened");
  }
}

/////

export function showImage(evt) {
  openModal(popupImage);

  img.setAttribute("src", evt.target.src);
  img.setAttribute("alt", evt.target.alt);
  imgTitle.textContent = evt.target.alt;
}
