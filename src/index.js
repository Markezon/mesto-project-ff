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
  validationConfig,
  profileImage,
  popupNewCardForm,
  popupAvatar,
  popupAvatarForm,
  popupConfirm,
  popupConfirmButton,
  avatarEditBtn,
} from "./scripts/const.js";

import { initialCards } from "./scripts/cards.js";

import {
  deleteCard,
  createCard,
  renderCard,
  likeCard,
} from "./scripts/cardsFunction.js";

import {
  openModal,
  closeModal,
  setOverlayCloseListener,
  popupEscClose,
} from "./scripts/modal.js";

import { enableValidation, clearValidation } from "./scripts/validation.js";

import {
  config,
  getUserIn,
  getInitialCards,
  getInitialIn,
  reNewUserProfile,
  postNewCard,
  putLike,
  deleteLike,
  deleteCard2,
  updateNewAvatar,
  deleteCardAPI,
} from "./scripts/api.js";

//
function renderCards(arr) {
  arr.forEach(renderCard);
}

/* renderCards(initialCards); */

///Edit popup open
buttonEdit.addEventListener("click", () => {
  openModal(popupEdit);
  ///очистка ошибок
  clearValidation(popupEdit, validationConfig);
  ///автозаполнение полей карточки
  jobInput.value = profileDescription.textContent;
  nameInput.value = profileTitle.textContent;
});

buttonAdd.addEventListener("click", () => {
  openModal(popupNewCard);
  ///очистка ошибок
  clearValidation(popupNewCard, validationConfig);
  cleanNewCardInputs();
});

///popup close
popupCloseButtons.forEach((el) => {
  el.addEventListener("click", () => {
    closeModal();
  });
});

/////popup close on overlay
setOverlayCloseListener(popupEdit);
setOverlayCloseListener(popupNewCard);
setOverlayCloseListener(popupImage);
setOverlayCloseListener(popupAvatar);

// Обработчик «отправки» формы

///старая функция
/* function editProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value.trim();
  profileDescription.textContent = jobInput.value.trim();

  closeModal();
} */

/* formProfileElement.addEventListener("submit", (evt) =>
  editProfileFormSubmit(evt)
); */

formProfileElement.addEventListener("submit", (evt) =>
  handleProfileFormSubmit(evt)
);

//add card старая
/* function addNewCard(evt) {
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
} */

///функция очистки формы новой карты
function cleanNewCardInputs() {
  newCardNameInput.value = "";
  newCardUrlInput.value = "";
}

/////////////////Добавление новой карточки на сервер///////////////////
const handleNewCardFormSubmit = async (evt) => {
  evt.preventDefault();
  showLoadingBtn(true, formProfileElement.querySelector(".popup__button"));
  const newCard = {
    name: newCardNameInput.value,
    link: newCardUrlInput.value,
    alt: newCardNameInput.value,
  };

  postNewCard(newCard)
    .then((newCard) => {
      renderCard(newCard);
      closeModal();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      showLoadingBtn(false, formProfileElement.querySelector(".popup__button"));
    });
};

/* formNewCard.addEventListener("submit", (evt) => addNewCard(evt)); */
formNewCard.addEventListener("submit", (evt) => handleNewCardFormSubmit(evt));
/////

//////button loading пока данные загружаются
const showLoadingBtn = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

//////////////////добавление новых данных пользователя//////////////

const handleProfileFormSubmit = async (evt) => {
  evt.preventDefault();
  showLoadingBtn(true, formProfileElement.querySelector(".popup__button"));

  reNewUserProfile({
    name: formProfileElement.name.value,
    about: formProfileElement.description.value,
  })
    .then((newProfile) => {
      fillProfileInfo(newProfile);
      closeModal();
      clearValidation(formProfileElement, validationConfig);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      showLoadingBtn(false, formProfileElement.querySelector(".popup__button"));
    });
};

////avatar popup
avatarEditBtn.addEventListener("click", () => {
  openModal(popupAvatar);
  clearValidation(popupAvatarForm, validationConfig);
  popupAvatarForm.reset();
});

/////смена аватара
const handleAvatarFormSubmit = async (evt) => {
  evt.preventDefault();

  showLoadingBtn(true, popupAvatarForm.querySelector(".popup__button"));

  updateNewAvatar(popupAvatarForm.link.value)
    .then((newProfile) => {
      fillProfileInfo(newProfile);
      closeModal();
      clearValidation(popupAvatarForm, validationConfig);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      showLoadingBtn(false, popupAvatarForm.querySelector(".popup__button"));
    });
};

popupAvatarForm.addEventListener("submit", handleAvatarFormSubmit);

///заполнение полей профайла
const fillProfileInfo = (userInfo) => {
  profileTitle.textContent = userInfo.name;
  profileDescription.textContent = userInfo.about;
  profileImage.style.backgroundImage = `url(${userInfo.avatar})`;
};

////работа с API
getInitialIn()
  .then((result) => {
    const userInfo = result[0];
    const initialCardsArr = result[1];

    fillProfileInfo(userInfo);
    renderCards(initialCardsArr);
  })
  .catch((err) => {
    console.log(err);
  });

///валидация
enableValidation(validationConfig);
