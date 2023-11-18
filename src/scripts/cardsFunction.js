import { showImage, img, imgTitle } from "./modal.js";

export const placesList = document.querySelector(".places__list");
export const cardTemplate = document.querySelector("#card-template").content;

export function deleteCard(ev) {
  const deleteItem = ev.target.closest(".card");
  deleteItem.remove();
}

export function like(evt) {
  let target = evt.target;
  target.classList.toggle("card__like-button_is-active");
}

export function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);

  const cardLike = cardElement.querySelector(".card__like-button");
  cardLike.addEventListener("click", (evt) => like(evt));

  cardImage.addEventListener("click", (evt) => showImage(evt));

  return cardElement;
}

export function addCard(card, container) {
  container.prepend(card);
}
