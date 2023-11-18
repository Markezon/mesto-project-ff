import "./pages/index.css"; // добавьте импорт главного файла стилей

import { initialCards } from "./scripts/cards.js";

import {
  placesList,
  /*   cardTemplate, */
  deleteCard,
  createCard,
  addCard,
  /*   like, */
} from "./scripts/cardsFunction.js";

import {
  openModal,
  closeModal,
  /*   closeModalOver, */
  closeOnOverlay,
  /*   modalEscClose, */
  popupCrossClose,
  popupImage,
  /*   popupEscClose, */
} from "./scripts/modal.js";

function renderCard(arr) {
  arr.forEach(function (cardData) {
    const card = createCard(cardData, deleteCard);
    addCard(card, placesList);
  });
}

renderCard(initialCards);

/////popup
const editButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");

const addButton = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");

const popupCloseButton = document.querySelectorAll(".popup__close");

editButton.addEventListener("click", () => openModal(popupEdit));
addButton.addEventListener("click", () => openModal(popupNewCard));

popupCloseButton.forEach(popupCrossClose);
closeOnOverlay(popupEdit);
closeOnOverlay(popupNewCard);
closeOnOverlay(popupImage);
////

/////////////редактирование

const formElement = document.querySelector(".popup__content");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const form = document.querySelector(".popup__content");

///автозаполнение полей карточки
jobInput.value = profileDescription.textContent;
nameInput.value = profileTitle.textContent;

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value.trim();
  profileDescription.textContent = jobInput.value.trim();

  closeModal(popupEdit);
}

form.addEventListener("submit", (evt) => handleFormSubmit(evt));

//add card

const formNewCard = document.querySelector(".popup__content2");
const NewCardNameInput = formNewCard.querySelector(
  ".popup__input_type_card-name"
);
const NewCardUrlInput = formNewCard.querySelector(".popup__input_type_url");

function addNewCard(evt) {
  evt.preventDefault();

  const newCard = [{}];
  newCard[0].name = NewCardNameInput.value;
  newCard[0].link = NewCardUrlInput.value;
  newCard[0].alt = "";
  ///самая элементарная проверка
  if (
    NewCardNameInput.value.trim() !== "" &&
    NewCardUrlInput.value.trim() !== ""
  ) {
    renderCard(newCard);
    closeModal(popupNewCard);
    NewCardNameInput.value = "";
    NewCardUrlInput.value = "";
  }
}

formNewCard.addEventListener("submit", (evt) => addNewCard(evt));
