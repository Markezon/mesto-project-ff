import "./pages/index.css"; /// добавляем импорт главного файла стилей

import { createCard, likeCard, getCardForDeletion } from "./scripts/card.js";

import { openModal, closeModal } from "./scripts/modal.js";

import { enableValidation, clearValidation } from "./scripts/validation.js";

import {
  getUserInfo,
  getInitialCards,
  getInitialInfo,
  deleteMyCard,
  editProfile,
  postNewCard,
  updateNewAvatar,
} from "./scripts/api.js";

import { validationConfig } from "./scripts/validation.js";

/// для создания карточки
const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

/// Функция добавления карточки
function addCard(
  card,
  placesList,
  cardTemplate,
  createCard,
  likeCard,
  showImgPopup,
  openDeletePopup,
  profileId
) {
  const cardElement = createCard(
    card,
    cardTemplate,
    likeCard,
    showImgPopup,
    openDeletePopup,
    profileId
  );
  placesList.append(cardElement);
}

/// Функция заполнения страницы карточками
function fillCards(initialCards, profileId) {
  initialCards.forEach((card) => {
    addCard(
      card,
      placesList,
      cardTemplate,
      createCard,
      likeCard,
      showImgPopup,
      openDeletePopup,
      profileId
    );
  });
}

/// Функция button loading пока данные загружаются
const showLoadingBtn = (isLoading, button) => {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
};

/// Popup редактирования профиля
const editPopup = document.querySelector(".popup_type_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = editPopup.querySelector(".popup__close");
const editForm = document.querySelector('form[name="edit-profile"]');
const nameInput = editForm.querySelector(".popup__input_type_name");
const jobInput = editForm.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editSaveButton = editPopup.querySelector(".popup__button");

profileEditButton.addEventListener("click", () => {
  openModal(editPopup);
  fillPopupEditInputs();
  clearValidation(editForm, validationConfig);
});

closeEditButton.addEventListener("click", () => {
  closeModal(editPopup);
});

/// Функция сохранения полей ввода формы
function fillPopupEditInputs() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

/// Функция редактирования профиля
function handleEditForm(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  showLoadingBtn(true, editPopup.querySelector(".popup__button"));
  editSaveButton.disabled = true;
  editProfile(nameValue, jobValue)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      closeModal(editPopup);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      showLoadingBtn(false, editPopup.querySelector(".popup__button"));
    });
}

editForm.addEventListener("submit", handleEditForm);

/// Popup добавления карточек
const addCardPopup = document.querySelector(".popup_type_new-card");
const openAddButton = document.querySelector(".profile__add-button");
const closeAddButton = addCardPopup.querySelector(".popup__close");
const addForm = document.querySelector('form[name="new-place"]');
const cardInput = addForm.querySelector(".popup__input_type_card-name");
const linkInput = addForm.querySelector(".popup__input_type_url");
const addSaveButton = addCardPopup.querySelector(".popup__button");

openAddButton.addEventListener("click", () => {
  openModal(addCardPopup);
  addForm.reset();
  clearValidation(addForm, validationConfig);
});

closeAddButton.addEventListener("click", () => {
  closeModal(addCardPopup);
});

/// Функция загрузки с сервера и добавления карточек на страницу
function handleAddForm(evt) {
  evt.preventDefault();
  const cardValue = cardInput.value;
  const linkValue = linkInput.value;
  showLoadingBtn(true, addForm.querySelector(".popup__button"));
  addSaveButton.disabled = true;
  postNewCard(cardValue, linkValue)
    .then((card) => {
      const newCard = createCard(
        card,
        cardTemplate,
        likeCard,
        showImgPopup,
        openDeletePopup,
        profileId
      );
      placesList.prepend(newCard);
      closeModal(addCardPopup);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      addForm.reset();
      showLoadingBtn(false, addForm.querySelector(".popup__button"));
    });
}

addForm.addEventListener("submit", handleAddForm);

/// Popup увеличение картинок
const imgPopup = document.querySelector(".popup_type_image");
const closePhotoButton = imgPopup.querySelector(".popup__close");
const zoomedPopupImage = imgPopup.querySelector(".popup__image");
const imgPopupCaption = imgPopup.querySelector(".popup__caption");

closePhotoButton.addEventListener("click", () => {
  closeModal(imgPopup);
});

/// Функция показа Popup увеличения картинок
function showImgPopup(evt) {
  openModal(imgPopup);
  zoomedPopupImage.setAttribute("src", evt.target.src);
  zoomedPopupImage.setAttribute("alt", evt.target.alt);
  imgPopupCaption.textContent = evt.target.alt;
}

/// Popup редактирования аватара
const profileImageButton = document.querySelector(".profile__image_cover");
const profileImage = document.querySelector(".profile__image");
const profilePopup = document.querySelector(".popup_type_avatar");
const closeProfileButton = profilePopup.querySelector(".popup__close");
const profileForm = document.forms["avatar_edit"];
const profileLinkInput = profileForm.querySelector(".popup__input_type_url");
const profileSaveButton = profilePopup.querySelector(".popup__button");

profileImageButton.addEventListener("click", () => {
  openModal(profilePopup);
  profileForm.reset();
  clearValidation(profileForm, validationConfig);
});

closeProfileButton.addEventListener("click", () => {
  closeModal(profilePopup);
});

/// Функция смены аватара
function handleProfileForm(evt) {
  evt.preventDefault();
  const linkValue = profileLinkInput.value;
  profileImage.style.backgroundImage = linkValue;
  showLoadingBtn(true, profilePopup.querySelector(".popup__button"));
  profileSaveButton.disabled = true;
  updateNewAvatar(linkValue)
    .then((res) => {
      profileImage.style.backgroundImage = `url('${res.avatar}')`;
      closeModal(profilePopup);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      profileForm.reset();
      showLoadingBtn(false, profileForm.querySelector(".popup__button"));
    });
}

profileForm.addEventListener("submit", handleProfileForm);

/// Popup удаления карточки с сервера
const deletePopup = document.querySelector(".popup_type_delete");
const closeDeleteButton = deletePopup.querySelector(".popup__close");
const deleteForm = document.querySelector('form[name="delete-card"');

const openDeletePopup = () => {
  openModal(deletePopup);
};

const closeDeletePopup = () => {
  closeModal(deletePopup);
};

closeDeleteButton.addEventListener("click", closeDeletePopup);

/// Функция удаления карточки
function deleteThisCard({ cardId, deleteButton }) {
  deleteMyCard(cardId)
    .then(() => {
      const deleteItem = deleteButton.closest(".places__item");
      deleteItem.remove();
      closeDeletePopup();
    })
    .catch((error) => {
      console.log(error);
    });
}

///функция подтверждения удаления карточки
function handleDeleteForm(evt) {
  evt.preventDefault();
  deleteThisCard(getCardForDeletion());
}

deleteForm.addEventListener("submit", handleDeleteForm);

///вызов функции получение информации о пользователе и карточках с сервера и заполнение ими страницы
let profileId;

getInitialInfo();
Promise.all([getUserInfo(), getInitialCards()])
  .then((array) => {
    const [userList, initialCards] = array;
    profileTitle.textContent = userList.name;
    profileDescription.textContent = userList.about;
    profileId = userList._id;
    profileImage.style.backgroundImage = `url(${userList.avatar})`;
    fillCards(initialCards, profileId);
  })
  .catch((error) => {
    console.log(error);
  });

///валидация
enableValidation(validationConfig);
