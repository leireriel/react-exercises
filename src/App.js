import React from 'react';
import ItemList from './components/ItemList';
import HalfPage from './components/HalfPage';
import OnionHater from './components/OnionHater';
import Destiny from './components/Destiny';
import InputMirror from './components/InputMirror';
import BlueSquare from './components/BlueSquare';
import SpaceShips from './components/SpaceShips';
import BtnBase from './components/BtnBase';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <h1>Exercises</h1>
        {/* Exercise 1 */}
        <h2>Exercise 1. Itemlist</h2>
        <ItemList />
        {/* Exercise 2 */}
        <h2>Exercise 2. Halfpage</h2>
        <HalfPage>
          <h3 className="name">Hi! Mi name is robot</h3>
          <ul className="list">
            <li className="item-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!</li>
            <li className="item-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!</li>
            <li className="item-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!</li>
          </ul>
        </HalfPage>
        {/* Exercise 3 */}
        <h2>Exercise 3. OnionHater</h2>
        <OnionHater />
        {/* Exercise 4 */}
        <h2>Exercise 4. Destiny</h2>
        <Destiny />
        {/* Exercise 5 */}
        <h2>Exercise 5. InputMirror</h2>
        <InputMirror />
        {/* Exercise 6 */}
        <h2>Exercise 6. BlueSquare</h2>
        <BlueSquare />
        {/* Exercise 7 */}
        <h2>Exercise 7. SpaceShips</h2>
        <SpaceShips />
        {/* Exercise 8 */}
        <h2>Exercise 8. BtnBase -- Practice with Node Modules</h2>
        <BtnBase />

      </React.Fragment>
    );
  }
}

export default App;