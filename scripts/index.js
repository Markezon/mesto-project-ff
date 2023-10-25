"use strict";

const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

function deleteCard(ev) {
  const deleteItem = ev.target.closest(".card");
  deleteItem.remove();
}

function addCard(i, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = i.link;
  cardElement.querySelector(".card__title").textContent = i.name;
  cardElement.querySelector(".card__image").alt = i.alt;
  placesList.append(cardElement);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteCard);
}

initialCards.forEach(function (i) {
  addCard(i, deleteCard);
});
