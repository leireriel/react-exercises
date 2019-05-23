import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './FilmsForm.scss';

class FilmsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        title: null,
        theme: null,
        language: null
      }
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState((prevState, props) => {
      const newUserInfo = { ...prevState.userInfo };
      newUserInfo[id] = value;
      return { userInfo: newUserInfo };
    });
  }

  render() {
    return (
      <div className="form__card-films">
        <Form
          action={this.handleFormChange}
        />
        <Card
          state={this.state.userInfo}
        />
      </div>
    );
  }
}

export default FilmsForm;