export const placesList = document.querySelector(".places__list");
export const cardTemplate = document.querySelector("#card-template").content;

export const popupImage = document.querySelector(".popup_type_image");
export const popupModal = document.querySelectorAll(".popup");
export const img = document.querySelector(".popup__image");
export const imgTitle = document.querySelector(".popup__caption");
/////
export const buttonEdit = document.querySelector(".profile__edit-button");
export const popupEdit = document.querySelector(".popup_type_edit");

export const buttonAdd = document.querySelector(".profile__add-button");
export const popupNewCard = document.querySelector(".popup_type_new-card");

export const popupCloseButtons = document.querySelectorAll(".popup__close");
/////////////редактирование
export const formProfileElement = document.querySelector(
  'form[name="edit-profile"]'
);
export const nameInput = formProfileElement.querySelector(
  ".popup__input_type_name"
);
export const jobInput = formProfileElement.querySelector(
  ".popup__input_type_description"
);

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
//add card
export const formNewCard = document.querySelector(".popup__new-card");
export const newCardNameInput = formNewCard.querySelector(
  ".popup__input_type_card-name"
);
export const newCardUrlInput = formNewCard.querySelector(
  ".popup__input_type_url"
);