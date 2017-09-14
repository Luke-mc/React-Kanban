const axios = require('axios');

const cardsFromFakeDB = [
];


export const getCardsFromFakeXHR = () =>  {
  axios.get('/cards')
  .then( response => {
    console.log(response.data);
  });
};

export const addCardToFakeXHR = (card) => new Promise((resolve, reject) => {
  setTimeout(() => {
    card._id = Math.floor(Math.random()*100);
    cardsFromFakeDB.push(card);
    resolve(cardsFromFakeDB);
  }, 500);
});

export const moveCardInFakeXHR = (card, status) => new Promise((resolve, reject) => {
    card.stage = status;
    resolve(cardsFromFakeDB);
});

export const deleteCardFromFakeXHR = (card) => new Promise((resolve, reject) => {
    cardsFromFakeDB.filter((thisCard) => {
      cardsFromFakeDB.title = 'test';
      return card._id !== parseInt(thisCard._id);
    });
    setTimeout(() => {
      resolve(cardsFromFakeDB);
  }, 500);
});

