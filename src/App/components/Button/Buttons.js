import React, {Component} from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
        <button className={`button ${this.props.styles}`} href={this.props.link} >{this.props.label}</button>
    )
  }
}

export default Button;
