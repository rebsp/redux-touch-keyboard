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

    this.handleShiftClick = this.handleShiftClick.bind(this);
    this.handleSymbolsClick = this.handleSymbolsClick.bind(this);
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

  handleShiftClick() {
    this.setState({ uppercase: !this.state.uppercase });
  }

  handleSymbolsClick() {
    this.setState({ showSymbols: !this.state.showSymbols });
  }

  getSymbolLabel() {
    return this.state.showSymbols ? "ABC" : "?123";
  }

  render() {
    const keys = this.getKeys();
    const { keyPressed, backspacePressed, onRequestClose } = this.props;
    return (
      <div className="vkeyboard">
        <p class="keyboard-preview">{this.props.preview || ""}</p>
        { keys.map((row, i) =>
          <div key={`r${i}`} className="keyboard-row">
            { row.map((button, ii) => {
                switch (button.toLowerCase()) {
                  case "{shift}":
                    return (
                      <button className="keyboard-shift" key={`b${ii}`} onClick={this.handleShiftClick}>{"\u21e7"}</button>
                    );
                  case "{backspace}":
                    return (
                      <button className="keyboard-backspace" key={`b${ii}`} onClick={backspacePressed}>{"\u232b"}</button>
                    );
                  case "{?123}":
                    return (
                      <button className="keyboard-symbols" key={`b${ii}`} onClick={this.handleSymbolsClick}>{this.getSymbolLabel()}</button>
                    );
                  case "{space}":
                    return (
                      <button className="keyboard-space" key={`b${ii}`} onClick={() => keyPressed(" ")}>{"\u2423"}</button>
                    );
                  case "{accept}":
                    return (
                      <button className="keyboard-accept" key={`b${ii}`} onClick={onRequestClose}>{"\u21b5"}</button>
                    );
                  default:
                    return (
                      <button className="keyboard-key" key={`b${ii}`} onClick={() => keyPressed(button)}>{button}</button>
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