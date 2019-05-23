import React from 'react';
import ItemList from './components/ItemList';
import HalfPage from './components/HalfPage';
import OnionHater from './components/OnionHater';
import Destiny from './components/Destiny';
import InputMirror from './components/InputMirror';
import BlueSquare from './components/BlueSquare';
import SpaceShips from './components/SpaceShips';
import BtnBase from './components/BtnBase';
import ClockOrNot from './components/ClockOrNot';
import SheepCounter from './components/SheepCounter';
import FilmsForm from './components/FilmsForm';
import MimimiTranslator from './components/MimimiTranslator';
import NumberFilter from './components/NumberFilter';
import Directory from './components/Directory';
import DirectoryRoutes from './components/DirectoryRoutes';
import PokeRepaso from './components/PokeRepaso';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Exercises</h1>

        <h2>Exercise 1. Itemlist</h2>
        <ItemList />

        <h2>Exercise 2. Halfpage</h2>
        <HalfPage>
          <h3 className="name">Hi! Mi name is robot</h3>
          <ul className="list">
            <li className="item-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!</li>
            <li className="item-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!</li>
            <li className="item-list">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident. Sit odio dolores accusantium ut eos aliquam assumenda vel ab!</li>
          </ul>
        </HalfPage>

        <h2>Exercise 3. OnionHater</h2>
        <OnionHater />

        <h2>Exercise 4. Destiny</h2>
        <Destiny />

        <h2>Exercise 5. InputMirror</h2>
        <InputMirror />

        <h2>Exercise 6. BlueSquare</h2>
        <BlueSquare />

        <h2>Exercise 7. SpaceShips</h2>
        <SpaceShips />

        <h2>Exercise 8. BtnBase -- Practice with Node Modules</h2>
        <BtnBase />

        <h2>Exercise 9. ClockOrNot</h2>
        <ClockOrNot />
 
        <h2>Exercise 10. SheepCounter</h2>
        <SheepCounter />

        <h2>Exercise 11. FilmsForm</h2>
        <FilmsForm />

        <h2>Exercise 12. MimimiTranslator</h2>
        <MimimiTranslator />

        <h2>Exercise 13. NumberFilter</h2>
        <NumberFilter />

        <h2>Exercise 14. Directory</h2>
        <Directory />

        <h2>Exercise 15. DirectoryRoutes</h2>
        <DirectoryRoutes />

        <h2>Exercise 16. PokeRepaso</h2>
        <PokeRepaso />

      </React.Fragment>
    );
  }
}

export default App;