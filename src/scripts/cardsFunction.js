import { showImage } from "./modal.js";
import { placesList, cardTemplate } from "./const.js";

export function deleteCard(ev) {
  const itemDelete = ev.target.closest(".card");
  itemDelete.remove();
}

export function like(evt) {
  const target = evt.target;
  target.classList.toggle("card__like-button_is-active");
}

export function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  const buttonDelete = cardElement.querySelector(".card__delete-button");
  buttonDelete.addEventListener("click", deleteCard);

  const cardLike = cardElement.querySelector(".card__like-button");
  cardLike.addEventListener("click", (evt) => like(evt));

  cardImage.addEventListener("click", (evt) => showImage(evt));

  return cardElement;
}

export function addCard(card, container) {
  container.prepend(card);
}

export function renderCard(cardData) {
  const card = createCard(cardData, deleteCard);
  addCard(card, placesList);
}
