import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addPost, updateNewPostText } from "./state/state";


export let rerenderEntireTree = (state) => {
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={ addPost } updateNewPostText={updateNewPostText} />
    </BrowserRouter>
  </React.StrictMode>
);
}