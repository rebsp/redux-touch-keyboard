import React from 'react'
import { chde, symbols } from './layouts';
import { SPACE, ACCEPT, SYMBOLS, BACKSPACE, SHIFT, LABEL_ABC, LABEL_SYMBOLS } from "./constants";
import './style.scss';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSymbols: false,
      uppercase: this.isUppercase(),
    };

    this.handleShiftClick = this.handleShiftClick.bind(this);
    this.handleSymbolsClick = this.handleSymbolsClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.preview !== prevProps.preview) {
      this.setState({ uppercase: this.isUppercase() });
    }
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
    return this.state.showSymbols ? LABEL_ABC : LABEL_SYMBOLS;
  }

  isUppercase() {
    const { preview } = this.props;
    return !preview || (preview.length > 0 && preview[preview.length - 1] === ' ');
  }

  render() {
    const keys = this.getKeys();
    const { keyPressed, backspacePressed, onRequestClose } = this.props;
    return (
      <div className="vkeyboard">
        <p className="keyboard-preview">{this.props.preview || ""}</p>
        { keys.map((row, i) =>
          <div key={`r${i}`} className="keyboard-row">
            { row.map((button, j) => {
                switch (button.toLowerCase()) {
                  case SHIFT:
                    return (
                      <button className="keyboard-shift" key={`b${j}`} onClick={this.handleShiftClick}>{"\u21e7"}</button>
                    );
                  case BACKSPACE:
                    return (
                      <button className="keyboard-backspace" key={`b${j}`} onClick={backspacePressed}>{"\u232b"}</button>
                    );
                  case SYMBOLS:
                    return (
                      <button className="keyboard-symbols" key={`b${j}`} onClick={this.handleSymbolsClick}>{this.getSymbolLabel()}</button>
                    );
                  case SPACE:
                    return (
                      <button className="keyboard-space" key={`b${j}`} onClick={() => keyPressed(" ")}>{"\u2423"}</button>
                    );
                  case ACCEPT:
                    return (
                      <button className="keyboard-accept" key={`b${j}`} onClick={onRequestClose}>{"\u21b5"}</button>
                    );
                  default:
                    return (
                      <button className="keyboard-key" key={`b${j}`} onClick={() => keyPressed(button)}>{button}</button>
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