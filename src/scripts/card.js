import { putLike, deleteLike } from "./api.js";

let currentCardId, currentDeleteButton;

export function likeCard(likeButton, likeCounter, cardId) {
  const likeMethod = likeButton.classList.contains(
    "card__like-button_is-active"
  )
    ? deleteLike
    : putLike;
  likeMethod(cardId)
    .then((updatedCard) => {
      likeButton.classList.toggle("card__like-button_is-active");
      likeCounter.textContent = updatedCard.likes.length;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function createCard(
  card,
  cardTemplate,
  likeCard,
  showImgPopup,
  openDeletePopup,
  profileId
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCounter = cardElement.querySelector(".card__like-count");
  const cardId = card._id;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  likeCounter.textContent = card.likes.length;

  ///проверка лайка
  const isLiked = card.likes.some((like) => like._id === profileId);
  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", () => {
    likeCard(likeButton, likeCounter, cardId);
  });

  cardImage.addEventListener("click", showImgPopup);

  /// проверка на авторство карточки
  if (card.owner._id == profileId) {
    deleteButton.classList.remove("card__delete-button-unactive");
  }

  /// Удаление карточки
  deleteButton.addEventListener("click", () => {
    currentCardId = cardId;
    currentDeleteButton = deleteButton;
    openDeletePopup();
  });

  return cardElement;
}

export function getCardForDeletion() {
  return { cardId: currentCardId, deleteButton: currentDeleteButton };
}
