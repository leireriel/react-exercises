import React from 'react';

class Destiny extends React.Component {
  trip(event) {
    const trigger = event.target.value;
    alert(`Tu destino es viajar a ${trigger}`);
  }
  render() {
    return (
      <select onClick={this.trip} name="" id="">
        <option className="city" value="Buenos Aires">Buenos Aires</option>
        <option className="city" value="Tokio">Tokio</option>
        <option className="city" value="Sydney">Sydney</option>
        <option className="city" value="Praga">Praga</option>
        <option className="city" value="Boston">Boston</option>
      </select>
    );
  }
}

export default Destiny;