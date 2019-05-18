import React from 'react';
import './Form.scss';

class Form extends React.Component {
  render() {
    const { action } = this.props;
    return (
      <Form className="form">
        <label htmlFor="title">Título</label>
        <input type="text" className="input" onChange={action} id="title" />

        <label htmlFor="theme">De qué trata</label>
        <textarea className="textareaMovies" name="" id="theme" cols="30" rows="1" onChange={action}></textarea>

        <label htmlFor="language">Idioma</label>
        <select name="" id="language" className="select" onChange={action}>
          <option value="Inglés">Inglés</option>
          <option value="Español">Español</option>
          <option value="Portugués">Portugués</option>
        </select>
      </Form>
    );
  }
}

export default Form;