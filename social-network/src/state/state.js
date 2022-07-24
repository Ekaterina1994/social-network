let state = {
  profilePage: {
    postData: [
      { id: 1, post: "Hi", likesCount: 1 },
      { id: 2, post: "Hello", likesCount: 31 },
      { id: 3, post: "How are you", likesCount: 17 },
      { id: 4, post: "Hi hi", likesCount: 29 },
      { id: 5, post: "Bye", likesCount: 7 },
    ],
  },

  messagesPage: {
    dialogsData: [
      { name: "Anna", id: 1, key: 1 },
      { name: "Kate", id: 2, key: 2 },
      { name: "Victor", id: 3, key: 3 },
      { name: "Olga", id: 4, key: 4 },
      { name: "Boris", id: 5, key: 5 },
    ],
    messagesData: [
      { message: "hi", id: 1 },
      { message: "hi hi", id: 2 },
      { message: "hi hi hi", id: 3 },
      { message: "hi hi hi hi", id: 4 },
      { message: "hi hi hi hi hi", id: 5 },
    ],
  },
};

export default state;
