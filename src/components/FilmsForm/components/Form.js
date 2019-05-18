import React from 'react';
import './Form.scss';

class Form extends React.Component {
  render() {
    const { action } = this.props;
    return (
      <form className="form">
        <label htmlFor="title">Título</label>
        <input
          className="input"
          id="title"
          type="text"
          placeholder="Harry Potter y la piedra filosofal"
          onChange={action}
        />

        <label htmlFor="theme">De qué trata</label>
        <textarea
          className="textareaMovies"
          id="theme"
          name="theme"
          cols="30"
          rows="1"
          placeholder="Un mundo mágico..."
          onChange={action}>
        </textarea>

        <label htmlFor="language">Idioma</label>
        <select
          className="select"
          id="language"
          name="lang"
          onChange={action}>
          <option
            value="Inglés">
            Inglés
          </option>
          <option
            value="Español">
            Español
          </option>
          <option
            value="Portugués">
            Portugués
          </option>
        </select>
      </form>
    );
  }
}

export default Form;