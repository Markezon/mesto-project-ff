import { showImage } from "./modal.js";
import { placesList, cardTemplate } from "./const.js";
import {
  deleteLike,
  putLike,
  getUserIn,
  deleteCardAPI,
  config,
} from "./api.js";

///удаление карты в том числе и с сервера
export function deleteCard(ev) {
  const itemDelete = ev.target.closest(".card");
  const cardId = itemDelete.dataset.cardId;
  deleteCardAPI(cardId);
  itemDelete.remove();
}
///функция лайка
export function like(evt, cardId) {
  const target = evt.target;

  let currentLikes = evt.target.parentNode.querySelector(".card__like-count");

  if (evt.target.classList.contains("card__like-button_is-active")) {
    deleteLike(cardId)
      .then((updatedCard) => {
        evt.target.classList.remove("card__like-button_is-active");
        currentLikes.textContent = updatedCard.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    putLike(cardId)
      .then((updatedCard) => {
        evt.target.classList.add("card__like-button_is-active");
        currentLikes.textContent = updatedCard.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const buttonDelete = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  cardElement.querySelector(".card__title").textContent = cardData.name;
  //// //// //// //// ////
  cardElement.dataset.cardId = cardData._id;
  cardElement.dataset.ownerId = cardData.owner._id;
  //// счетчик лайков
  const cardLikeCount = cardElement.querySelector(".card__like-count");
  cardLikeCount.textContent = cardData.likes.length;
  ///////проверка на ранее сделанный лайк

  const cardId = cardData.owner._id;

  ////////////вариант проверки лайкнута ли пользователем карточка через сервер, но грузит долго!!!!!!
  /*   getUserIn () 
    .then((data) => {const cardsLikeArr = cardData.likes; 
      for(let i = 0; i < cardsLikeArr.length; i++) {
        if(cardsLikeArr[i]._id == data._id) {
          likeButton.classList.add("card__like-button_is-active");
        }
      }
    }); */

  const isLiked = cardData.likes.some(
    (like) => like._id === "1bbc0cd70de7e1b073cef78c"
  );
  if (isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  ////проверка создателя карты и удаление карты
  getUserIn();
  fetch(config.baseUrl + "/users/me", {
    headers: config.headers,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data._id == cardId) {
        buttonDelete.classList.remove("card__delete-button-unactive");
      }
    });

  buttonDelete.addEventListener("click", deleteCard);

  //////////лайк
  const cardLike = cardElement.querySelector(".card__like-button");
  cardLike.addEventListener("click", (evt) => like(evt, cardData._id));
  ///показ картинки
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
