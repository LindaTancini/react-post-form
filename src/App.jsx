//IMPORTAZIONI
import { useState } from "react";
import axios from "axios";

function App() {
  //CREO I CAMPI CHE ANDRANNO INSERITI NEL FORM
  const [formPost, setFormPost] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });
}

export default App;
