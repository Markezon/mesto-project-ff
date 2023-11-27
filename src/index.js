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

  ///самая элементарная проверка///
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

/////////////////////////////////////////валидация////////////////////////////////////////////////

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add("popup__button_inactive");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__button_inactive");
  }
};

enableValidation();
