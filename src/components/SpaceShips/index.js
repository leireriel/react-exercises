import React from 'react';
import './SpaceShips.scss';

const data = {
  "version": "v0.0.0",
  "palettes": [
    {
      "name": "Nostromo",
      "from": "Alien",
      "colors": [
        "08070C",
        "F4F3F5",
        "121828",
        "464F75",
        "9ABEF2"
      ]
    },
    {
      "name": "Millenium Falcon",
      "from": "Star Wars",
      "colors": [
        "B6B6BE",
        "D8D7D4",
        "413A31",
        "746C66",
        "A32D2C"
      ]
    },
    {
      "name": "Tardis Blue",
      "from": "Doctor Who",
      "colors": [
        "003A6E",
        "9B9A99",
        "000000",
        "FFFFFF",
        "6F4500"
      ]
    },
    {
      "name": "Battlestar Galactica",
      "from": "Battlestar Galactica",
      "colors": [
        "080F19",
        "1B2E3F",
        "364269",
        "3D6973",
        "E5635F"
      ]
    },
    {
      "name": "Serenity",
      "from": "Firefly",
      "colors": [
        "3C5375",
        "7285A6",
        "96AABF",
        "F1DB7E",
        "0C0C0C"
      ]
    }
  ]
};

class Spaceships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsable: [true, false, false, false, false]
    }
    this.logMyColor = this.logMyColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  logMyColor(event) {
    const trigger = event.currentTarget;
    console.log(trigger.innerHTML);
    //Si la función no usa this, no hay que poner el bind. Tampoco si lo ejecutamos nosotros.
    //Sólo se pone bind cuando la función la ejecuta el componente o el navegador.
  }

  handleClick(event) {
    const trigger = event.currentTarget;
    this.setState((prevState, props) => {
      // const newCollapsable = { ...prevState.collapsable };
      // {trigger === newCollapsable[0] ? newCollapsable:[true, false, false, false, false] :
      //   trigger === newCollapsable[1] ? newCollapsable:[false, true, false, false, false] :
      //   trigger === newCollapsable[2] ? newCollapsable:[false, false, true, false, false] :
      //   trigger === newCollapsable[3] ? newCollapsable:[false, false, false, true, false] :
      //   trigger === newCollapsable[4] ? newCollapsable:[false, false, false, false, true]};      
        // return { collapsable: newCollapsable };
    });
    console.log(trigger);
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="App__title">Elige una paleta de colores :D</h3>
        <ul className="palettes">
          {data.palettes.map((item, index) => {
            return (
              <li className="palettes__item" key={index}>
                {/* El key se pone cada vez que haces .map */}
                <div className="title__container" onClick={this.handleClick}>
                  <div className="text__container">
                    <h4 className="palettes__title">{item.name}</h4>
                    <p><small>{item.from}</small></p>
                  </div>
                  <i className="fas fa-arrows-alt-v arrow"></i>
                </div>
                <ol className="palettes__colors">
                  {item.colors.map((color, indexColor) => {
                    return (
                      <li
                        style={{ backgroundColor: `#${color}` }}
                        key={indexColor}
                        onClick={this.logMyColor}
                      >
                        #{color}
                      </li>)
                  })}
                </ol>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

}

export default Spaceships;
