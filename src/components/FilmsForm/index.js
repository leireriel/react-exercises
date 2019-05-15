import React from 'react';
import Form from './components/Form';

class FilmsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: '',
        text: '',
        language: ''
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
      <Form
        action={this.handleFormChange}
        state={this.state.userInfo}
      />
    );
  }
}

export default FilmsForm;