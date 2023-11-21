import "./pages/index.css"; // добавьте импорт главного файла стилей

import {
  popupImage,
  buttonEdit,
  popupEdit,
  buttonAdd,
  popupNewCard,
  popupCloseButtons,
  formProfileElement,
  nameInput,
  jobInput,
  profileTitle,
  profileDescription,
  formNewCard,
  newCardNameInput,
  newCardUrlInput,
} from "./scripts/const.js";
import { initialCards } from "./scripts/cards.js";

import { deleteCard, createCard, renderCard } from "./scripts/cardsFunction.js";

import {
  openModal,
  closeModal,
  setOverlayCloseListener,
  popupEscClose,
} from "./scripts/modal.js";
//
function renderCards(arr) {
  arr.forEach(renderCard);
}

renderCards(initialCards);

///popup open
buttonEdit.addEventListener("click", () => {
  openModal(popupEdit);
  ///автозаполнение полей карточки
  jobInput.value = profileDescription.textContent;
  nameInput.value = profileTitle.textContent;
});

buttonAdd.addEventListener("click", () => openModal(popupNewCard));

///popup close
popupCloseButtons.forEach((el) => {
  el.addEventListener("click", () => closeModal());
});

/////
setOverlayCloseListener(popupEdit);
setOverlayCloseListener(popupNewCard);
setOverlayCloseListener(popupImage);

// Обработчик «отправки» формы

function editProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value.trim();
  profileDescription.textContent = jobInput.value.trim();
  closeModal();
}

formProfileElement.addEventListener("submit", (evt) =>
  editProfileFormSubmit(evt)
);

//add card

function addNewCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: newCardNameInput.value,
    link: newCardUrlInput.value,
    alt: newCardNameInput.value,
  };

  ///самая элементарная проверка
  if (
    newCardNameInput.value.trim() !== "" &&
    newCardUrlInput.value.trim() !== ""
  ) {
    renderCard(newCard);
    closeModal();
    newCardNameInput.value = "";
    newCardUrlInput.value = "";
  }
}

formNewCard.addEventListener("submit", (evt) => addNewCard(evt));
