//IMPORTAZIONI
import { useState } from "react";
import axios from "axios";
// METTO LE API DENTRO UNA VARIABILE ENDPOINT
const endpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function App() {
  //CREO I CAMPI CHE ANDRANNO INSERITI NEL FORM
  const [formPost, setFormPost] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });
  // CREO UNA FUNZIONE PER GESTIRE I CAMPI DEL FORM
  function handlePost(event) {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormPost((formPost) => ({
      ...formPost,
      [event.target.name]: value,
    }));
  }
  // CREO FUNZIONE PER SALVARE IL POST CHE CREO DENTRO IL FORM E IMPEDIRE IL CARICAMENTO DELLA PAGINA
  function savePost(event) {
    event.preventDefault();
    //VEDO IN CONSOLE
    console.log("POST CHE HO CREATO PER PROVARE CHE TUTTO FUNZIONI:", formPost);
    // CREO UNA CHIAMATA AXIOS PER CREARE I POST
    axios.post(endpoint, formPost).then((response) => {
      //VEDO IN CONSOLE IL POST CHE HO CREATO
      console.log("POST CREATO:", response.data);
    });
  }
  //CREO LA STRUTTURA HTML
  return (
    <>
      <h1>Crea un nuovo post</h1>
      <form onSubmit={savePost}>
        <div>
          <label htmlFor="author-element">Autore</label>
          <input
            type="text"
            id="author-element"
            placeholder="Nome autore"
            value={formPost.author}
            onChange={handlePost}
            name="author"
          />
        </div>

        <div>
          <label htmlFor="title-element">Titolo</label>
          <input
            type="text"
            id="title-element"
            placeholder="Titolo del post"
            value={formPost.title}
            onChange={handlePost}
            name="title"
          />
        </div>

        <div>
          <label htmlFor="body-element">Testo</label>
          <textarea
            id="body-element"
            placeholder="Contenuto del post"
            value={formPost.body}
            onChange={handlePost}
            name="body"
          />
        </div>

        <div>
          <label htmlFor="public-element">Pubblico</label>
          <input
            type="checkbox"
            id="public-element"
            checked={formPost.public}
            onChange={handlePost}
            name="public"
          />
        </div>
        <button type="submit">Salva il post</button>
      </form>
    </>
  );
}

export default App;
