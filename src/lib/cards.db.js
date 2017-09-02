const cardsFromFakeDB = [{
    _id : 1,
    title : 'Talion: The Revenant from DB',
    priority : 'medium',
    createdBy : 'Luke',
    assignedTo : 'Niya Rose'
  },
  {
    _id : 2,
    title : 'Ready Player One from DB',
    priority : 'low',
    createdBy : 'new guy',
    assignedTo : 'you'
  },
  {
    _id : 3,
    title : 'Enders Game from DB',
    priority : 'high',
    createdBy : 'someone',
    assignedTo : 'someone else'
  }
];

const doingCardsFromFakeDB = [{
    _id : 1,
    title : 'doing1',
    priority : 'slow',
    createdBy : 'Luke',
    assignedTo : 'Niya Rose'
  },
  {
    _id : 2,
    title : 'doijg 2',
    priority : 'low',
    createdBy : 'new guy',
    assignedTo : 'you'
  },
  {
    _id : 3,
    title : 'doing 3',
    priority : 'high',
    createdBy : 'someone',
    assignedTo : 'someone else'
  }
];


export const getCardsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(cardsFromFakeDB), 500);
});

export const getDoingCardsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(doingCardsFromFakeDB), 500);
});

export const addCardToFakeXHR = (card) => new Promise((resolve, reject) => {
  setTimeout(() => {
    card._id = Math.random();
    cardsFromFakeDB.push(card);
    resolve(cardsFromFakeDB);
  }, 500);
});

