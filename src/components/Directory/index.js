import React from 'react';
import fetchPeople from './services/PeopleService';
// import People from './components/People';

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      female: false,
      male: false
    };

    this.fetchNewPeople = this.fetchNewPeople.bind(this);
    this.handleFemale = this.handleFemale.bind(this);
    this.handleMale = this.handleMale.bind(this);
  }

  fetchNewPeople() {
    fetchPeople()
      .then(data => {
        // console.log(data.results);
        this.setState({
          people: data.results,
        });
      });
  }

  handleFemale(event) {
    const trigger = event.currentTarget.checked;
    this.setState({female: trigger});
  }

  handleMale(event) {
    const trigger = event.currentTarget.checked;
    this.setState({male: trigger});
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.fetchNewPeople}>click</button>
        <form action="">
        <h3>Gender</h3>
          <label htmlFor="female">
            <input type="checkbox" id="female" onClick={this.handleFemale} />Female
          </label>
          <label htmlFor="male">
            <input type="checkbox" id="male" onClick={this.handleMale} />Male
          </label>
          {/* Hacer otro filtro para ciudades (funcion para sacar array de ciudades no repetidas y map que crea checkbox aquí) */}
        </form>
        <ul>
          {this.state.people
          .filter(item => this.state.female === true ? item.gender === "female" : item)
          .filter(item => this.state.male === true ? item.gender === "male" : item)
          // .filter(item => (this.state.male ===true && this.state.female === true ? item : item)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
          .map((item, index) => {
            return <li key={index}>
              <h4>{item.name.first + ' ' + item.name.last}</h4>
              <img src={item.picture.thumbnail} alt={"Picture of" + item.name.first} />
              <h5>{item.location.city}</h5>
              <h5>{item.dob.age}</h5>
            </li>
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Directory;