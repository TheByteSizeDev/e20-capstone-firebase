import { CapstoneTemplate } from "./components/CapstoneTemplate";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/compat/app"; // Import Firebase!!
import { firebaseConfig } from "./apiKeys"; // Import Your Config!!

firebase.initializeApp(firebaseConfig);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <CapstoneTemplate />
  </BrowserRouter>
);
