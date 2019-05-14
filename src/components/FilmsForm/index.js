import React from 'react';

class FilmsForm extends React.Component {
  render() {
    const {action} = this.props;
    const {name, text, language} = this.props.state;
    return (
      <div>
        <input type="text" className="input" onChange={action} id="name"/>
        <label htmlFor="Nombre">Nombre</label>

        <textarea name="" id="text" cols="30" rows="10" className="texarea" onChange={action}></textarea>

        <select name="" id="language" className="select" onChange={action}>
          <option value="Inglés">Inglés</option>
          <option value="Español">Español</option>
          <option value="Portugués">Portugués</option>
        </select>

        <div>
          <h3>{name}</h3>
          <p>{text}</p>
          <p>{language}</p>
        </div>
      </div>
    );
  }
}

export default FilmsForm;