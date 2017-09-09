const cardsFromFakeDB = [{
    _id : 1,
    title : 'Talion: The Revenant from DB',
    priority : 'medium',
    createdBy : 'Luke',
    assignedTo : 'Niya Rose',
    stage: 'todo'
  },
  {
    _id : 2,
    title : 'Ready Player One from DB',
    priority : 'low',
    createdBy : 'new guy',
    assignedTo : 'you',
    stage: 'doing'

  },
  {
    _id : 3,
    title : 'Enders Game from DB',
    priority : 'high',
    createdBy : 'someone',
    assignedTo : 'someone else',
    stage: 'todo'
  },
  {
      _id : 4,
      title : 'doing1',
      priority : 'slow',
      createdBy : 'Luke',
      assignedTo : 'Niya Rose',
      stage: 'todo'
    },
    {
      _id : 5,
      title : 'doijg 2',
      priority : 'low',
      createdBy : 'new guy',
      assignedTo : 'you',
      stage: 'done'
    },
    {
      _id : 6,
      title : 'doing 3',
      priority : 'high',
      createdBy : 'someone',
      assignedTo : 'someone else',
      stage: 'done'
    }
];


export const getCardsFromFakeXHR = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
oReq.open("GET", "https://www.reddit.com/r/dogpictures/.json");
oReq.send();
});

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


   // cardsFromFakeDB.map((singleCard) => {
   //        if (parseInt(singleCard._id) === parseInt(card._id)) {
   //          singleCard.stage = 'doing';
   //        }
   //      });