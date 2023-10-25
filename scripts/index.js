"use strict";

const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

function deleteCard(ev) {
  const deleteItem = ev.target.closest(".card");
  deleteItem.remove();
}

function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

function addCard(card, container) {
  container.prepend(card);
}

initialCards.forEach(function (cardData) {
  const card = createCard(cardData, deleteCard);
  addCard(card, placesList);
});
