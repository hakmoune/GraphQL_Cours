const usersList = [
  {
    id: 1,
    name: "Mehdi",
    username: "Hakmoune",
    age: 33,
    nationality: "Morocco",
    gendre: "MALE",
    friends: [
      {
        id: 2,
        name: "Souhail",
        username: "Hakmoune",
        age: 35,
        nationality: "Morocco",
        gendre: "MALE",
      },
      {
        id: 3,
        name: "Ibtissam",
        username: "Hakmoune",
        age: 27,
        nationality: "Morocco",
        gendre: "FEMALE",
      },
    ],
  },
  {
    id: 7,
    name: "Souhail",
    username: "Hakmoune",
    age: 35,
    nationality: "Morocco",
    gendre: "MALE",
    friends: [
      {
        id: 1,
        name: "Mehdi",
        username: "Hakmoune",
        age: 33,
        nationality: "Morocco",
        gendre: "MALE",
      },
    ],
  },
  {
    id: 3,
    name: "Ibtissam",
    username: "Hakmoune",
    age: 27,
    nationality: "Morocco",
    gendre: "FEMALE",
    friends: [],
  },
];

module.exports = {
  usersList,
};
