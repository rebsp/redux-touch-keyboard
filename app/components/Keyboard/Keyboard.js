import React from 'react'
import { chde, symbols } from './layouts';

import './style.scss';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSymbols: false,
      uppercase: false,
    };
  }

  getKeys() {
    let keysSet;
    if (this.state.showSymbols) {
      keysSet = symbols;
    } else {
      keysSet = chde;
    }

    return this.state.uppercase ? keysSet.map(keyRow => keyRow.map(key => isFinite(key) ? key : key.toUpperCase())) : keysSet;
  }

  render() {
    const keys = this.getKeys();
    const { keyPressed } = this.props;
    return (
      <div className="vkeyboard">
        { keys.map((row, i) =>
          <div key={`r${i}`} className="keyboard-row">
            { row.map((button, ii) => {
                switch (button.toLowerCase()) {
                  default:
                    return (
                      <button key={`b${ii}`} onClick={() => keyPressed(button)}>{button}</button>
                    );
                }
              }
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Keyboard;