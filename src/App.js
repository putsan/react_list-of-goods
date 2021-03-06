import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { MyButton } from './components/MyButton';
import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';

import './App.css';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.PureComponent {
  state = {
    isVisible: false,
    isReversed: false,
    isSorted: false,
    defaultLength: 1,
  }

  showList = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortListByABC = () => {
    this.setState({
      isSorted: 'alphabet',
      isReversed: false,
    });
  }

  sortListByLength = () => {
    this.setState({
      isSorted: 'length',
      isReversed: false,
    });
  }

  resetList = () => {
    this.setState({
      isReversed: false,
      isSorted: false,
      defaultLength: 1,
    });
  }

  setLength = (event) => {
    this.setState({
      defaultLength: +event.target.value,
    });
  }

  render() {
    const {
      isVisible,
      isReversed,
      isSorted,
      defaultLength,
    } = this.state;
    const newGoods = goodsFromServer
      .filter(good => good.length >= defaultLength);

    if (isSorted) {
      newGoods.sort((g1, g2) => {
        if (isSorted === 'length') {
          return g1.length - g2.length;
        }

        return g1.localeCompare(g2);
      });
    }

    if (isReversed) {
      newGoods.reverse();
    }

    return (
      <Jumbotron className="App text-center js-container">
        <h1 className="display-4">Goods</h1>

        {!isVisible && (
          <MyButton
            onClick={this.showList}
            text="Start"
          />
        )}

        {isVisible && (
          <>
            <MyButton
              onClick={this.reverseList}
              text="Reverse"
            />

            <MyButton
              onClick={this.sortListByABC}
              text="Sort alphabetically"
            />

            <MyButton
              onClick={this.sortListByLength}
              text="Sort by length"
            />

            <MyButton
              onClick={this.resetList}
              text="Reset"
              variant="outline-danger"
            />

            <ListOfGoods
              goods={newGoods}
              defaultLength={defaultLength}
              setLength={this.setLength}
            />
          </>
        )}
      </Jumbotron>
    );
  }
}

export default App;
