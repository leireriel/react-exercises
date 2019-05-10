import React from 'react';

const data = {
  "version": "v0.0.0",
  "palettes": [
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
    },
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
    }
  ]
};


class SpaceShips extends React.Component {
  render(){
    return(
      <div className="App">
        <ul className="palettes">
        {data.palettes.map(item => {
          return(
            <li className="palettes__item">
              <h2 className="palettes__title">{item.name}</h2>
              <p>
                <small>{item.from}</small> 
              </p>
              <ol>
                {item.colors.map(color => <li>#{color}</li>)}
                {/* De esta forma la variable color va a salir con cada item */}
              </ol>
              {/* small pone la letra más pequeña de forma proporcional */}
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default SpaceShips;


//El key se pone cada vez que haces .map

//Si la función no usa this, no hay que poner el bind. Tampoco si lo ejecutamos nosotros. 
//Sólo se pone bind cuando la función la ejecuta el componente o el navegador.

//Mirarme también this.children y prop.children